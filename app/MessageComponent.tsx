import React from "react";
import { message } from "../typings";
import Image from "next/image";
type Props = {
  message: message;
};
function MessageComponent({ message }: Props) {
  const isUser = true;
  return (
    <div className={`flex w-fit ${isUser && "ml-auto"}`}>
      <div className={`flex-shrink-0 ${isUser && "order-2"}`}>
        <Image
          className="rounded-full mx-2"
          height={10}
          width={50}
          src={message.avatar}
          alt="avatar"
        />
      </div>

      <div>
        <p
          className={`text-[0.65rem] px-[2px] pb-[2px] ${
            isUser ? "text-blue-400 text-right" : "text-red-400 text-left "
          }`}
        >
          {message.username}
        </p>
        <div className="flex items-end">
          <div
            className={`px-3 py-2 rounded-lg w-fit text-white bg-red-400 ${
              isUser ? "bg-blue-400 ml-auto order-2" : " bg-red-400"
            }`}
          >
            <p>{message.message}</p>
          </div>
          <p
            className={`text-[0.65rem] italic px-2 text-gray-500 ${
              isUser && "text-right"
            }`}
          >
            {new Date(message.created_at).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MessageComponent;
