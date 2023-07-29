import React from 'react'

export default function JobItem({content}) {
  return (
    <div className='container border border-gray-300 mb-3 rounded-md p-1 flex hover:bg-gray-100'>
      <img src="./images/placeholder-img.png" alt="placeholder" width={'90px'} height={'90px'} className='m-3 border' />
      <div className="ml-2 my-3 flex flex-col">
        <h1 className='text-xl font-semibold'>{ content.title }</h1>
        <p className='grow'>Company Name</p>
        <div className="tags">
          { content.tags.map(tag => {return (
              <p className='inline bg-gray-200 text-gray-600 font-semibold rounded-md text-xs px-2 py-[3.1px] mr-3'>{ tag }</p>
            )}
          )}
        </div>
      </div>
    </div>
  )
}
