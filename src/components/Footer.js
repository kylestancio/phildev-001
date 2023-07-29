import React from 'react'

export default function Footer() {

  const technologies = [
    "NodeJS", "ReactJS", "TailwindCSS", "Babel", "WebPack"
  ]

  return (
    <>
      <div className='bg-slate-800 py-5'>
        <div className="container mx-auto">
          <p className="text-white">This website is developed with the use of the following technologies:</p>
          <ul className='text-white list-inside mt-5'>
            { technologies.map( technology => <li>🌐 {technology}</li>)}
          </ul>
        </div>
      </div>
      <div className='bg-slate-900 py-5'>
        <div className="container mx-auto">
          <p className="text-white font-mono">👤 Created by <a href='https://github.com/kylestancio' className='text-blue-500 hover:underline underline-offset-4'>Kyle Stephen Tancio</a></p>
          <p className="text-white font-mono">🖥️ Inspired by the <a href='https://japan-dev.com/' className='text-blue-500 hover:underline underline-offset-4'>Japan Dev website</a></p>
        </div>
      </div>
    </>
  )
}
