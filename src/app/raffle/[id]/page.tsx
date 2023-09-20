"use client";

import { Table } from "@/components/Table";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Raffle() {
  const params = useParams();
  const [raffle, setRaffle] = useState<null | Raffle>(null);

  const fetchData = async () => {
    const res = await fetch(`/api/raffles/${params.id}`);
    if (res.ok) {
      const data = await res.json();
      setRaffle({
        ...data,
        tickets: data.tickets.map((d: string | null) => {
          if (!d) {
            return d;
          }

          return JSON.parse(d);
        }),
      });
    }
  };

  useEffect(() => {
    if (params.id) {
      (async () => {
        const res = await fetch(`/api/raffles/${params.id}`);
        if (res.ok) {
          const data = await res.json();
          setRaffle({
            ...data,
            tickets: data.tickets.map((d: string | null) => {
              if (!d) {
                return d;
              }

              return JSON.parse(d);
            }),
          });
        }
      })();
    }
  }, [params.id]);

  if (!raffle) {
    return <div>Loading...</div>;
  }

  return <Table {...raffle} fetchData={fetchData} />;
}
