import { Avatar, IconButton } from "@material-ui/core";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import { auth, db } from "../firebase";

import AttachFilentIcon from "@material-ui/icons/AttachFile";
import { useCollection } from "react-firebase-hooks/firestore";
import Message from "./Message";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";

import firebase from "firebase";
import MicIcon from "@material-ui/icons/Mic";
import { InsertEmoticon } from "@material-ui/icons";
import { useEffect, useRef, useState } from "react";
import TimeAgo from "timeago-react";
import getRecipientEmail from "../utils/getRecipientEmail";

function ChatScreen({ chat, messages }) {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const endOfMessageRef = useRef(null);
  const endOfContainer = useRef(null);

  const [input, setInput] = useState("");

  useEffect(() => {
    ScrollToContainer();
  });
  const [messagesSnapshot] = useCollection(
    db
      .collection("chats")
      .doc(router.query.id)
      .collection("messages")
      .orderBy("timestamp", "asc")
  );

  const [receipientSnapshot] = useCollection(
    db
      .collection("users")
      .where("email", "==", getRecipientEmail(chat.users, user))
  );

  const showMessages = () => {
    if (messagesSnapshot) {
      return messagesSnapshot.docs.map((message) => (
        <Message
          key={message.id}
          user={message.data().user}
          message={{
            ...message.data(),
            timestamp: message.data().timestamp?.toDate().getTime(),
          }}
        />
      ));
    } else {
      return JSON.parse(messages).map((message) => {
        <Message key={message.id} user={message.user} message={message} />;
      });
    }
  };

  const ScrollToBottom = () => {
    endOfMessageRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const ScrollToContainer = () => {
    endOfContainer.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  };

  const sendMessage = (e) => {
    e.preventDefault();

    //update the last seen....

    db.collection("users").doc(user.uid).set(
      {
        lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
      },
      { merge: true }
    );

    db.collection("chats").doc(router.query.id).collection("messages").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      user: user.email,
      photoURL: user.photoURL,
    });

    setInput("");
    ScrollToBottom();
  };
  const recipient = receipientSnapshot?.docs?.[0]?.data();

  const recipientEmail = getRecipientEmail(chat.users, user);

  const goBack = () => {
    router.push(`/`);
  };

  return (
    <Container>
      <Header>
        {recipient ? (
          <Avatar src={recipient?.photoURL} />
        ) : (
          <Avatar>{recipientEmail[0]}</Avatar>
        )}

        <HeaderInformation>
          <h3>{recipientEmail}</h3>
          {receipientSnapshot ? (
            <p>
              Last active:{" "}
              {recipient?.lastSeen?.toDate() ? (
                <TimeAgo datetime={recipient?.lastSeen?.toDate()} />
              ) : (
                "unavailable"
              )}
            </p>
          ) : (
            <p>Loading Last active...</p>
          )}
        </HeaderInformation>
        <HeaderIcons>
          <IconButton>
            <AttachFilentIcon />
          </IconButton>
          <IconButton>
            <NavigateBeforeIcon onClick={goBack} />
          </IconButton>
        </HeaderIcons>
      </Header>

      <MessageContainer ref={endOfContainer}>
        {/* show messages */}
        {showMessages()}

        {/* end messages */}
        <EndOfMessage ref={endOfMessageRef} />
      </MessageContainer>

      <InputContainer>
        <InsertEmoticon />
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="what's on your minde...."
        />
        <button hidden disabled={!input} type="submit" onClick={sendMessage}>
          Sen message
        </button>
        <MicIcon />
      </InputContainer>
    </Container>
  );
}

export default ChatScreen;

const Container = styled.div`
  z-index: 2000;
  position: sticky;
`;

const Header = styled.div`
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1000;
  display: flex;
  padding: 11px;
  height: 70px;
  align-items: center;
  border-radius: 1px solid whitesmoke;
`;

const HeaderInformation = styled.div`
  margin-left: 15px;
  flex: 1;
  justify-items: center;

  > h3 {
    margin: 0;
    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  > p {
    font-size: 14px;

    color: gray;
    margin: 0;
    @media (max-width: 768px) {
      font-size: 12px;
    }
  }
`;

const HeaderIcons = styled.div`
  display: flex;
`;

const MessageContainer = styled.div`
  padding: 30px;
  min-height: 75vh;

  background-color: #e5ded8;
  @media (max-width: 768px) {
    padding: 8px;
    padding-top: 5px;
    padding-bottom: 35px;
  }
`;

const EndOfMessage = styled.div`
  margin-bottom: 50px;
`;

const InputContainer = styled.form`
  display: flex;
  align-items: center;
  background-color: white;
  padding: 10px;
  position: sticky;
  bottom: 0;
  z-index: 100;
`;

const Input = styled.input`
  flex: 1;

  border: none;
  outline: 0;
  border-radius: 30px;
  margin-left: 15px;
  margin-right: 15px;

  padding: 15px;

  background-color: whitesmoke;
`;
