import React from 'react'
import { useParams } from 'react-router-dom'
import Movie_typecard from '../../Component/Movie_typecard';
import { moviedata } from '../../Resource/assests';
export default function Player() {
  const {id,type}=useParams();
  return (
    <div className='container player_page  '>
       <div className="player_right ">

       <iframe width="100%" height="100%" src={"https://www.youtube.com/embed/"+id}></iframe>


       </div>
       <div className="player_left ">
           {
            moviedata.map((val)=>{
              if(type===val.type && id!==val._id){
                return( 
                  <Movie_typecard data={val}/>
                )
              }
            })
           }
       </div>
       
    </div>
    
  )
}
