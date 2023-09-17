"use client";
import { useState } from "react";

export default function Create() {
  const [radioSelected, setRadioSelected] = useState("dots");
  return (
    <div className="bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 h-screen ">
      <nav className="flex justify-end">
        <p className="text-right cursor-pointer mx-8 mt-8 w-auto">
        👤 My account
        </p>
      </nav>
      
      <form className="flex flex-col justify-center items-center" action="">
        <div className="flex justify-center flex-col items-center border-black border-0 text-zinc-700 text-lg">
        <p className="font-semibold text-2xl mb-10">Create a raffle</p>
          <label>Raffle's title</label> <br />
          <input className="rounded-lg w-48 pl-2 max-h-72 overflow-y-scroll	" />
          <br />
        </div>

        <div className="flex justify-center flex-col items-center border-black border-0 text-zinc-700 text-lg">
          <label>Raffle's description</label> <br />
          <textarea className="rounded-lg w-48 pl-2 max-h-72 overflow-y-scroll	" />
          <br />
        </div>

        <div className="flex justify-center flex-col items-center border-black border-0 text-zinc-700 text-lg">
          <label>Number of tickets</label> <br />
          <input type="number" className="rounded-lg w-48 pl-2" /> <br />
        </div>

        <div className="flex justify-center flex-col items-center border-black border-0 text-zinc-700 text-lg">
          <label>Select a theme</label> <br />
          <div className="flex flex-row items-center justify-around border-black border-0 w-screen">
            <div
              className="flex flex-col items-center cursor-pointer"
              onClick={() => {
                setRadioSelected("dots");
              }}
            >
              <input
                type="radio"
                className="mb-4 cursor-pointer"
                checked={radioSelected === "dots"}
              />
              <label>
                <img
                  className="w-36 cursor-pointer"
                  src="img/rm455-1012-kw62ft3f.jpg"
                  alt="Dots"
                />
              </label>
            </div>

            <div
              className="flex flex-col items-center cursor-pointer"
              onClick={() => {
                setRadioSelected("flowers");
              }}
            >
              <input
                type="radio"
                className="mb-4 cursor-pointer"
                checked={radioSelected === "flowers"}
              />
              <label>
                <img
                  className="w-36 cursor-pointer"
                  src="img/blue-flower-background-y041axd98wb822py.jpg"
                  alt="Flowers"
                />
              </label>
            </div>

            <div
              className="flex flex-col items-center cursor-pointer"
              onClick={() => {
                setRadioSelected("geometric");
              }}
            >
              <input
                type="radio"
                className="mb-4 cursor-pointer"
                checked={radioSelected === "geometric"}
              />
              <label>
                <img
                  className="w-36 cursor-pointer"
                  src="img/geometric-low-poly-graphic-repeat-pattern-background-free-vector.jpg"
                  alt="Geometric"
                />
              </label>
            </div>

            <div
              className="flex flex-col items-center cursor-pointer"
              onClick={() => {
                setRadioSelected("hearts");
              }}
            >
              <input
                type="radio"
                className="mb-4 cursor-pointer"
                checked={radioSelected === "hearts"}
              />
              <label>
                <img
                  className="w-36 cursor-pointer"
                  src="img/seamless-pattern-with-hearts-simple-repeating-texture-for-background-wrapping-paper-wedding-and-valentine-day-greeting-and-invitation-cards-design-and-decoration-vector.jpg"
                  alt="Hearts"
                />
              </label>
            </div>

            <div
              className="flex flex-col items-center cursor-pointer"
              onClick={() => {
                setRadioSelected("waves");
              }}
            >
              <input
                type="radio"
                className="mb-4 cursor-pointer"
                checked={radioSelected === "waves"}
              />
              <label>
                <img
                  className="w-36 cursor-pointer"
                  src="img/istockphoto-1332573539-612x612.jpg"
                  alt="Waves"
                />
              </label>
            </div>
          </div>
          <br />
        </div>

        <div className="mt-2 flex justify-center flex-col items-center border-black border-0 text-zinc-700">
          <input
            className="text-sm flex justify-center flex-col items-center border-black border-0 text-zinc-700 text-lg w-48 p-2 rounded-lg bg-white hover:bg-gradient-to-r from-sky-300 hover:to-sky-100 cursor-pointer"
            type="submit"
            value="Submit"
          ></input>
        </div>
      </form>
    </div>
  );
}
