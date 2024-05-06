import React from 'react'

const Anchor = ({href, value, id}) => {
  return (
   <div className='flex items-center justify-center text-[18px]'><a className='text-white font-bold anchor' href={href}>{value}</a></div> 
  )
}

export default Anchor