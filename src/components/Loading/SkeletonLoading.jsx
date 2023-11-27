import React from 'react'

const SkeletonLoading = () => {
    const arr = [
        1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34
    ]
  return (
    <div className="w-[95%] m-auto">
        <div className='grid grid-cols-6 gap-4'>
        {
           arr.map((index)=>(
            <div key={index} className='bg-slate-500 h-5 w-5'>
                
            </div>
           )) 
        }
        </div>
    </div>
  )
}

export default SkeletonLoading
