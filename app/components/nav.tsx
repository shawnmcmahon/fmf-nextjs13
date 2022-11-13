import React from 'react'

const nav = () => {
  return (
    <header className="sticky top-0 z-50 text-sm font-medium text-white bg-gray-900 border-b border-gray-800/75">
      <div className="flex items-center justify-between h-16 max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <nav className="hidden sm:flex sm:items-center sm:gap-4 lg:gap-8 text-white">
          <a href="/routes" className="text-white">Routes</a>
          <a href="/createRoute" className="">Create Route</a>
        </nav>
      </div>
    </header>
  )
}

export default nav