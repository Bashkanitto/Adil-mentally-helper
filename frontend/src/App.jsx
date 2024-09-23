import axios from 'axios'
import { useEffect, useState } from 'react'

const App = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const userId = 1; // Заменить на реальный ID пользователя

  useEffect(() => {
    const fetchMessages = async () => {
      const res = await axios.get(`http://localhost:8000/api/users/${userId}/messages`);
      setMessages(res.data);
    };
    fetchMessages();
  }, []);

  const handleSendMessage = async () => {
    await axios.post(`http://localhost:8000/api/users/${userId}/messages`, { text: input });
    setMessages([...messages, { text: input, date: new Date() }]);
    setInput('');
  };

  return (
    <div>
      <h1>Психологический бот</h1>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>
            <p>{msg.text} <small>{new Date(msg.date).toLocaleString()}</small></p>
          </div>
        ))}
      </div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleSendMessage}>Отправить</button>
    </div>
  );
};

export default App;
