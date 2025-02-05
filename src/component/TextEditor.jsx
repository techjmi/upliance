import { useState, useEffect } from 'react';

const TextEditor = () => {
  const [content, setContent] = useState('');
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Load user data from localStorage
    const savedData = localStorage.getItem('userData');
    if (savedData) {
      setUserData(JSON.parse(savedData));
    }
  }, []);

  const applyFormatting = (command) => {
    document.execCommand(command, false, null);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-4 space-x-2">
        <button
          onClick={() => applyFormatting('bold')}
          className="px-3 py-1 border rounded hover:bg-gray-100"
        >
          <strong>B</strong>
        </button>
        <button
          onClick={() => applyFormatting('italic')}
          className="px-3 py-1 border rounded hover:bg-gray-100"
        >
          <em>I</em>
        </button>
        <button
          onClick={() => applyFormatting('underline')}
          className="px-3 py-1 border rounded hover:bg-gray-100"
        >
          <u>U</u>
        </button>
        <button
          onClick={() => applyFormatting('insertUnorderedList')}
          className="px-3 py-1 border rounded hover:bg-gray-100"
        >
          • List
        </button>
      </div>

      {userData && (
        <div className="mb-4 p-4 bg-gray-50 rounded">
          <h3 className="font-bold mb-2">User Data Preview:</h3>
          <p>ID: {userData.id}</p>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          <p>Phone: {userData.phone}</p>
          <p>Address: {userData.address}</p>
        </div>
      )}

      <div
        contentEditable
        className="w-full min-h-[200px] p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        onInput={(e) => setContent(e.currentTarget.innerHTML)}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default TextEditor;