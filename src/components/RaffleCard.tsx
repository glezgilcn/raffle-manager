"use client";

export function RaffleCard() {
    return (
        <div className="bg-white w-36 h-48 rounded-lg cursor-pointer m-2 p-4 text-zinc-700 flex flex-col justify-center hover:bg-gradient-to-r from-sky-300 hover:to-sky-100">
            <p className="font-semibold text-base">Raffle's Title:</p>
            <p>Prueba rifa mini split</p>
            <br />
            <p className="font-semibold text-base">Number of Tickets:</p>
            <p>100</p>
        </div>
    )
}