import Nav from './components/nav'
import addCircle from '../assets/images/addCircle.png'
import Image from 'next/image'
import Link from 'next/link'

const Home = () => {
  return (
    <div className="border-4 border-red-700 bg-[#CBD2FB] w-100 h-screen min-h-full flex flex-col">
      <Nav />
      <section className="w-100 h-full">
        <div className="">
          <div className="flex flex-col justify-center place-items-center mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
            <p className="order-first bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text font-medium tracking-wide text-transparent text-center">Create Better Maps </p>
            <p className="text-4xl font-extrabold uppercase tracking-tighter text-transparent sm:text-5xl lg:text-7xl text-center">Find Me Fast</p>
            <p className="mx-auto mt-8 max-w-2xl text-xl font-medium text-white text-center">Create quick, sharable routes with anyone using Google Maps.</p>
            <p className="mx-auto mt-0 max-w-2xl text-xl font-medium text-white text-center">Step-by-step maps to help you get found no matter where you are.  </p>
            <div className="flex flex-col-reverse justify-center  place-items-center max-w-max m-8">
              <Link href="/create">
              <button className="max-w-max flex flex-col-reverse place-items-center border-2 p-2 rounded-lg"> 
              <Image 
                className=""
                src={addCircle}
                alt="Add Circle"
                width={35}
                height={35}
                />
              <p className="order-first bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text font-medium tracking-wide text-transparent text-center">Add Route</p>
              </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
    )
}

export default Home