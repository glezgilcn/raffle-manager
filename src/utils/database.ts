import admin, { ServiceAccount } from "firebase-admin";

const firebaseConfig = {
  type: "service_account",
  project_id: "party-e90ec",
  private_key_id: "1026f995c7bf70ef0508b6bc35a33d2ea3c49aad",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDoA2AplIE/ibU9\nchyFCazITPQQsc/6xoEaKj7fToKFJDxaCD78Lcy+D/BHZsbdZPkT9fJogNpi+NzZ\nGUbaDCPhK5vJcXfYzAtz2tDTetONNwnb8VYf7jFFTIAQIBcFXw5k+UdQC/1qa+WP\nzTukgozuc4+DVuDxCA5kRfussHEHd5SYgTnei+wTKvCquwY/3SSPOmRf2YSid9qo\nLCkDn4GBAPpTOsGYSeIE5juJ5UYPVoaKhrAwpnkasBKlm+AQ8NMjGzjrVKo59R0K\n6vjDeR/4R3WvKq60qOuVw5OQrA54dzpSQ+KoZXDcxmyIp+m+FZQp6MBSya63dw2W\n8wXRaN7rAgMBAAECggEANQ0sjGVuJmKtJBc3KT58mTJrbnPSLDP+qkZ1qOcRVjNi\nb23KRSyNz/niBdmc6FvhzmwjGT05cn8YNLYgatRy0daAYVAGSPbjOYMT0/+WZwhq\nQzYMbPGwp3lmIQnNaceCCZmsckPDlvWEAN07YZMOeanH647OkZ63d7s+4I5Z0gxY\n28lJsRBQ/n4nnjRcO/ZMQsyzJoAQgRRlbe2UUtPRzDbjbrigI5P35x1aluyii5W1\nnpOnOcQ0L6wRkoUyvEvngiTRSppmacWPE/Uu5BkJqAGc6zLf2wfTalnQmsojViko\npQFCnLnXvKZLgVba+HlAEQpVVivYUe5nb+q7STBe/QKBgQD5sImjSTM2ia7ltFxc\nCqTXJeKTiH4dHNCZzI3OfJ1gM05xYRqsXIgqLnhyAWPjjhU8rH3wF64dHG11fnKj\nuwipkb+kPmrcFXq63QIgOO2mzvyHUxORVLMiqrGlMRpSVd6FUSAeonD6aJcaZARE\n98Oe9tdvNH82IJ8GQ8bXt5sjnQKBgQDt4HlCK1zBwTlzYI8oEj3Xke7vOGLGlDfs\nD1rWKyHtpLUYTCTnHSitxAJA8J1xxgTe0biZdx3kU+BzIqewhuP4xwTb7kUxAiq+\nig1AsUpqi788Ewdwo8+3RK85rJfbaMqX3/UO7LlN5gSgmpepvYKPC68f9h3gJIuG\nGivyLKKaJwKBgQDUdJZozdw5x6V95p2/436nYqEMD9PfSalldFwlGnt+Y6mXZ5ye\nlI139tqdhvlLopYHbm4qYLvSIWIx20oIbxjL0CxUwJeEdPJdFbi9WjM9AFp3ewTn\nYD6cfMlzWfifnlkc7w55gpbHOz93QSsw0/ErzbU59l1X3SHy3rDO1He5MQKBgB+1\nbHSFkzfAqgfXNz4AMH4r1c3Nll0iJNIyuckSttMWwY0bmU+1c1a2ahZ9/H7OBpgt\nHI5YcoOdKq4uUGwXjwv6e4tVl6OQxmHfxSR6fZD2T+eSIcvCCk5DuZfWieeVcGwO\nTnxO0eSwZK2D7fOSb3Th+dYo2JKoTHDzzCfcC1DBAoGAXsIOO5v9+5D/rv+a9+SL\nAvWelLioKiPTE4wO/lAb8iNdXny9jbwnmGqh6kB0ae2KOK1y5IQi74t5mxoucl3T\nzK0JuVUXmj2bZcWCeIwHRapcm396UCqRqPHGutmvlVc9Lb3mSUDFK/1wBDguxad/\ndYJHTLtPQwcwTx2+0eZFO5k=\n-----END PRIVATE KEY-----\n".replace(
      /\\n/g,
      "\n"
    ),
  client_email: "firebase-adminsdk-5nk93@party-e90ec.iam.gserviceaccount.com",
  client_id: "102239112631272583566",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-5nk93%40party-e90ec.iam.gserviceaccount.com",
  universe_domain: "googleapis.com",
};

class Database {
  private api: admin.firestore.CollectionReference | null = null;

  constructor() {
    if (admin.apps.length === 0) {
      admin.initializeApp({
        credential: admin.credential.cert(firebaseConfig as ServiceAccount),
        databaseURL: `https://party-e90ec.firebaseio.com`,
      });
    }

    this.api = admin.firestore().collection("raffle-manager");
  }

  async login(username: string, password: string): Promise<{ user: string }> {
    const res = await this.api?.doc(username).get();
    const user = res?.data() as {
      name: string;
      username: string;
      password: string;
    };
    if (user.password === password) {
      return { user: user.username };
    }

    throw new Error("Invalid credentials");
  }

  async signup(
    username: string,
    password: string,
    name: string
  ): Promise<{ user: string }> {
    await this.api?.doc(username).set({ username, password, name });
    return { user: username };
  }

  async getRaffles(user: string): Promise<Array<Raffle>> {
    const res = await this.api?.doc(user).collection("raffles").get();
    if (res && res.size > 0) {
      return res.docs.map((d) => ({ ...d.data(), id: d.id })) as Raffle[];
    }

    return [];
  }

  async getRaffle(user: string, raffle: string): Promise<Raffle> {
    const res = await this.api?.doc(user).collection("raffles").get();
    if (res && res.size > 0) {
      const raffleData = await this.api
        ?.doc(user)
        .collection("raffles")
        .doc(raffle)
        .get();

      return raffleData?.data() as Raffle;
    }

    throw new Error("Raffle Not Found");
  }

  async updateRaffle(
    user: string,
    raffleId: string,
    raffle: Raffle
  ): Promise<Raffle> {
    const res = await this.api?.doc(user).collection("raffles").get();
    if (res && res.size > 0) {
      await this.api?.doc(user).collection("raffles").doc(raffleId).set(raffle);
      return raffle;
    }

    throw new Error("Raffle Not Found");
  }

  async createRaffle(user: string, raffle: Raffle): Promise<Raffle> {
    await this.api?.doc(user).collection("raffles").add(raffle);
    return raffle;
  }
}

export const db = new Database();
