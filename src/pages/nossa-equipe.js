import Head from "next/head";
import TeamTab from "../components/Team/TeamTab";

export default function Home() {
  return (
    <div className='overflow-x-hidden'>
      <Head>
        <title>Einstein Floripa | Nossa Equipe</title>
      </Head>
      <TeamTab />
    </div>
  );
}
