import React, { useState }  from 'react'

function Sidebar({ save, }) {
    const [data, setdata] = useState({
         topic: "",
        content: "",
    })
    const [error, seterror] = useState("")
    const handel = (e) => {
        setdata({
            ...data,
            [e.target.name]: e.target.value })
    }
    const validat = () => {
     
        if (!data.topic || !data.content) {
            seterror("all field are required")
            return false;
        }
      
        seterror("");
        return true;
        
    }
    const btn = (e) => {
        e.preventDefault();
    
        if (!validat()) return;
       save({
          id: Date.now(),
          value : data
        });
        setdata({
            topic: "",
            content: ""
        });
        
    };
   
   
  return (
      <>
          
          <div type='form' className=' relative  mx-12 mb-3 top-20 bg-zinc-500 h-[75vh] w-[70vw] text-center p-4 justify-center lg:mx-[35vh] lg:top-[30vh] lg:h-[90vh]'>
              {error &&<p className='bg-red-700 text-amber-300'>{error}</p>}
          <h1 className='font-bold text-[5vw] m-2 '>TOPIC</h1>
              <input type="text"
                  placeholder='topic'
                  name="topic"
                  onChange={handel}
                  value={data.topic}
                  className='h-[8vh] w-[45vw] ' />
         
          <h1 className='font-bold text-[5vw] m-2'>CONTENT</h1>
              <textarea type="text"
                  placeholder='content'
                  name="content"
                  onChange={handel}
                  value={data.content}
                  className='h-[30vh] w-[45vw]  
                   resize-none
                   overflow-x-hidden
                   overflow-y-scroll
                   break-words'/>
              <div>
          <button className='bg-green-600 text-white h-[6vh] w-[15vw] hover:bg-green-200 hover:text-black mt-2'  onClick={btn}> SAVE</button>
             </div>   
            </div>
          </>
  )
}

export default Sidebar