import React from 'react';

const Custom404 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-gray-600 mb-8">
        Oops! The page you are looking for does not exist.
      </p>
      <a
        href="/"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Go back to home
      </a>
    </div>
  );
};

export default Custom404;
