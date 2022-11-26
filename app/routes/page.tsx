import React from 'react'
import Nav from '../components/nav'

async function getRoutes() {
  const res = await fetch('http://127.0.0.1:8090/api/collections/routes/records?page=1&perPage=30' , 
   { cache: 'no-store'}
  );
  const data = await res.json()
  return data?.items as any[]
}

export default async function Routes() {
  const routes = await getRoutes()

  return (
    <div className=" bg-[#F0F9FD] w-100 h-screen min-h-full flex flex-col">
      <section className="w-100 h-full">
        <div className="">
          <div className="flex flex-col justify-center place-items-center mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
            <p className="text-4xl font-extrabold uppercase tracking-tighter text-transparent sm:text-5xl lg:text-7xl text-center">Your Routes</p>
            <div className="flex flex-col-reverse justify-center  place-items-center max-w-max m-8">
              {routes?.map((note) => {
                return (
                  <div key={note.id}>
                    <p>{note.title}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


