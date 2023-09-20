type Raffle = {
  id?: string;
  title: string;
  description: string;
  tickets: Array<Buyer | null>;
  theme: "dots" | "flowers" | "geometric" | "hearts" | "waves";
};

type Buyer = {
  name: string;
  telephone: string;
};
