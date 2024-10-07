import { useState } from 'react'
import './addbtn.css'
import UploadForm from '../UploadForm/UploadForm';

const Addbtn = () => {
  
  const [editOpen, setEditOpen] = useState(false);
  

  return (
  <div className='addbtn'>
  <div  className="custum-file-upload" onClick={(()=>setEditOpen(true))}>
  <div className="icon">
  <i className="fa-solid fa-folder-plus"></i>
  </div>
  <div className="text">
    <span className='text-center'>Click here to Organize Notes including images </span>
  </div>
</div>

{editOpen?  <UploadForm setEditOpen={setEditOpen}  /> : ""}
    </div>
  )
}

export default Addbtn