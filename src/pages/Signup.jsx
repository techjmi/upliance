import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcryptjs';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [isSaved, setisSaved] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const generateUserId = () => uuidv4();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const hashedPassword = await bcrypt.hash(formData.password, 10);
      const userData = {
        id: generateUserId(),
        name: formData.name,
        email: formData.email,
        password: hashedPassword
      };

      const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

      if (existingUsers.some(user => user.email === formData.email)) {
        setError('User already exists with this email');
        return;
      }

      const updatedUsers = [...existingUsers, userData];
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      
      alert('Signup successful!');
      setisSaved(false);
      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      });

      navigate('/login'); // Redirect to login after signup

    } catch (err) {
      setError('Error creating account. Please try again.');
      console.error('Signup error:', err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (!isSaved) setisSaved(true);
  };

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
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Sign Up</h2>
      
      {error && <div className="mb-4 text-red-600 text-sm">{error}</div>}

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
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            minLength="6"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            minLength="6"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
        >
          Sign Up
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

export default Signup;
