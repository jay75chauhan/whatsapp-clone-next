import { Circle } from "better-react-spinkit";
import Head from "next/head";
import Image from "next/image";
function Loading() {
  return (
    <>
      <Head>
        <title>Whatsapp-App</title>
        <link
          rel="icon"
          href="https://user-images.githubusercontent.com/66429052/116411661-8c07b780-a853-11eb-8eea-c20239860f81.png"
        />
      </Head>
      <Image
        src="https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80"
        layout="fill"
        objectFit="cover"
        loading="eager"
      />
      <center
        style={{
          display: "grid",
          placeItems: "center",
          height: "100vh",
          zIndex: 60,
        }}
      >
        <div>
          <img
            src="https://user-images.githubusercontent.com/66429052/116411661-8c07b780-a853-11eb-8eea-c20239860f81.png"
            alt=""
            style={{ marginBottom: 10, marginTop: 5 }}
            height={200}
          />

          <Circle color="#f5f5fd" size={200} />
        </div>
      </center>
    </>
  );
}

export default Loading;
