

const url ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLU5_eUUGBfxfxRd4IquPiEwLbt4E_6RYMw&s";
 const Footer = () => {
    return (
      <footer className="bg-slate-600 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
          {/* Left Section (50%) */}
          <div className="md:w-1/2 w-full flex items-center">
            <div className="flex items-center space-x-4">
              <img 
                src={url}
                alt="Company Logo"
                className="h-12 w-auto hover:scale-105 transition-transform rounded-full"
              />
              <div>
                <h3 className="text-xl font-bold">Company Name</h3>
                <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur</p>
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
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Bengaluru, India</p>
                <p>Email: info@company.com</p>
                <p>Phone: +91-xxxxxxxxxx</p>
              </div>
            </div>
          </div>
        </div>
  
        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} TechSphere. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;