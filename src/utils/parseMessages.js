import { getTimeDifference } from "./timeDifference";

export const parseMessages = (prevMessages, message) => {
  const messages = (JSON.parse(JSON.stringify(prevMessages))); //had to parse this way because redux returns a Proxy object;
  let lastMessage = messages[messages.length - 1];

  if (
      lastMessage && lastMessage.username === message.username &&
      getTimeDifference(new Date(message.time), new Date(lastMessage.time), 300000)
  ) {
    lastMessage.groupedMessages = [...(lastMessage.groupedMessages || []), message];
    
    return [...prevMessages.slice(0, -1), lastMessage] // groups the current message with the last message;
  }
  return [...prevMessages, message];
}