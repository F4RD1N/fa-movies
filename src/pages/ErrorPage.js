import React from 'react'

export default function ErrorPage() {
  return (
    <section className='flex justify-center items-center h-screen text-white'>
        <div className='flex flex-col justify-center items-center space-y-8'>
        <h1 className='text-8xl'>OOPS<span className='text-yellow-500'>!</span></h1>
        <h3>This website uses an API that is not available in your country. <span className='underline underline-offset-4'>Please use an VPN</span></h3>
        </div>
    </section>
  )
}
