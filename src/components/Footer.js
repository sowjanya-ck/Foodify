import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          {/* Logo and Description */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">FoodDelivery</h2>
            <p className="mt-2 text-gray-400">
              Delicious meals delivered to your doorstep. Fresh, hot, and ready to eat!
            </p>
          </div>

          {/* Links */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a href="/" className="text-gray-400 hover:text-white">Home</a>
              </li>
              
              <li className="mb-2">
                <a href="/about" className="text-gray-400 hover:text-white">About Us</a>
              </li>
              <li className="mb-2">
                <a href="/contact-us" className="text-gray-400 hover:text-white">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
            <p className="text-gray-400">Email: sowjanyakumari96@gmail.com</p>
            <p className="text-gray-400">Phone: +1 234 567 890</p>
            <p className="text-gray-400">Address: Bangalore, Foodville</p>
          </div>

          {/* Social Media */}
          <div className="w-full md:w-1/4">
            <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-500">
          <p>&copy; 2024 FoodDelivery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
