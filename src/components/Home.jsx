import React from 'react'

const Home = () => {
    return (
        <div>
            <div className="container">
                <div className="cover">
                    <img src={'./images/work.svg'} alt="BackImage" className="imageBack"/>
                </div>
                <div className="content">
                    <h1>React js <span>randomiser</span></h1>
                    <h2>A free, open-source API for generating random user data. Like Lorem Ipsum, but for people & quotes.</h2>
                    <button type="button" className="button">
                        <span className="button__text">Learn more</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home
