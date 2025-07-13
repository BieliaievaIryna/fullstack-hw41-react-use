import { use } from "react";
import { fetchMessages } from "../utils/api.ts";
import type { Message } from '../types/Message.interface';

const MessageComponent = () => {
  const messages: Message[] = use(fetchMessages);

  return (
    <div>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>{message.body}</li>
        ))}
      </ul>
    </div>
  )
}

export default MessageComponent