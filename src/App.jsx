import React, { useState } from 'react'
import Navabr from './component2/navabr'
import Show from './component2/show'
import Sidebar from './component2/sidebar'

function App() {
  const [out, setout] = useState([])
  const [edit, setedit] = useState(null)

  const savenotes = (note) => {
    if (edit) {
      setout(
        out.map((n) =>
          n.id === edit.id ? { ...note, id: edit.id } : n)
      );
  
      setedit(null);
    }
    else {
  
        setout( [...out, {...note,id: Date.now()}])
      
    }
  }
    const deleteNotes = (id) => {
      setout(out.filter((item) => item.id !== id))
    }

    console.log(out)
    //const filterd = out.filter(note => 
    // note.value.topic.toLowerCase().includes(search.toLowerCase()) ||
    // note.value.content.toLowerCase().includes(search.toLowerCase())
    //)
    return (
      <>
        <div className='w-full min-h-[150%] bg-black lg:h-[200%]'>
                  
          {/* navbar*/}
          <Navabr />
          {/*search*/}
          {/*sidebar*/}
          <Sidebar save={savenotes}
            edit={edit} />
          {/*show*/}
          <Show text={out}
            deleteNotes={deleteNotes}
            edit={setedit} />
        </div>
         
      </>
    )
  }


export default App
