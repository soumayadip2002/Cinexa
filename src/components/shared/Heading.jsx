import React from 'react'

const Heading = ({heading}) => {
  return (
    <div className='py-1 font-bold text-3xl sm:text-xl' data-aos="fade-right" data-aos-duration="300" >
      <h1>{heading}</h1>
    </div>
  )
}

export default Heading
