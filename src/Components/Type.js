import React from "react"
import Typewriter from "typewriter-effect"
import './Type.css'

function Type() {
    return (
        <Typewriter
            options={{
                strings:[
                    "Hi I'm Matthew Campbell",
                    "Welcome to My Website",
                    "Have Fun and Explore"
                ],
                autoStart: true,
                loop: true,
                delay: 100, // SET TO USE A 1 SECOND DELAY
                deleteSpeed: 50,
            }}
        />
    );
}

export default Type;