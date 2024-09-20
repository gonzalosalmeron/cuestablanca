import { useMemo, useRef, useState } from 'react'

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import ChartTypePicker, { ChartOptions } from '@/components/chart-type-picker'
import DataFrecuence from '@/components/data-frecuence'
import DatePicker from '@/components/date-picker'
import ValuePicker from '@/components/value-picker'

import json from '@/assets/data.json'

function extractSeriesData(data: any, key: string) {
  return Object.keys(data ?? {}).map((day: string) => ({
    x: new Date(day).getTime(),
    y: data[day][key],
  }))
}

function App() {
  const [dates, setDates] = useState<Dates>({
    from: '',
    to: '',
  })
  const [data, setData] = useState([])
  const [value, setValue] = useState<keyof ApiValue>('Energía Activa')
  const [chartType, setChartType] = useState('line')
  const [showChart, setShowChart] = useState(false)

  const chartOptions = useMemo<Highcharts.Options>(
    () => ({
      title: {
        text: 'Gráfico de Energía',
      },
      xAxis: {
        type: 'datetime',
      },
      yAxis: {
        title: {
          text: 'Valores',
        },
      },
      series: [
        {
          name: value,
          type: chartType as keyof typeof ChartOptions,
          data: extractSeriesData(data, value),
        },
      ],
    }),
    [data, value, chartType]
  )

  const chartComponentRef = useRef<HighchartsReact.RefObject>(null)

  // TODO: FETCH API

  return (
    <div className='p-20'>
      <div className='flex items-end gap-6'>
        <DatePicker dates={dates} setDates={setDates} />
        <DataFrecuence originalData={json} setNewData={setData} />
        <ValuePicker value={value} setValue={setValue} />
        <ChartTypePicker chartType={chartType} setChartType={setChartType} />
        <button
          onClick={() => setShowChart(true)}
          className='h-fit bg-green-600 px-4 py-2 text-green-50'
        >
          Generar Gráfico
        </button>
      </div>

      <div className='pt-4'>
        {data && showChart && (
          <HighchartsReact
            highcharts={Highcharts}
            options={chartOptions}
            ref={chartComponentRef}
          />
        )}
      </div>
    </div>
  )
}

export default App
