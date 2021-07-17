import { Button } from "@material-ui/core";
import Head from "next/head";
import styled from "styled-components";
import { auth, provider } from "../firebase";
import GoogleButton from "react-google-button";

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

      <LoginContainer>
        <Logo src="https://user-images.githubusercontent.com/66429052/116411661-8c07b780-a853-11eb-8eea-c20239860f81.png" />
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
  background-color: whitesmoke;
`;

const LoginContainer = styled.div`
  display: flex;
  padding: 100px;

  flex-direction: column;
  background-color: white;
  align-items: center;
  justify-items: center;
  border-radius: 50px;
  box-shadow: 0px 4px 14px -3px rgba(0, 0, 0.7);
  @media (max-width: 768px) {
    padding: 40px;
  }
`;

const Logo = styled.img`
  width: 180px;
  height: 180px;
  margin-bottom: 50px;
  @media (max-width: 768px) {
    width: 140px;
    height: 140px;
  }
`;

const Creater = styled.a`
  margin-top: 13px;
  margin-bottom: 2px;
  padding: 3px;
  color: #cacaca;

  :hover {
    color: red;
    border-bottom: 2px solid red;
  }
`;
