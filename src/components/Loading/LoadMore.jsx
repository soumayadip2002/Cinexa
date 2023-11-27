import React from 'react'
import loadmore from '/assets/loadmore.svg'
const LoadMore = () => {
  return (
    <div className='flex justify-center py-4 px-2'>
      <img src={loadmore} alt="loadmore" className='h-10 w-10' />
    </div>
  )
}

export default LoadMore
