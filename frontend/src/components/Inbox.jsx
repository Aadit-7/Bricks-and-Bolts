import React, { useState } from "react";

const dummyUsers = [
  { id: 1, name: "User 1" },
  { id: 2, name: "User 2" },
  { id: 3, name: "User 3" },
];

const Inbox = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      // from: "Obi-Wan Kenobi",
      text: "Hello there!",
      time: "12:45",
      sender: "them",
    },
    {
      // from: "You",
      text: "General Kenobi!",
      time: "12:46",
      sender: "me",
    },
  ]);

  const handleSend = () => {
    if (message.trim()) {
      setMessages([
        ...messages,
        {
          from: "You",
          text: message,
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          sender: "me",
        },
      ]);
      setMessage("");
    }
  };

  return (
    <div className="px-6  min-h-screen bg-white text-black box-border">
      <div className="flex h-[90vh] max-h-[90vh] border border-gray-300 rounded-lg overflow-hidden shadow-lg">
        <div className="w-1/4 bg-orange-200 p-4 overflow-y-auto border-r border-gray-200">
          <h2 className="text-2xl font-bold mb-6 b">Chats</h2>
          {dummyUsers.map((user) => (
            <div
              key={user.id}
              onClick={() => setSelectedUser(user)}
              className={`p-3 rounded-lg cursor-pointer mb-2 ${
                selectedUser?.id === user.id
                  ? "bg-orange-100 font-semibold"
                  : "hover:bg-orange-300"
              }`}
            >
              {user.name}
            </div>
          ))}
        </div>

        <div className="w-3/4 bg-white flex flex-col">
          {selectedUser ? (
            <>
              <div className="p-4 border-b border-gray-300 bg-orange-200">
                <h3 className="text-xl font-bold">{selectedUser.name}</h3>
              </div>

              <div className="flex-1 flex flex-col justify-between">
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`chat ${
                        msg.sender === "me" ? "chat-end" : "chat-start"
                      }`}
                    >
                      <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                          <img
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            alt="avatar"
                          />
                        </div>
                      </div>
                      <div className="chat-header text-sm text-gray-500">
                        {msg.from}
                        <time className="text-xs opacity-50 ml-2">
                          {msg.time}
                        </time>
                      </div>
                      <div className="chat-bubble ">{msg.text}</div>
                      <div className="chat-footer opacity-50 text-xs">
                        Delivered
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 border-t border-gray-200 flex gap-2">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                    placeholder="Type your message..."
                    className="bg-white input input-bordered w-full border-2 border-gray-200"
                  />
                  <button
                    onClick={handleSend}
                    className="btn btn-primary bg-orange-500 border border-orange-500 shadow-none"
                  >
                    Send
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400">
              Select a user to start chatting.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Inbox;
