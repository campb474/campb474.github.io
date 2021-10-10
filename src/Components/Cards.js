import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>Check out some of my projects</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                        src="../images/img-9.jpg"
                        text="Project description will go here"
                        label="Project Title"
                        path="/Proj1"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src="images/img-5.jpg"
                        text="Project description will go here"
                        label="Project Title"
                        path="/Proj2"
                        />
                        <CardItem 
                        src="images/img-3.jpg"
                        text="Project description will go here"
                        label="Project Title"
                        path="/Proj3"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
