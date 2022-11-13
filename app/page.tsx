import Nav from './components/nav'

export default function Home() {
  return (
    <div className="border-4 border-red-700 bg-[#DFCEE6] w-100 h-screen min-h-full flex flex-col">
      <Nav />
      <section className="">
        <div className="w-100 h-full">
          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
            <p className="order-first bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text font-medium tracking-wide text-transparent text-center">Quick Sharable Maps</p>
            <p className="text-4xl font-extrabold uppercase tracking-tighter text-transparent sm:text-5xl lg:text-7xl text-center">Find Me Fast</p>
          </div>
        </div>
      </section>
    </div>
    )
}
