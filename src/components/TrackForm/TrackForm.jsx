import {useState} from 'react'
import { DotLoader } from 'react-spinners'
import { create } from '../../services/trackService'

const TrackForm = ({setFormIsShown}) => {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formData,setFormData] = useState({
        title:'',
        artist:''
    })
    
    const handleChange = (event) => {
       setFormData({...formData,[event.target.name]: event.target.value})
    }

    const handleSubmit = async(event) => {
        event.preventDefault()

        if (isSubmitting) return
        setIsSubmitting(true)

      
      const response = await create(formData)
      console.log(response)
      if(response.status===201){
        setFormIsShown(false)
      }
      setIsSubmitting(false)
    }


    return (
        <div>
            <h1>Add Your Track!</h1>
            <form onSubmit={handleSubmit}>

                <label htmlFor="title">Title:</label>
               <input 
               id="title"
               name="title"
               type="text"
               onChange={handleChange}
               value={formData.title}
               /><br /><br />

                <label htmlFor="artist">Artist:</label>
               <input 
               id="artist"
               name="artist"
               type="text"
               onChange={handleChange}
               value={formData.artist}
                /><br /><br />


                
                {isSubmitting 
                ?
                 <DotLoader />
                 :
                 <button type='submit'>Submit</button>
                }
                

            </form>
        </div>
    )
}

export default TrackForm