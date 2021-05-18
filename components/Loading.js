import { Circle } from "better-react-spinkit";

function Loading() {
  return (
    <center style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <div>
        <img
          src="https://user-images.githubusercontent.com/66429052/116411661-8c07b780-a853-11eb-8eea-c20239860f81.png"
          alt=""
          style={{ marginBottom: 10 }}
          height={250}
        />

        <Circle color="#9e9e9e" size={109} />
      </div>
    </center>
  );
}

export default Loading;
