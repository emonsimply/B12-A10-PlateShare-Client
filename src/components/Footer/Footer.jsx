import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaBehance,
  FaInstagram,
  FaGooglePlusG,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import logo from "../../assets/PlateShare_logo_icon.png";
const socialLinks = [
  { icon: FaFacebookF, url: "https://facebook.com" },
  { icon: FaLinkedinIn, url: "https://linkedin.com" },
  { icon: FaTwitter, url: "https://twitter.com" },
  { icon: FaBehance, url: "https://behance.net" },
  { icon: FaInstagram, url: "https://instagram.com" },
];

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300">
      
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="PlateShare" className="h-12 w-12" />
            <h2 className="text-2xl font-bold text-white">PlateShare</h2>
          </div>
          <p className="text-sm leading-relaxed">
            Community Food Sharing — A platform to share surplus food with the
            community and reduce waste. Post, find, and request food easily.
          </p>
          <div className="flex gap-3 mt-6">
      {socialLinks.map(({ icon: Icon, url }, i) => (
        <a
          key={i}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary p-3 border border-primary hover:bg-primary hover:text-white rounded-full duration-300 transition"
        >
          <Icon />
        </a>
      ))}
    </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white border-b-2 border-primary inline-block mb-4">
            Short Link
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#" className="hover:text-primary transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition">
                Our Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition">
                Gallery
              </a>
            </li>
          </ul>
        </div>

        {/* Help Link */}
        <div>
          <h3 className="text-lg font-bold text-white border-b-2 border-primary inline-block mb-4">
            Help Link
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#" className="hover:text-primary transition">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition">
                Refund Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-bold text-white border-b-2 border-primary inline-block mb-4">
            Contact Us
          </h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3 border-b border-gray-700 pb-2">
              <FaPhoneAlt className="text-primary" />
              +880 1700-000000
            </li>
            <li className="flex items-center gap-3 border-b border-gray-700 pb-2">
              <FaEnvelope className="text-primary" />
              platesharebd@gmail.com
            </li>
            <li className="flex items-center gap-3 border-b border-gray-700 pb-2">
              <FaMapMarkerAlt className="text-primary" />
              Dhaka, Bangladesh
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-primary py-4 text-center text-white text-sm">
        Copyright © <span className="font-semibold">PlateShare </span>2025. All
        Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
