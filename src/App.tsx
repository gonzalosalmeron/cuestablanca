import { useState } from 'react'

import { SvgSpinner } from './libs/icons'
import { API_URL, useFetcher } from './libs/utils'

import ChartEnergy from '@/components/chart-energy'
import ChartTypePicker from '@/components/chart-type-picker'
import DataFrecuence from '@/components/data-frecuence'
import DatePicker from '@/components/date-picker'
import ValuePicker from '@/components/value-picker'

function App() {
  const [dates, setDates] = useState<Dates>({
    from: '',
    to: '',
  })
  const [data, setData] = useState(null)
  const [value, setValue] = useState<keyof ApiValue>('Energía Activa')
  const [chartType, setChartType] = useState('line')
  const [showChart, setShowChart] = useState(false)
  const {
    data: apiResponse,
    loading,
    error,
    refetch,
  } = useFetcher(API_URL(dates.from, dates.to))

  return (
    <>
      <header className='flex items-center justify-between gap-6 pb-8'>
        <div>
          <h4 className='text-xl font-[550]'>Bienvenid@, Gonzalo.</h4>
          <p className='text-sm text-stone-500'>
            Podrás consultar el histórico de tus datos aquí.
          </p>
        </div>
      </header>

      <div className='rounded-xl border bg-white px-6 pb-9 pt-4'>
        <h4 className='mb-6 text-base font-medium'>Datos históricos</h4>
        <div className='flex flex-wrap items-end gap-6'>
          <DatePicker dates={dates} setDates={setDates} />
          <DataFrecuence originalData={apiResponse} setNewData={setData} />
          <ValuePicker value={value} setValue={setValue} />
          <ChartTypePicker chartType={chartType} setChartType={setChartType} />
          <button
            onClick={() => {
              setShowChart(true)
              refetch()
            }}
            disabled={
              loading || !dates.from || !dates.to || !value || !chartType
            }
            className='flex h-fit items-center gap-2 bg-green-600 px-4 py-2 text-green-50 disabled:cursor-not-allowed disabled:opacity-90'
          >
            Generar Gráfico {loading && <SvgSpinner />}
          </button>
        </div>

        <div className='pt-4'>
          {error ? (
            <div className='bg-red-100 px-4 py-2 text-red-500'>{error}</div>
          ) : (
            <>
              {loading && (
                <div className='flex w-full items-center justify-center gap-2 bg-gray-100 py-4 text-zinc-900'>
                  Cargando datos... <SvgSpinner className='animate-spin' />
                </div>
              )}
              {data && showChart && !loading && (
                <ChartEnergy data={data} value={value} chartType={chartType} />
              )}
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default App
