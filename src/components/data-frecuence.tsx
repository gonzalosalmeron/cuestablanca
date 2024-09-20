import { useEffect, useMemo, useState } from 'react'

export default function DataFrecuence({ originalData, setNewData }: any) {
  const frecuences = {
    quarter: '15 minutos',
    day: 'Diaria',
    week: 'Semanal',
    month: 'Mensual',
    annual: 'Anual',
  }
  const [frecuency, setFrecuency] = useState<keyof typeof frecuences>('quarter')

  const calculatedData = useMemo(() => {
    return groupByFrequency(originalData, frecuency)
  }, [originalData, frecuency])

  useEffect(() => {
    setNewData(calculatedData)
  }, [calculatedData])

  return (
    <div>
      <label>
        Frecuencia datos:
        <select
          className='min-w-[180px]'
          onChange={(e) =>
            setFrecuency(e.target.value as keyof typeof frecuences)
          }
        >
          <option hidden>Selecciona</option>
          {Object.entries(frecuences).map(([key, value]) => (
            <option key={key} value={key}>
              {value}
            </option>
          ))}
        </select>
      </label>
    </div>
  )
}

const groupByFrequency = (data: Record<string, any>[], frequency: string) => {
  try {
    const groupedData: Record<string, Record<any, number>> = {}

    const formatters: Record<string, (date: Date) => string> = {
      quarter: (d: Date) =>
        `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()} ${d.getHours()}:${Math.floor(d.getMinutes() / 15) * 15}`,
      day: (d: Date) => `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`,
      week: (d: Date) =>
        `${d.getFullYear()}-${d.getMonth() + 1}-${Math.ceil(d.getDate() / 7) + 1}`,
      month: (d: Date) => `${d.getFullYear()}-${d.getMonth() + 1}`,
      annual: (d: Date) => `${d.getFullYear()}`,
      default: (d: Date) =>
        `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`,
    }

    data.forEach(({ date, values }) => {
      const d = new Date(date)
      const key = (formatters[frequency] || formatters.default)(d)

      groupedData[key] = groupedData[key] || {}
      ;(Object.keys(values) as any).forEach((k: any) => {
        groupedData[key][k] = (groupedData[key][k] || 0) + values[k]
      })
    })

    return groupedData
  } catch {
    // TODO: SEND ERROR REPORT
    return []
  }
}
