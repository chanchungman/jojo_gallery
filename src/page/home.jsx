import React from 'react'
import Box from '../components/Box'
import { useEffect, useState, useContext, useRef } from 'react'
import { Character, Filter } from '../asset/gallery_data'
import bg from '../asset/bgsub.jpg'

const Home = () => {
    const [character, setCharacter] = useState(Character)
    const setfilter = (_category) => {
        const result = Character.filter((currData) =>
             currData.category == _category
        )
        setCharacter(result);
    }

    return (

        <div style={{
            backgroundImage: `url(${bg})`
        }}  key="bg">

            <div className="d-flex justify-content-center" >
                {Filter.map((e, index) => (
                    <div key={index} className="m-4  d-md-inline " >
                        <button onClick={() => setfilter(e.value)} className="btn btn-dark border-white">{e.title}</button>
                    </div>

                ))
                }
                <div className="m-4 d-md-inline" key="clear_filter">
                    <button onClick={() => setCharacter(Character)} className="btn btn-dark border-white">Clear Filter</button>
                </div>
            </div>
            <br />
            <div className='row' key="show_image">
                {character.map((value, index) => (
                    <div className='col-md-2 mb-4' key="image">
                        <div className="card" key={index} >
                            <img src={value.image} className="img-thumbnail " />

                            <div className=" card-body" key="text">
                                <h5 className="card-title fw-bold  d-md-inline ">{value.title}</h5>
                                {/* <p className="card-text mb-3">{value.description}</p> */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home