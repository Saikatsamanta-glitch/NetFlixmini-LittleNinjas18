import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Movie_typecard(props) {
    const { img, _id, name, desc, type } = props.data
    return (
        <NavLink to={'/player/' + _id + "/" + type} style={{color:'white'}} >
            <div className="movie_typecard m-1 d-flex p-2">
                <img src={img} alt="" height="90%" />

                <div className='ms-3'>
                    <h4 className=''>{name}</h4>
                    <h6 className='para_desc'>{desc}</h6>
                </div>
            </div >
        </NavLink>
    )
}
