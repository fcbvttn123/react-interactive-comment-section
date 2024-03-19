import { useState } from "react"
import { Navigate, useOutletContext } from "react-router-dom"

export function AddComment() {
    const [formData, setFormData] = useState({
        comment: ""
    })
    const {currentSignedInUser} = useOutletContext()
    const [formSubmitted, setFormSubmitted] = useState(false)

    function handleFormChange(e) {
        let {name, value} = e.target
        setFormData(prev => {
            return {
                ...prev, 
                [name]: value
            }
        })
    }

    function formSubmission(e) {
        e.preventDefault()
        if(formData.comment.replace(/\s/g, "") !== "") {
            console.log(formData)
            setFormSubmitted(true)
        }
    }

    return (
        formSubmitted ? <Navigate to={".."}/> : 
        <form onSubmit={formSubmission} className="max-w-96 mx-auto p-4 rounded-lg bg-white">
            <textarea value={formData.comment} onChange={handleFormChange} className="p-4 border w-full h-32 rounded-lg font-semibold mb-4" name="comment" placeholder="Add a comment..."></textarea>
            <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-full bg-red-300">
                    <img src={`./images/avatars/${currentSignedInUser.image}`} />
                </div>
                <button className="text-white text-lg font-semibold bg-indigo-700 py-3 px-8 rounded-lg hover:opacity-80">Send</button>
            </div>
        </form>
    )

}