export default function DatePicker({ dates, setDates }: any) {
  return (
    <div className='flex gap-6'>
      <label className='flex flex-col text-sm text-gray-600'>
        Desde
        <input
          type='date'
          placeholder='Desde'
          value={dates?.from}
          onChange={(e) =>
            setDates((old: Dates) => ({ ...old, from: e.target.value }))
          }
          max={dates?.to || new Date().toISOString().split('T')[0]}
          className='border px-3 py-2 text-[15px] text-zinc-900 outline-none'
        />
      </label>
      <label className='flex flex-col text-sm text-gray-600'>
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
          className='border px-3 py-2 text-[15px] text-zinc-900 outline-none'
        />
      </label>
    </div>
  )
}
