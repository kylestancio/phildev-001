import React from 'react'
import JobItem from './JobItem'

export default function AvailableJobList() {

  const jobList = [
    { title: "Software Engineer", tags: ["🏠 Remote OK"] },
    { title: "QA Engineer", tags: ["🏠 Remote OK", "🌎 Apply from abroad"] },
    { title: "Mid-level Cyber Security Support", tags: ["🕒 Different timezone"] },
    { title: "Product Manager", tags: ["❌ No remote"] },
    { title: "Software Engineer", tags: ["🏠 Remote OK"] },
    { title: "QA Engineer", tags: ["🏠 Remote OK", "🌎 Apply from abroad"] },
    { title: "Mid-level Cyber Security Support", tags: ["🕒 Different timezone"] },
    { title: "Product Manager", tags: ["❌ No remote"] },
    { title: "Software Engineer", tags: ["🏠 Remote OK"] },
    { title: "QA Engineer", tags: ["🏠 Remote OK", "🌎 Apply from abroad"] },
    { title: "Mid-level Cyber Security Support", tags: ["🕒 Different timezone"] },
    { title: "Product Manager", tags: ["❌ No remote"] },
  ]

  return (
    <div>
      <div className="container mx-auto mt-10 columns-2">
        { jobList.map(job => <JobItem content={job} />)}
      </div>
      <div className='text-center my-10'>
        <button className='bg-purple-600 outline-purple-950 outline-offset-2 rounded-md py-2 px-5 text-white text-xl'>See more jobs 👉</button>
      </div>
    </div>
  )
}
