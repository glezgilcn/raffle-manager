"use client";
import domtoimage from "dom-to-image";

import { Cell } from "./Cell";
import { useParams } from "next/navigation";

interface Props extends Raffle {
  fetchData: () => Promise<void>;
}

export function Table({ tickets, description, theme, fetchData }: Props) {
  const params = useParams();
  const themes: { [key: string]: string } = {
    hearts:
      "/img/seamless-pattern-with-hearts-simple-repeating-texture-for-background-wrapping-paper-wedding-and-valentine-day-greeting-and-invitation-cards-design-and-decoration-vector.jpg",
    geometric:
      "/img/geometric-low-poly-graphic-repeat-pattern-background-free-vector.jpg",
    flowers: "/img/blue-flower-background-y041axd98wb822py.jpg",
    dots: "/img/rm455-1012-kw62ft3f.jpg",
    waves: "/img/istockphoto-1332573539-612x612.jpg",
  };
  const screenshot = async () => {
    const dataUrl = await domtoimage.toPng(
      document.getElementById("table-container")!,
      { quality: 1 }
    );
    const link = document.createElement("a");
    link.download = "rifa.png";
    link.href = dataUrl;
    link.click();
  };

  const updateTicket = async (
    index: number,
    ticket: { name: string; telephone: string }
  ) => {
    const res = await fetch(`/api/raffles/${params.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        index,
        ticket,
      }),
    });
    if (!res.ok) {
      window.location.reload();
      return;
    }

    await fetchData();
  };

  return (
    <div className="bg-white">
      <button onClick={screenshot} className="text-zinc-800 pl-8 p-4">
        Screenshot
      </button>

      <div
        id="table-container"
        className="border-2 border-zinc-400 flex items-center flex-col py-8 rounded-3xl"
        style={{ minWidth: "638px", backgroundImage: `url(${themes[theme]})` }}
      >
        <div className="text-center font-semibold text-xl mb-8 flex flex-col items-center text-gray-800 bg-white opacity-90 py-2 px-8 rounded-xl">
          {description}
        </div>

        <div
          className="flex flex-wrap flex-col items-center w-full"
          style={{ height: "1800px" }}
        >
          {tickets.map((t, index) => (
            <Cell
              key={`ticket-cell-${index}`}
              ticket={t}
              index={index}
              updateTicket={updateTicket}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
