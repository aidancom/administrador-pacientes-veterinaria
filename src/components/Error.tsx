import React from 'react'

const Error = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
      <p className='bg-red-500 text-white uppercase text-center w-full py-2 font-medium'>{children}</p>
    </div>
  )
}

export default Error
