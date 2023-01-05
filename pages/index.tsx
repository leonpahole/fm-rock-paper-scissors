import Head from "next/head";
import { Game } from "../components/Game/Game";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rock Paper Scissors</title>
        <meta
          name="description"
          content="Play Rock Paper and Scissors against the computer"
        />
      </Head>
      <Game />
    </>
  );
}
