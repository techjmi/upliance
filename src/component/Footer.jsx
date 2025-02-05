const Footer = () => {
    return (
      <footer className="bg-slate-600 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
          {/* Left Section (50%) */}
          <div className="md:w-1/2 w-full flex items-center">
            <div className="flex items-center space-x-4">
              <img 
                src="/logo.png" // Replace with your logo path
                alt="Company Logo"
                className="h-12 w-auto hover:scale-105 transition-transform"
              />
              <div>
                <h3 className="text-xl font-bold">Company Name</h3>
                <p className="text-gray-400">Simple tagline here</p>
              </div>
            </div>
          </div>
  
          {/* Right Section (50%) */}
          <div className="md:w-1/2 w-full flex flex-col md:flex-row justify-between">
            {/* Quick Links */}
            <div className="mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-300">Home</a></li>
                <li><a href="#" className="hover:text-gray-300">About</a></li>
                <li><a href="#" className="hover:text-gray-300">Services</a></li>
                <li><a href="#" className="hover:text-gray-300">Contact</a></li>
              </ul>
            </div>
  
            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-3">Contact</h4>
              <div className="space-y-1">
                <p>123 Business Street</p>
                <p>New York, USA</p>
                <p>Email: info@company.com</p>
                <p>Phone: (123) 456-7890</p>
              </div>
            </div>
          </div>
        </div>
  
        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;