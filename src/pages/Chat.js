import React, { useState } from "react";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    if (name.trim() === "" || content.trim() === "") return;

    // 加入一筆留言物件 { name, content }
    setMessages([...messages, { name, content }]);
    setContent(""); // 清空留言欄位（保留名字）
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      <h2>留言板</h2>

      {/* 輸入區 */}
      <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="輸入名字"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: "8px", fontSize: "16px" }}
        />
        <textarea
          placeholder="輸入留言內容"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={{ padding: "8px", fontSize: "16px", resize: "none", height: "80px" }}
        />
        <button onClick={handleSubmit} style={{
          backgroundColor: "#007bff",
          color: "white",
          padding: "10px",
          border: "none",
          fontSize: "16px",
          cursor: "pointer",
          borderRadius: "5px",
          width: "120px"
        }}>
          發送留言
        </button>
      </div>

      {/* 顯示留言 */}
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#007bff",
              color: "white",
              padding: "10px",
              borderRadius: "5px",
              textAlign: "left"
            }}
          >
            <strong>{msg.name}</strong>
            <p style={{ margin: "5px 0 0 0" }}>{msg.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
