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
      </Head>

      <LoginContainer>
        <Logo src="https://user-images.githubusercontent.com/66429052/116411661-8c07b780-a853-11eb-8eea-c20239860f81.png" />
        <GoogleButton
          type="light"
          // label="Be Cool"
          onClick={singIn}
          variant="outlined"
        ></GoogleButton>
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
  padding: 100px;
  display: flex;
  flex-direction: column;
  background-color: white;
  align-items: center;
  border-radius: 50px;
  box-shadow: 0px 4px 14px -3px rgba(0, 0, 0.7);
`;

const Logo = styled.img`
  width: 180px;
  height: 180px;
  margin-bottom: 50px;
`;
