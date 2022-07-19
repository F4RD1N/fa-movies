import React from 'react'
const Footer = () => {
  const githubLink = 'https://github.com/F4RD1N'
  return (
    <div className='bg-secondary text-white py-5 flex justify-center items-center mt-16'>Made wtih ❤️ by <a className='ml-2 text-blue-400' href={githubLink} target='_blank'>#F4RD1N</a></div>
  )
}

export default Footer