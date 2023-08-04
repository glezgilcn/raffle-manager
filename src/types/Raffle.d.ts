type Raffle = {
  description: string;
  tickets: Array<Buyer | null>;
  theme: string;
};

type Buyer = {
  name: string;
  telephone: string;
};
