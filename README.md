
# Upliance Project

## Overview
This project is a web application developed using React, Vite, Tailwind CSS, bcryptjs, React Quill, React Router DOM, and Recharts. The application provides a user-friendly interface for managing user profiles, viewing analytics trends, and submitting data through forms.

## Project Structure

### Components
- **Counter.js**
  - A simple counter component that allows users to increment and decrement a value, demonstrating state management.

- **Footer.js**
  - Contains footer code, displaying links to social media, copyright information, and other relevant links.

- **Navbar.js**
  - The navigation bar that provides links to different pages (e.g., About, Dashboard, Form, Login, Signup) and handles user authentication status.

- **PrivateRoute.js**
  - A higher-order component that wraps protected routes, ensuring users are logged in before accessing certain pages, such as the Dashboard.

- **Profile.js**
  - Displays user profile information, allowing users to view their data and analytics.

- **ProfileTrends.js**
  - Contains analytics charts using Recharts to visualize user data trends and statistics.

### Pages
- **About.js**
  - Provides information about the project and its purpose.

- **Dashboard.js**
  - A private route that displays user-specific analytics and trends. **Users must be logged in to view this page.**

- **Form.js**
  - A form for collecting user data, with input fields for name, email, etc., and handles form submission.

- **Login.js**
  - A login page where users can enter their credentials. Uses bcryptjs for secure password handling.

- **Signup.js**
  - A signup page for new users to create an account, including password hashing with bcryptjs.

- **TextEditor.js**
  - Utilizes React Quill to provide a rich text editor for users to create formatted text content.

### Skeleton
- **Skeleton.js**
  - Contains skeleton UI components for loading states in Profile and Profile Trends, enhancing user experience while data is being fetched.

## Authentication
To access the **Dashboard** and other protected routes, users need to log in. User information is securely stored in local storage, and password management is handled using bcryptjs.

## Live Deployment
- Live link: [Upliance](https://upliance-om55.onrender.com/)
- Code repository: [GitHub Repository](https://github.com/techjmi/upliance)

## Getting Started
To get a local copy of the project up and running, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/techjmi/upliance.git
   ```
2. Navigate to the project directory:
   ```bash
   cd upliance
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and visit `http://localhost:3000` to see the app in action.

## Acknowledgments
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Recharts](https://recharts.org/en-US/)
- [bcryptjs](https://github.com/dcodeIO/bcrypt.js)
- [React Quill](https://github.com/zenoamaro/react-quill)
- [React Router](https://reactrouter.com/)


