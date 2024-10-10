import React from "react";
import {
  FaEnvelope,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import FooterVideo from "../assets/video/Footer.mp4";
export default function Footer() {
  return (
    <footer className="min-h-[450px] relative mt-20 text-white overflow-hidden">
      <video
        autoPlay
        loop
        muted
        loading="lazy"
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={FooterVideo} />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-gray-900"></div>
      <div className="relative z-10 container mx-auto px-4 py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-white">Secure <span className="text-blue-500">Trace</span></h2>
            <p className="text-sm text-gray-300">
              Ensuring the security of your digital infrastructure with advanced
              monitoring and log management solutions.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://wa.me/905304200064"
                  target="_blank"
                  className="hover:text-gray-300 transition duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <FaPhone className="text-gray-400" />
                <a
                  href="tel:+905304200064"
                  className="hover:text-gray-300 transition duration-300"
                >
                  +90 530 420 00 64
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-gray-400" />
                <a
                  href="mailto:info@paraph.io"
                  className="hover:text-gray-300 transition duration-300"
                >
                  info@paraph.io
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-500 transition duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/905304200064"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-green-500 transition duration-300"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://www.google.com/maps/place/Yelken+Plaza/@40.9107789,29.2971253,17z/data=!3m1!4b1!4m6!3m5!1s0x14cada4be6c85f6b:0xfd1971b61a6163b!8m2!3d40.9107789!4d29.2971253!16s%2Fg%2F1hc4k95tc?entry=ttu&g_ep=EgoyMDI0MTAwMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-500 transition duration-300"
              >
                <FaMapMarkerAlt />
              </a>
            </div>
            <a
              href="https://wa.me/905304200064"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-200 transition duration-300 text-sm"
            >
              Get a Quote Now
            </a>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-gray-800 text-center text-sm">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} SecureTrace. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
