import { Button } from "@material-ui/core";
import Head from "next/head";
import styled from "styled-components";
import { auth, provider } from "../firebase";
import GoogleButton from "react-google-button";
import Image from "next/image";

function Login() {
  const singIn = () => {
    auth.signInWithPopup(provider).catch(alert);
  };

  return (
    <Container>
      <Head>
        <title>Login</title>
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

      <LoginContainer>
        <Hidden />
        <GoogleButton
          type="dark"
          // label="Be Cool"
          onClick={singIn}
          variant="outlined"
        ></GoogleButton>
        <Creater href="https://github.com/jay75chauhan" target="_blank">
          @jayChauhan
        </Creater>
      </LoginContainer>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
`;

const LoginContainer = styled.div`
  display: flex;
  padding: 20px;
  margin-top: 50px;

  background-color: transparent;
  --tw-backdrop-blur: blur(24px);

  flex-direction: column;

  align-items: center;
  justify-items: center;
  box-shadow: 0 0 2rem 0 rgba(0, 0, 0, 0.6);
  border-radius: 5px;
  position: relative;
  z-index: 1;
  background: inherit;
  overflow: hidden;
  border-radius: 20px;

  @media (max-width: 768px) {
    margin-top: 80px;
  }
  :before {
    content: "";
    position: absolute;
    background: inherit;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: inset 0 0 6000px rgba(255, 255, 255, 0.1);
    filter: blur(10px);
    margin: -20px;
  }
`;

const Hidden = styled.a`
  margin-top: 450px;
  padding-left: 500px;
  @media (max-width: 768px) {
    margin-top: 270px;
    padding-left: 320px;
  }
`;

const Creater = styled.a`
  margin-top: 13px;
  margin-bottom: 2px;
  padding: 3px;
  color: #f5f5f5;

  :hover {
    color: #cacaca;
    border-bottom: 2px solid red;
  }
`;
