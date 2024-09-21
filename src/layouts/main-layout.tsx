import {
  ArrowTrendingDownIcon,
  BoltIcon,
  Cog8ToothIcon,
  PresentationChartLineIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/outline'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const menus = [
    {
      name: 'Resumen',
      icon: <SquaresPlusIcon className='h-4 w-4' />,
    },
    {
      name: 'Producción',
      icon: <BoltIcon className='h-4 w-4' />,
    },
    {
      name: 'Consumo',
      icon: <ArrowTrendingDownIcon className='h-4 w-4' />,
    },
    {
      name: 'Históricos',
      icon: <PresentationChartLineIcon className='h-4 w-4' />,
    },
  ]
  return (
    <div className='flex min-h-screen w-full flex-col bg-stone-50 text-stone-800'>
      <main>
        <nav className='border-b bg-white py-2'>
          <div className='width-layout flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <img
                src='cuestablanca.png'
                alt='Cuestablanca'
                className='h-10 mix-blend-multiply'
              />
              <h1 className='font-medium'>Instalacion Cuesta Blanca</h1>
            </div>
            <div className='flex items-center gap-2'>
              <button>
                <Cog8ToothIcon className='h-5 w-5' />
              </button>
              <div className='mx-1 h-6 border-[0.5px]'></div>
              <div className='relative'>
                <div id='btn-show-menu-options-r0' className='cursor-pointer'>
                  <div className='flex items-center gap-2'>
                    <div className='mt-0.5 flex aspect-square h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-600'>
                      <p className='text-lg uppercase text-white'>g</p>
                    </div>
                    <div className='hidden overflow-hidden sm:block'>
                      <p className='truncate text-[14.5px] text-zinc-700'>
                        Gonzalo Salmerón
                      </p>
                      <p className='truncate text-xs text-zinc-400'>
                        gonzxlosalmeron@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <nav className='border-b bg-white py-2'>
          <div className='width-layout flex items-center gap-2'>
            {menus.map(({ name, icon }, i) => (
              <button
                key={i}
                className={`flex items-center gap-2 rounded-md px-2.5 py-1.5 text-sm ${
                  i === 3 ? 'bg-stone-100 font-medium' : 'hover:bg-stone-100'
                }`}
              >
                {icon}
                <span>{name}</span>
              </button>
            ))}
          </div>
        </nav>

        <div className='width-layout py-6'>{children}</div>
      </main>
    </div>
  )
}
