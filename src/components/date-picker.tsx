import { SetStateAction } from 'react'

export default function DatePicker({
  dates,
  setDates,
}: {
  dates: Dates
  setDates: React.Dispatch<SetStateAction<Dates>>
}) {
  return (
    <div className='flex gap-6'>
      <label>
        Desde
        <input
          type='date'
          placeholder='Desde'
          value={dates?.from}
          onChange={(e) =>
            setDates((old: Dates) => ({ ...old, from: e.target.value }))
          }
          max={dates?.to || new Date().toISOString().split('T')[0]}
        />
      </label>
      <label>
        Hasta
        <input
          type='date'
          value={dates?.to}
          onChange={(e) =>
            setDates((old: Dates) => ({ ...old, to: e.target.value }))
          }
          min={dates?.from}
          max={new Date().toISOString().split('T')[0]}
          placeholder='Desde'
        />
      </label>
    </div>
  )
}
