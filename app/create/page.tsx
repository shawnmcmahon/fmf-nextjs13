import Nav from '../components/oldNav'
import Link from 'next/link'
import '../../output.css'


const create = () => {
  return (
    <div className=" bg-[#F0F9FD] w-100 h-screen min-h-full flex flex-col">
      <section className="w-100 h-full">
        <div className="">
          <div className="flex flex-col justify-center place-items-center mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
            <p className="text-4xl font-extrabold uppercase tracking-tighter text-transparent sm:text-5xl lg:text-7xl text-center">Create Route</p>
            <div className="flex flex-col-reverse justify-center  place-items-center max-w-max m-8">
            </div>
          </div>
        </div>
      </section>
    </div>
    )
}

export default create