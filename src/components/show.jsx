import React from 'react'
function Show({text,deleteNotes}) {
 
  return (
    <>
      <div className=' top-9 left-3 h-[5vh] w-[17vw] text-[3vw] lg:h-[10vh] text-center text-red-800 bg-cyan-300  fixed z-50'><h1>TOTAL = {text.length}</h1></div>
      
      <div className='relative gap-1 mt-24 bg-red-700 lg:top-28 lg:mb-24'>
      {text &&
        text.map((item) => {
          return <div key={item.id} className=' bg-amber-600 h-[20vh] w-[85vw] my-4 mx-5 text-white font-serif border-solid border-spacing-2 rounded-2xl overflow-x-hidden overflow-y-scroll break-words lg:mx-28 '>
            <div className='m-3  h-[5vh] w-[100vw] justify-center'>
              <input
              className='h-[6vh] w-[4vw]'
              type="checkbox"
                checked={item.completed} />
              <button onClick={()=>deleteNotes(item.id)} className='bg-white h-[6dvh] w-[7vw] m-3 hover:bg-black lg:w-[3vw]  ' >❌</button>
            </div>
            <div className='text-center'>
              <h1 className='text-5xl font-bold text-black'>{item.value.topic}</h1>
               <h1>{item.value.content}</h1>
              </div>
          </div>
        })
        }
        </div>
  
    </>
      
  )
}



export default Show