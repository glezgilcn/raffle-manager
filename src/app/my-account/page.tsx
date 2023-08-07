"use client";

import { useState } from "react";
import { RaffleCard } from "../../components/RaffleCard";

export default function Create() {
  const [radioSelected, setRadioSelected] = useState("dots");
  return (
    <div className="bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 h-full pb-32 text-zinc-700">
      <nav className="flex justify-end">
        <p className="text-right cursor-pointer mx-8 mt-8 w-auto">
          ➕ Create a<br />new raffle
        </p>
      </nav>

      <div className="flex flex-col items-center w-full">
        <p className="font-semibold text-2xl mb-10">My Raffles</p>
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7">
          <RaffleCard />
          <RaffleCard />
          <RaffleCard />
          <RaffleCard />
          <RaffleCard />
          <RaffleCard />
          <RaffleCard />
          <RaffleCard />
          <RaffleCard />
          <RaffleCard />
          <RaffleCard />
          <RaffleCard />
          <RaffleCard />
          <RaffleCard />
          <RaffleCard />
          <RaffleCard />
          <RaffleCard />
          <RaffleCard />
          <RaffleCard />
          <RaffleCard />
        </div>
      </div>
    </div>
  );
}
