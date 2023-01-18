import React from 'react'
import vg from "../assets/2.webp"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillInstagram,AiFillYoutube} from "react-icons/ai"

const Home = () => {
  return (
    <>
      <div className="home">
      <main>
        <h1>TechyStar</h1>
        <p>solution to all your problems</p>
      </main>
      </div>

    <div className="home2">
      <img src={vg} alt="" srcset="" />
      <div>
        <p>
          We are your one and only solution to the tech
          problem you face everyday. We are leading tech company whose
          aim is to increase problem solving ability in children.
        </p>
      </div>
    </div>

    <div className="home3">
      <div>
        <h1>Who we are?</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci qui nisi quod et sed ipsum aut atque error sequi doloribus? Quod neque id similique, officiis ipsam sequi. Cumque atque nisi perspiciatis illo minus accusamus reiciendis itaque eius laborum, debitis eligendi quisquam, quasi quae temporibus praesentium. Neque fugiat voluptas magnam consequatur.</p>
      </div>
</div>

<div className="home4">
    <div>
      <h1>Brands</h1>
      <article>
        <div style={{
          animationDelay:"0.3s",
          }}>
          <AiFillGoogleCircle />
          <p>Google</p>
        </div>
        <div style={{
          animationDelay:"0.5s",
          }}>
          <AiFillAmazonCircle />
          <p>Amazon</p>
        </div>
        <div style={{
          animationDelay:"0.7s",
          }}>
          <AiFillGoogleCircle />
          <p>Google</p>
        </div>
      </article>
    </div>
</div>
    </>    
  )
}

export default Home