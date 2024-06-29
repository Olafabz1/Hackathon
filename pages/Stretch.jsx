import React from "react";
import './Stretch.css'




function Stretch() {
  return (
   <>
       <div className="text-center" >
         <h2 className="text-3xl font-extrabold md:mt-20">"Stretch"</h2>
      </div>

      <div className="stretch block md:flex w-6/12 mx-auto lg:flex w-6/12 mx-auto">
         <img src="./Rectangle 11.png" alt="Frame" />

         <div className=" text-center">
            <h2 className="text-xl text font-bold mt-12">You’re not alone</h2>
              <div className="text-center ">
                <p>Take a few minutes and, Stretch!</p>
                <p>While it might seem harmless, prolonged sitting can lead to a host of health issues, from back pain to reduced productivity. But there’s a simple, powerful solution: stretching.
                 Taking a few minutes to stretch can work wonders for your body and mind. It relieves muscle tension, improves circulation, and boosts your energy levels. Just a short break can enhance your focus and creativity, making you more productive when you return to work.</p>
             </div>
         </div>   
        </div>

        <div>
          <div className="text-center" >
           <h2 className="text-3xl font-extrabold mt-16">WHAT DO I DO?</h2>
        </div>
        <br/>
        {/* First card*/}
          <div className="block ml-16 md:flex lg:flex ">
            <div>
              <h5 className="md:text-l font-bold text-center w-6/12 mb-2">Neck Stretch</h5>
              <br/>
              <p className="font-bold">How to Do It:</p> <p>Sit or stand with a straight back. Slowly tilt your head towards your right shoulder and hold for 15-30 seconds.<br/>
              Repeat on the left side. </p>

                <br/><br/>
               <p className="font-bold"> Benefit:</p><p> Eases tension in the neck and shoulders.</p>

               <img className="h-52 mt-8" src="./Rectangle 14.png" alt="" />
               </div>
          
          {/* Second card*/}

           <div>
            <div>
              <h5 className="mt-5 md:text-l font-bold text-center w-6/12 mb-2 lg:text-l font-bold text-center w-6/12 mb-2">Wrist and Finger Stretch</h5>
              <br/>
              <p className="font-bold">How to Do It:</p> 
              <p className="w-70">Extend one arm in front of you with your palm facing up. Use your other hand to gently pull your fingers back towards your body. Hold for 15-30 seconds and repeat on the other hand.</p>

                <br/><br/>
               <p className="font-bold"> Benefit:</p><p> Relieves tension from typing and other repetitive hand movements.</p>

               <img className="ml-1 mt-5 md:h-52 mt-14 ml-16" src="./Rectangle 16.png" alt="" />
               </div>
          </div>

          {/* Third card*/}

          <div>
            <div>
              <h5 className="mt-5  md:text-l font-bold text-center w-10/12 mb-2">Standing Forward Bend</h5>
              <br/>
              <p className="font-bold">How to Do It:</p> 
              <p>Stand with feet hip-width apart. Bend forward at the hips, letting your arms hang down towards the floor. Hold for 15-30 seconds, then slowly rise back up.</p>

                <br/><br/>
               <p className="font-bold"> Benefit:</p><p> Stretches the hamstrings, back, and shoulders.</p>

               <img className="mt-5 ml-1  md: h-52 mt-20" src="./Rectangle 4.png" alt="" />
               </div>
          </div>
          </div>

          <section className="md:flex ml-20">

           <div className="w-6/12">
              <h5 className=" md:text-l font-bold ml-16 mb-2 mt-12">Standing Side Stretch</h5>
              <br/>
              <p className="font-bold">How to Do It:</p> 
              <p>Stand with feet shoulder-width apart. Raise your right arm overhead and lean to the left, stretching your side. Hold for 15-30 seconds and repeat on the other side.</p>

                <br/><br/>
               <p className="font-bold"> Benefit:</p><p> Stretches the obliques and the sides of your torso.</p>

               <img className="ml-10 h-52 mt-12" src="./Rectangle 8.png" alt="" />
               </div>

               <div className="w-6/12">
              <h5 className="w-5/6 md:text-l font-bold ml-20 mb-2 mt-10">Walking Lunges</h5>
              <br/>
              <p className="font-bold">How to Do It:</p> 
              <p>Take a step forward with your right leg and lower your body until your right thigh is parallel to the floor. Push off with your left foot and bring it forward to step into the next lunge. Repeat for several steps.</p>

                <br/><br/>
               <p className="font-bold"> Benefit:</p><p> Stretches the hip flexors, glutes, and quadriceps, and promotes blood circulation.</p>

               <img className=" ml-10 h-52 " src="./Rectangle 17.png" alt="" />
               </div>

               <div className="w-6/12">
              <h5 className="w-5/6 md:text-l font-bold ml-16 mt-14 ">And many more...</h5>
              <br/>
               <img className="mt-2 ml-10 md:h-4/6 mt-20" src="./Rectangle 2.png" alt="" />
               </div>

          </section>

       
      </div>
     
   </>
  )
}
export default Stretch;