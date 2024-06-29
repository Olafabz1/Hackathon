import React from "react";
import './section.css'


function Section() {
  return (
   <>
    <div className="text-center font-black text-xl pt-10">
       <h3>We are here to help you</h3>
    </div>

    <div className="cards">
     <div className="cardimg">
       <p className="text-center font-semibold">Relax</p>
       <img className="pt-10" src="/img5.png" alt="Relax" />
       <p>Unwind and calm your mind, Let go of stress and tension.
        <br/>
        <a className="font-semibold" href="#">Learn More</a>
       </p>
      </div>

      <div className="cardimg">
       <p className="text-center font-semibold">Mindfulness</p>
       <img src="/img7.png" alt="Mindfulness" />
       <p>Be present in the moment, Mindful living for a happier life.</p>
      </div>

      <div className="cardimg">
       <p className="text-center font-semibold">Stretch</p>
       <img src="/img4.png" alt="Stretch" />
       <p>Be present in the moment, Mindful living for a happier life.</p>
      </div>
      
    </div>
   </>
  )
}
export default Section;