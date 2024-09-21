import { expect, test } from '@playwright/test'

test('Fill dates and show chart', async ({ page }) => {
  // navigate to the page
  await page.goto('http://localhost:5173')

  // wait for the main content to be loaded
  await page.locator('#root main').waitFor()

  // select the first input 'Desde'
  const inputDesde = await page.locator('input[type="date"]').first()
  await inputDesde.fill('2024-02-04')

  // select the second input 'Hasta'
  const inputHasta = await page.locator('input[type="date"]').nth(1)
  await inputHasta.fill('2024-02-10')

  // click btn to generate the chart
  const generarGraficoBtn = await page.locator(
    'button:has-text("Generar Gráfico")'
  )
  await generarGraficoBtn.click()

  // check the chart has been generated
  const chartDiv = await page.locator('div[data-highcharts-chart="1"]')
  await expect(chartDiv).toBeVisible()
})
