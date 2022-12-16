"use client";

import { FormEvent, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { message } from "../typings";
import useSWR from "swr";
import fetcher from "../utils/fetchMessages";
function ChatInput() {
  const [input, setInput] = useState("");
  const { data: messages, error, mutate } = useSWR("api/getMessages", fetcher);
  // //////////////////////////////
  const addMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!input) return;
    const messageToSend = input;
    const id = uuid();
    const Message: message = {
      id,
      message: messageToSend,
      created_at: Date.now(),
      username: "Elon Musk",
      avatar: "https://avatars.dicebear.com/api/adventurer/mia.svg",
      email: "elongmusk@gmail.com",
    };
    setInput("");
    const uploadMessagetoUpstash = async () => {
      const data = await fetch("/api/addMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Message),
      }).then((res) => res.json());
      return [data.message, ...messages!];
    };
    await mutate(uploadMessagetoUpstash, {
      optimisticData: [Message, ...messages!],
      rollbackOnError: true,
    });
  };
  return (
    <form
      onSubmit={(e) => {
        addMessage(e);
      }}
      className=" fixed bottom-0 z-50 w-full flex px-10 py-5 space-x-2 border-t border-slate-500 bg-slate-900"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        placeholder="Enter message here"
        className="flex-1 rounded border bg-slate-900 text-white border-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent px-5 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={!input}
      >
        Send
      </button>
    </form>
  );
}

export default ChatInput;
