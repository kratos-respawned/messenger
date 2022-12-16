import { message } from "../typings";
import ChatInput from "./ChatInput";
import MessageList from "./MessageList";
import Providers from "./Provider";
import { unstable_getServerSession } from "next-auth/next";
async function getData() {
  const data = await fetch(`${process.env.VERCEL_URL}/api/getMessages`).then(
    (res) => res.json()
  );
  return data;
}
async function page() {
  const data = await getData();

  const session = await unstable_getServerSession();
  const messages: message[] = data.messages;
  return (
    <Providers session={session}>
      <main>
        <MessageList initialMessages={messages} />
        <ChatInput session={session} />
      </main>
    </Providers>
  );
}
export default page;
