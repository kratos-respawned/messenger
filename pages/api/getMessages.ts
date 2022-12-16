import type { NextApiRequest, NextApiResponse } from "next";
import redis from "../../redis";
import { message } from "../../typings";

type Data = {
    messages: message[];
}
type ErrorData = {
    body: string;
}
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data| ErrorData>
) {
    if (req.method !== "GET") {
        res.status(405).json({ body: "Method not allowed" })
        return;
    }
    const messagesRes = await redis.hvals('messages');
    const messages: message[] = messagesRes.map((message) => JSON.parse(message)).sort((a, b) => b.created_at - a.created_at);
    // console.log({ message:messages});
    res.status(200).json({ messages: messages })
}