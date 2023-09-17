"use client";
import { useState } from "react";

type Props = {
  index: number;
  ticket: Buyer | null;
};

export function Cell({ ticket, index }: Props) {
  const [editable, setEditable] = useState<boolean>(false);
  const [name, setName] = useState<string>(ticket?.name ?? '');
  const [telephone, setTelephone] = useState<string>(ticket?.telephone ?? '');

  const submit = () => {
    //subir al backend
    setEditable(false);
  };

  if (editable) {
    return (
      <div className="mx-4 border-t border-b border-zinc-300 w-72 p-1 text-gray-800 bg-white opacity-90">
        <input 
        className="w-full text-gray-800 bg-white"
          placeholder="Name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
        className="w-full text-gray-800 bg-white"
          placeholder="Telephone"
          type="text"
          value={telephone}
          onChange={(event) => setTelephone(event.target.value)}
        />
        <button 
        className="w-6/12 text-gray-800 bg-white"
        onClick={() => setEditable(false)}>Cancel</button>
        <button 
        className="w-6/12 text-gray-800 bg-white"
        onClick={submit}>Submit</button>
      </div>
    );
  }

  return (
    <div
      className="mx-4 flex flex-row border-t border-b border-zinc-300 w-72 p-1 text-gray-800 bg-white opacity-90 h-9 truncate"
      onClick={() => setEditable(true)}
    >
      <div className="mr-2">{index.toString().padStart(2, "0")}</div>
      <div className="overflow-hidden">{ticket?.name}</div>
    </div>
  );
}
