import { useState, useEffect } from 'react'
import { DotLoader } from 'react-spinners'
import { create, updateTrack } from '../../services/trackService'

const TrackForm = ({ setFormIsShown, editTrack, setEditTrack, getAllTracks  }) => {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formData, setFormData] = useState({
        title: '',
        artist: ''
    })

    useEffect(() => {
        if (editTrack) {
            setFormData({
                title: editTrack.title,
                artist: editTrack.artist
            })
        }
    }, [editTrack])

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (isSubmitting) return
        setIsSubmitting(true)


        try {
            let response
            if (editTrack) {
                response = await updateTrack(editTrack._id, formData)
            } else {
                response = await create(formData)
            }

            if (response.status === 200 || response.status === 201) {
                await getAllTracks()
                setFormIsShown(false)
                setEditTrack(null)
                
            }

        } catch (error) {
            console.log(error);
        }

        setIsSubmitting(false);
    }


    return (
        <div className="track-form-container">
            <h1>{editTrack ? 'Edit Track' : 'Add Your Track!'}</h1>
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
                    <div className="form-buttons">
                    <button type='submit'>Submit</button>
                    <button  className="cancel-btn" onClick={() => {
                        setFormIsShown(false)
                        setEditTrack(null)
                    }}> Cancel </button>
                    </div>
                    
                }


            </form>
        </div>
    )
}

export default TrackForm