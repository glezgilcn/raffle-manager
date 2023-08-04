"use client";
import { useState } from "react";

export default function Create() {
    const [radioSelected, setRadioSelected] = useState("dots");
  return (
    <div className="bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 h-screen flex justify-center items-center">
      <form action="">
        <div className="pb-4 flex justify-center flex-col items-center border-black border-0 text-zinc-700">
          <label>Raffle's description</label> <br />
          <textarea className="rounded-lg w-48 pl-2 max-h-72 overflow-y-scroll	" />{" "}
          <br />
        </div>

        <div className="pb-4 flex justify-center flex-col items-center border-black border-0 text-zinc-700">
          <label>Number of tickets</label> <br />
          <input type="number" className="rounded-lg w-48 pl-2" /> <br />
        </div>

        <div className="pb-4 flex justify-center flex-col items-center border-black border-0 text-zinc-700">
          <label>Select a theme</label> <br />
          <div className="flex flex-row items-center justify-around border-black border-0 w-screen">
            <div className="flex flex-col items-center">
              <input type="radio" className="mb-4" checked={radioSelected==="dots"} onClick={()=>{setRadioSelected("dots")}}/>
              <label>
                <img
                  className="w-36"
                  src="img/rm455-1012-kw62ft3f.jpg"
                  alt="Dots"
                />
              </label>
            </div>

            <div className="flex flex-col items-center">
              <input type="radio" className="mb-4" checked={radioSelected==="flowers"} onClick={()=>{setRadioSelected("flowers")}}/>
              <label>
                <img
                  className="w-36"
                  src="img/blue-flower-background-y041axd98wb822py.jpg"
                  alt="Flowers"
                />
              </label>
            </div>

            <div className="flex flex-col items-center">
              <input type="radio" className="mb-4" checked={radioSelected==="geometric"} onClick={()=>{setRadioSelected("geometric")}}/>
              <label>
                <img
                  className="w-36"
                  src="img/geometric-low-poly-graphic-repeat-pattern-background-free-vector.jpg"
                  alt="Geometric"
                />
              </label>
            </div>

            <div className="flex flex-col items-center">
              <input type="radio" className="mb-4" checked={radioSelected==="hearts"} onClick={()=>{setRadioSelected("hearts")}}/>
              <label>
                <img
                  className="w-36"
                  src="img/seamless-pattern-with-hearts-simple-repeating-texture-for-background-wrapping-paper-wedding-and-valentine-day-greeting-and-invitation-cards-design-and-decoration-vector.jpg"
                  alt="Hearts"
                />
              </label>
            </div>

            <div className="flex flex-col items-center">
              <input type="radio" className="mb-4" checked={radioSelected==="waves"} onClick={()=>{setRadioSelected("waves")}}/>
              <label>
                <img
                  className="w-36"
                  src="img/istockphoto-1332573539-612x612.jpg"
                  alt="Waves"
                />
              </label>
            </div>
          </div>
          <br />
        </div>

        <div className="flex justify-center flex-col items-center border-black border-0 text-zinc-700">
          <input
            className="bg-white p-2 rounded-lg hover:bg-green-100 cursor-pointer w-48"
            type="submit"
            value="Submit"
          ></input>
        </div>
      </form>
    </div>
  );
}
