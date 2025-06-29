import { Message } from "../types/chat";

// Each message contains a unique id, the message text, and a flag indicating
// if the message was sent by the user (fromMe)
export const initialMessages: Message[] = [
  {
    id: "1",
    text: "Hello! Do you need any help with your order today?",
    fromMe: false,
  },
  {
    id: "2",
    text: "Hi, yes please. I'd like to check the status of my order.",
    fromMe: true,
  },
  {
    id: "3",
    text: "Of course! Could you please provide your order number?",
    fromMe: false,
  },
  { id: "4", text: "Sure, it's #7842.", fromMe: true },
  { id: "5", text: "Thank you! Let me check that for you.", fromMe: false },
  {
    id: "6",
    text: "Alright, your order is being prepared and should be ready in about 15 minutes.",
    fromMe: false,
  },
  { id: "7", text: "Great, thanks for the update!", fromMe: true },
  {
    id: "8",
    text: "You're very welcome! Let me know if you need anything else.",
    fromMe: false,
  },
];