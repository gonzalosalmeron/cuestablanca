export const API_URL = (dateFrom: string, dateTo: string) =>
  dateFrom && dateTo
    ? `https://stg-app.energysequence.com/v2/datalog/?meter=5d12082581c1e06964703077&date_from=${dateFrom}&date_to=${dateTo}`
    : null
