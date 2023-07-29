import React from 'react'

export default function Header() {
  return (
    <header class="w-full text-white bg-violet-950 border-t border-violet-900 shadow-sm body-font">
      <div class="container flex flex-col items-start justify-between p-5 mx-auto md:flex-row">
        <a class="flex items-center mb-4 font-medium text-white title-font md:mb-0">
          PhilDev
        </a>
        <nav class="flex flex-wrap items-center justify-center pl-6 ml-6 text-base md:mr-auto">
          <a href="#" class="mr-5 font-medium hover:underline underline-offset-8">🔍 Find Job</a>
          <a href="#" class="mr-5 font-medium hover:underline underline-offset-8">🏢 Companies</a>
          <a href="#" class="font-medium hover:underline underline-offset-8">ℹ️ About</a>
        </nav>
        <div class="items-center h-full">
          <a href="#"
              class="px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 bg-purple-500 rounded shadow outline-none active:bg-purple-600 hover:shadow-md focus:outline-none ease">
              Post Job Opening
          </a>
        </div>
      </div>
    </header>
  )
}
