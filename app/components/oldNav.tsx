import React from 'react'

const oldNav = () => {
  return (
    <header className="bg-[#CBD2FB]  sticky top-0 z-50 text-sm font-medium bg-gray-900 border-b border-gray-800/75">
      <div className="flex items-center justify-between h-16 max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <nav className="hidden sm:flex sm:items-center sm:gap-4 lg:gap-8 ">
          <a href="/routes" className="">Routes</a>
          <a href="/create" className="">Create Route</a>
        </nav>
      </div>
    </header>
  )
}

export default oldNav