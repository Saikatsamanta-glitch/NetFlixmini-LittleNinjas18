import React from 'react';
import NavScrollExample from '../Component/Appbar';
import BasicExample from '../Component/MovieCard';
import { moviedata } from '../Resource/assests';
const Home = () => {
    const search = "adam";
    return (
        <>
            <h1 className="text-center">Welcome to <span className='text-red'> Netflix mini 🎉</span> </h1>
            <div className="container mt-4 gridcard">
                {/*  map, filter and reduce ✅ loops ❌ */}
                {
                   moviedata.map((val)=>{
                        return <BasicExample name={val.name} desc={val.desc} img={val.img}/>
                   }) 
                }
            </div>
        </>

    )
}

export default Home;


