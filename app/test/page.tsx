'use client'

import React from 'react'
import Image from 'next/image'
import Script from 'next/script'

export default function page() {
  return (
  <div className="bg-[#CBD2FB] w-100 h-screen min-h-full flex flex-col">
  <section className="w-100 h-full">
    <div className="">
      <div className="flex flex-col justify-center place-items-center mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <p className="order-first bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text font-medium tracking-wide text-transparent text-center">Create Better Maps </p>
        <p className="text-4xl font-extrabold uppercase tracking-tighter text-transparent sm:text-5xl lg:text-7xl text-center">Find Me Fast</p>
        <p className="mx-auto mt-8 max-w-2xl text-xl font-medium text-white text-center">Create quick, sharable routes with anyone using Google Maps.</p>
        <p className="mx-auto mt-0 max-w-2xl text-xl font-medium text-white text-center">Step-by-step maps to help you get found no matter where you are.  </p>
        <div className="flex flex-col-reverse justify-center  place-items-center max-w-max m-8">
          <button className="max-w-max flex flex-col-reverse place-items-center border-2 p-2 rounded-lg"> 
          <p className="order-first bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text font-medium tracking-wide text-transparent text-center">Add Route</p>
          </button>
        </div>
      </div>
    </div>
  </section>
</div>
  )
}
