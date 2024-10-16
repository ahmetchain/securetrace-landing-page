import React from "react";
import BigData from "../assets/img/bigdata.webp";
import BlueKey from "../assets/img/bluekey.webp";

const DataSimplificationSection = () => {
  return (
    <div className="bg-gray-100 py-16 mb-20 mx-10 rounded-md">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
          <img
            src={BigData}
            alt="Data Analysis and Organization"
            className="w-full h-64 object-cover"
          />
          <div className="p-6 flex-grow">
            <h3 className="text-2xl font-bold mb-4">
              Data Analysis and Organization
            </h3>
            <p className="text-gray-600 mb-4">
              With SecureTrace, eliminate data complexity. Easily track your data and gain meaningful insights. Our platform helps you organize and analyze your data efficiently, ensuring you can make informed decisions quickly.
            </p>
            <p className="text-gray-600">
              Enhance your business operations by identifying critical issues faster and improving overall efficiency. SecureTrace provides real-time data monitoring and smart analytics to streamline your workflow seamlessly.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
          <img
            src={BlueKey}
            alt="Security with Blockchain"
            className="w-full h-64 object-cover object-top "
          />
          <div className="p-6 flex-grow">
            <h3 className="text-2xl font-bold mb-4">Security with Blockchain</h3>
            <p className="text-gray-600 mb-4">
              Secure your data with blockchain technology. Each transaction is recorded in an immutable and transparent manner, ensuring the highest level of security. Protect your data from tampering and unauthorized access.
            </p>
            <p className="text-gray-600">
              Blockchain provides a decentralized and secure way to store your data, making it nearly impossible for malicious actors to alter or delete records. Trust SecureTrace to keep your data safe and secure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataSimplificationSection;