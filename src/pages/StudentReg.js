import React,{ useState } from "react"

export default function StudentReg() {
    const [ image, setImage ] = useState([])
    const [ session, setSession ] = useState('')
    const [ surname, setSurname ] = useState('')
    const [ otherNames, setOtherNames ] = useState('')

    const onImageChange = ((e)=>{
        setImage([...e.target.files])
    })

    const handleSubmitProfile = (()=>{
        const data = { image, session, surname, otherNames}
        console.log(data)
    })

  return (
    <div className='student-reg'>
        <div className="student-reg-container">
            <div className="student-reg-header">
                <h4> <span>1/6</span> Registration form</h4>
            </div>
            <div className="profile-profile">
                <div className="student-form-input">
                    <label htmlFor="">Academic Session</label>
                    <input type="text" onChange={(e)=> setSession(e.target.value)} placeholder="Academic Session..." />
                </div>
                <div className="student-form-input">
                    <label htmlFor="">Surname</label>
                    <input type="text" onChange={(e)=> setSurname(e.target.value)} placeholder="Enter Surname" />
                </div>
                <div className="student-form-input">
                    <label htmlFor="">Other Names</label>
                    <input type="text" onChange={(e)=> setOtherNames(e.target.value)} placeholder="Enter Other Names" />
                </div>
                <div className="student-form-input">
                    <label htmlFor="">Upload your passport</label>
                    <input type="file" multiple accept="image/*" onChange={onImageChange} />
                </div>
                <div className="submit-btn">
                    <button onClick={handleSubmitProfile}>Proceed</button>
                </div>
            </div>

        </div>
    </div>
  )
}
