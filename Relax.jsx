
import React from "react";
import './Relax.css'

function Relax() {
  return (
    <>
      <div className="mt-10 sm:w-5/6 md:w-11/12 lg:w-full mx-auto">
        <div className="text-center">
          {/* <h2 className="text-3xl font-extrabold">"Relax"</h2> */}
          <q className="text-[24px] sm:text-4xl md:text-[48px] font-extrabold font-be-vietnam-pro">Relax</q>
          <p className="mt-5 text-base sm:text-lg md:text-[24px] lg:text-2xl md:w-[400px] mx-auto font-semibold">
            Enjoy a cup of tea, blink your eyes, read and view pages of a book or magazine, take a nap, and write a journal
          </p>
        </div>

        <div className="image mt-5">
          <img className="w-full sm:w-4/5 md:w-3/4 lg:w-2/3 mx-auto pt-5 rounded-custom" src="./Frame 35.png" alt="Frame" />
        </div>

        <div className="relax mt-10">
          <img className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto" src="./Group 31.png" alt="Group" />
          <p className="bg-slate-200 w-full sm:w-5/6 md:w-2/5 lg:w-2/4 mx-auto h-auto text-center p-5 text-base sm:text-lg md:text-[24px] lg:text-[24px] font-bold font-be-vietnam-pro">
            ‘Your mind will answer most questions if you learn to relax’<br /> and wait for the answer.
          </p>
          <img className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto mt-5" src="./Group 31.png" alt="Group" />
        </div>
      </div>
    </>
  )
}

export default Relax;
