export default function Home() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-extrabold text-blue-600">Kevin Yaruro</h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-4xl font-semibold tracking-tight text-[color:var(--foreground)] sm:text-5xl">
          Desarrollador de Software
        </p>
        <p className="mx-auto mt-2 max-w-xl text-center text-4xl font-semibold tracking-tight text-[color:var(--foreground)] sm:text-4xl">
          ¬Editor de Video
        </p>

        {/* Grid con tus secciones */}
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          {/* Desarrollo de Software */}
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-[color:var(--card)] lg:rounded-l-4xl border border-[color:var(--border)]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-lg lg:rounded-l-[2rem]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-[color:var(--foreground)] max-lg:text-center">
                 Desarrollo de Software
                </p>
                <p className="mt-2 mb-1 max-w-lg text-sm text-[color:var(--muted-foreground)] max-lg:text-center">
                  Frontend Developer especializado en React, Next.js, TypeScript y Tailwind CSS.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                <img
                  src="https://images.pexels.com/photos/4792733/pexels-photo-4792733.jpeg?_gl=1*1r94igd*_ga*MTQ4MzUxNTE4Ni4xNzY3MTA3MDk0*_ga_8JE65Q40S6*czE3NjcxMDcwOTQkbzEkZzEkdDE3NjcxMDc3NTMkajEzJGwwJGgw"
                  className="w-full max-lg:max-w-xs rounded-lg mb-1"
                />
              </div>
            </div>
          </div>

          {/* Fullstack con Python & Flask */}
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-[color:var(--card)] lg:rounded-l-4xl border border-[color:var(--border)]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-lg">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-[color:var(--foreground)] max-lg:text-center">
                  Fullstack con Python & Flask
                </p>
                <p className="mt-2 mb-1 max-w-lg text-sm text-[color:var(--muted-foreground)] max-lg:text-center">
                  Proyectos Fullstack con Python y Flask, integrando APIs y backend sólido.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                <img
                  alt=""
                  src="https://images.pexels.com/photos/4976712/pexels-photo-4976712.jpeg?_gl=1*1xra4av*_ga*MTQ4MzUxNTE4Ni4xNzY3MTA3MDk0*_ga_8JE65Q40S6*czE3NjcxMDcwOTQkbzEkZzEkdDE3NjcxMDg1MjQkajQ4JGwwJGgw"
                  className="w-full max-lg:max-w-xs rounded-lg mb-1"
                />
              </div>
            </div>
          </div>

          {/* Código limpio y escalable */}
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-[color:var(--card)] lg:rounded-l-4xl border border-[color:var(--border)]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-lg">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-[color:var(--foreground)] max-lg:text-center">
                  Código limpio y escalable
                </p>
                <p className="mt-2 max-w-lg text-sm text-[color:var(--muted-foreground)] max-lg:text-center">
                  Buenas prácticas, seguridad y mantenibilidad.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                <img
                  alt=""
                  src="https://images.pexels.com/photos/4050465/pexels-photo-4050465.jpeg?_gl=1*1j38iot*_ga*MTQ4MzUxNTE4Ni4xNzY3MTA3MDk0*_ga_8JE65Q40S6*czE3NjcxMDcwOTQkbzEkZzEkdDE3NjcxMDkzODkkajYwJGwwJGgw"
                  className="w-full max-lg:max-w-xs rounded-lg mb-1"
                />
              </div>
            </div>
          </div>

          {/* Edición de Video */}
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-[color:var(--card)] lg:rounded-l-4xl border border-[color:var(--border)]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-lg">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-[color:var(--foreground)] max-lg:text-center">
                  Edición de Video
                </p>
                <p className="mt-2 mb-1 max-w-lg text-sm text-[color:var(--muted-foreground)] max-lg:text-center">
                  Creatividad + técnica para producir contenido audiovisual de calidad.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                <img
                  src="https://images.pexels.com/photos/11553189/pexels-photo-11553189.jpeg?_gl=1*11diumk*_ga*MTQ4MzUxNTE4Ni4xNzY3MTA3MDk0*_ga_8JE65Q40S6*czE3NjcxMDcwOTQkbzEkZzEkdDE3NjcxMDgzMTAkajQkbDAkaDA."
                  className="w-full max-lg:max-w-xs rounded-lg mb-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}