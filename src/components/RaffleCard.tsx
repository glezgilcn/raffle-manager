"use client";

import { useRouter } from "next/navigation";

export function RaffleCard({ tickets, title, description, id }: Raffle) {
  const router = useRouter();

  return (
    <div
      className="bg-white w-36 h-48 rounded-lg cursor-pointer m-2 p-4 text-zinc-700 flex flex-col justify-center hover:bg-gradient-to-r from-sky-300 hover:to-sky-100"
      onClick={() => router.push(`/raffle/${id}`)}
    >
      <p className="font-semibold text-base">{title}:</p>
      <p>{description}</p>
      <br />
      <p className="font-semibold text-base">Number of Tickets:</p>
      <p>{tickets.length}</p>
    </div>
  );
}
