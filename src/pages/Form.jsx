import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { v4 as uuidv4 } from 'uuid';
const Form = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phone: ''
  });
  
  const [isSaved, setisSaved] = useState(false);
const navigate= useNavigate()
  // User ID
  const generateUserId = () => uuidv4();

  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const userData = {
      id: generateUserId(),
      ...formData
    };

    // Save to localStorage
    localStorage.setItem('userData', JSON.stringify(userData));

    alert('Data saved successfully!');
    navigate('/text')
    setisSaved(false); 
  };

  // Input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setisSaved(true);
  };

  // Unsaved changes warning
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (isSaved) {
        e.preventDefault();
        e.returnValue = 'You have unsaved changes. Are you sure you want to leave?';
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [isSaved]);

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">User Information</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
        >
          Save Data
        </button>
      </form>

      {isSaved && (
        <div className="mt-4 text-sm text-yellow-600">
          You have unsaved changes!
        </div>
      )}
    </div>
  );
};

export default Form;
