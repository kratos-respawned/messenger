import React from "react";
import { message } from "../typings";
import ChatInput from "./ChatInput";
import Header from "./Header";
import MessageList from "./MessageList";
async function page() {
  const data = await fetch(`${process.env.VERCEL_URL}/api/getMessages`).then(
    (res) => res.json()
  );
  const messages: message[] = data.messages;
  return (
    <main>
      <MessageList initialMessages={messages} />
      <ChatInput />
    </main>
  );
}
export default page;
