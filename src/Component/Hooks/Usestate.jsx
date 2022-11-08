import React, { useState,useEffect } from 'react'
// functional component ---> stateless component
export default function Usestate() {
    const [count, setCount] = useState(0);
    const [show,setShow]=useState(true);

    const showing =(e)=>{
        setShow(e.target.checked)
    }

    console.log("re-render")



    return (
        <div className='hook d-flex flex-column align-items-center justify-content-center'>
{/* short circuit code */}
{ show && <h1 className='text-warning'> Welcome to awesome 2nd part of React hooks </h1> }

            <h1> Counter: {count} </h1>
            <div>
                <button className='btn btn-warning' onClick={() => { setCount(count + 1); }}> Increment </button>
                <button className={show?'btn btn-danger':'btn btn-light'} onClick={() => { setCount(count - 1); }} > Decrement </button>
            </div>

            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" onChange={showing} checked={show} />
                    <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Checked switch checkbox input</label>
            </div>
        </div>
    )
}

