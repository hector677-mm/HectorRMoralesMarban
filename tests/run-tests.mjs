import { chromium } from 'playwright';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dir = dirname(fileURLToPath(import.meta.url));
const testCode = readFileSync(join(__dir, 'spa-tests.js'), 'utf8');

const browser = await chromium.launch();
const page    = await browser.newPage();

/* Capturar salida de consola del navegador */
const results = [];
page.on('console', msg => {
  const type = msg.type();
  const text = msg.text();
  results.push({ type, text });

  const icon = type === 'error' ? '❌' : type === 'warning' ? '⚠️ ' : '   ';
  // strip %c style directives for terminal output
  const clean = text.replace(/%c[^,]*/g, '').replace(/color:[^;]+;[^'"]*/g, '').trim();
  if (clean) console.log(icon, clean);
});

page.on('pageerror', err => {
  console.error('PAGE ERROR:', err.message);
});

await page.goto('http://localhost:8080');
await page.waitForTimeout(600);   /* espera que la SPA inicialice */

/* Inyectar y ejecutar la suite */
await page.evaluate(testCode);
await page.waitForTimeout(8000);  /* las pruebas navegan ~10 rutas × 400ms */

await browser.close();

/* Resumen final */
const summary = results.find(r => r.text.includes('pruebas pasaron'));
if (summary) {
  const clean = summary.text.replace(/%c/g, '').replace(/color:[^;]+;[^,]*/g, '').trim();
  console.log('\n' + '─'.repeat(50));
  console.log(clean);
}
