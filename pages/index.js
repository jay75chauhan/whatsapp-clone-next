import Head from "next/head";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Whatsapp-App</title>
        <link
          rel="icon"
          href="https://user-images.githubusercontent.com/66429052/116411661-8c07b780-a853-11eb-8eea-c20239860f81.png"
        />
      </Head>
      <Sidebar />
    </div>
  );
}
