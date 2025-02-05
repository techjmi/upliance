import { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const TextEditor = () => {
  const [content, setContent] = useState('');
  const [isDirty, setIsDirty] = useState(false);

  // Load saved content from localStorage on mount
  useEffect(() => {
    const savedContent = localStorage.getItem('richTextContent');
    if (savedContent) {
      setContent(savedContent);
    }
  }, []);

  // Handle content changes
  const handleContentChange = (value) => {
    setContent(value);
    if (!isDirty) setIsDirty(true);
    
    // Auto-save to localStorage
    localStorage.setItem('richTextContent', value);
    setIsDirty(false);
  };

  // Editor modules and formats
  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['clean']
    ]
  };

  const formats = [
    'bold', 'italic', 'underline',
    'list', 'bullet'
  ];

  // Reset editor content
  const handleReset = () => {
    setContent('');
    localStorage.removeItem('richTextContent');
    setIsDirty(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Rich Text Editor</h2>
      
      <div className="mb-4">
        <ReactQuill
          value={content}
          onChange={handleContentChange}
          modules={modules}
          formats={formats}
          theme="snow"
          className="h-64 mb-4"
        />
      </div>

      <div className="flex gap-4">
        <button
          onClick={handleReset}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
        >
          Clear Content
        </button>
        
        {isDirty && (
          <span className="self-center text-sm text-yellow-600">
            Unsaved changes
          </span>
        )}
      </div>
    </div>
  );
};

export default TextEditor;