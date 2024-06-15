import React from 'react';
import "../../styles/homeStyle.css"
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home-main-div' >
      <div className="home-content-div">
        <div className="content-div">
          <h1>Best Food Restaurant</h1>
          <p>Best food restaurant in pakistan</p>
          <Link to={"/menu"}>
            <button>
              Order Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
