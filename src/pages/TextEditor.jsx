import { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const TextEditor = () => {
  const [content, setContent] = useState('');
  const [isSaved, setisSaved] = useState(false);

  useEffect(() => {
    const savedContent = localStorage.getItem('userData'); 
    if (savedContent) {
      try {
        const data = JSON.parse(savedContent);
        const combinedContent = `
          Name: ${data.name}\n
          Address: ${data.address}\n
          Email: ${data.email}\n
          Phone: ${data.phone}
        `;
        setContent(combinedContent.trim()); 
        console.log(data);
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    }
  }, []);
  // Warn user if leaving with unsaved changes
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (isSaved) {
        event.preventDefault();
        event.returnValue = 'You have unsaved changes. Do you really want to leave?';
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [isSaved]);

  // Handle content changes
  const handleContentChange = (value) => {
    setContent(value);
    setisSaved(true);
  };

  // Save content 
  const handleSave = () => {
    localStorage.setItem('richTextContent', content); 
    setisSaved(false); 
  };

  // Reset editor content
  const handleReset = () => {
    setContent('');
    localStorage.removeItem('richTextContent');
    setisSaved(false);
  };

  // Editor modules and formats
  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['clean']
    ]
  };

  const formats = [
    'bold', 'italic', 'underline',
    'list', 'bullet'
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Rich Text Editor</h2>

      <div className="mb-4">
        <ReactQuill
          value={content}
          onChange={handleContentChange}
          modules={modules}
          formats={formats}
          theme="snow"
          className="h-64"
        />
      </div>

      <div className="flex gap-4 mt-20">
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors shadow-md"
        >
          Save
        </button>

        <button
          onClick={handleReset}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors shadow-md"
        >
          Clear
        </button>
      </div>

      {isSaved && (
        <p className="mt-2 text-sm text-yellow-600 font-semibold">
          You have unsaved changes! 
        </p>
      )}
    </div>
  );
};

export default TextEditor;
