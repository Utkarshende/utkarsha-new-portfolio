import React from "react";

function H2({ headingTitle, description }) {
  return (
    <>
      <h2 className="text-4xl font-bold text-gray-700 mb-4 text-center pb-2">
        {headingTitle}
        <div className="w-1/8 bg-gradient-to-r from-cyan-700 to-cyan-800 h-1 mt-3 mx-auto rounded-full"></div>
      </h2>
      <p className="text-gray-600 text-lg max-w-xl mx-auto text-center mb-14">
        {description && description}
      </p>
    </>
  );
}

export default H2;
