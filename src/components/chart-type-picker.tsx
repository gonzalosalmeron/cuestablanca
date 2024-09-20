import { SetStateAction } from 'react'

export const ChartOptions = {
  line: 'Líneas',
  column: 'Columnas',
  area: 'Áreas',
}

export default function ChartTypePicker({
  chartType,
  setChartType,
}: {
  chartType: string
  setChartType: React.Dispatch<SetStateAction<string>>
}) {
  return (
    <label>
      Gráfico:
      <select
        defaultValue={chartType}
        onChange={(e: any) => setChartType(e.target.value)}
      >
        {Object.entries(ChartOptions).map(([key, value]) => (
          <option key={key} value={key}>
            {value}
          </option>
        ))}
      </select>
    </label>
  )
}
