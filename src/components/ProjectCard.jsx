import React from "react";
import { ExternalLink, Github } from "lucide-react";
import Button from "./Button";

function ProjectCard({
  projectPhoto,
  projectTitle,
  projectDesc,
  features,
  technologies,
  gitHubLink,
  liveLink,
}) {
  return (
    <div className="w-full max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 bg-white flex flex-col">
      
      {/* Large Hero Image */}
      <div className="relative overflow-hidden">
        <img
          src={projectPhoto}
          alt={projectTitle}
          className="w-full h-[420px] md:h-[500px] object-cover transform hover:scale-105 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-10 flex flex-col">
        <h4 className="text-4xl font-bold text-gray-800 mb-6">
          {projectTitle}
        </h4>

        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          {projectDesc}
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          
          {/* Features */}
          <div>
            <h5 className="font-semibold text-xl text-gray-800 mb-4">
              Key Features
            </h5>
            <ul className="list-disc list-inside space-y-3 text-gray-700 marker:text-cyan-700">
              {features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h5 className="font-semibold text-xl text-gray-800 mb-4">
              Technologies Used
            </h5>
            <div className="flex flex-wrap gap-3">
              {technologies.map((technology, index) => (
                <span
                  key={index}
                  className="bg-gradient-to-r from-cyan-700 to-cyan-800 px-4 py-2 rounded-full text-white text-sm font-medium shadow"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 mt-12">
          <Button
            btnTitle={
              <div className="flex items-center gap-2">
                <Github className="w-5 h-5" />
                View Code
              </div>
            }
            btnVariant="secondary"
            customStyle="w-full"
            onBtnClick={() => window.open(gitHubLink, "_blank")}
          />
          <Button
            btnTitle={
              <div className="flex items-center gap-2">
                <ExternalLink className="w-5 h-5" />
                Live Demo
              </div>
            }
            btnVariant="primary"
            customStyle="w-full"
            onBtnClick={() => window.open(liveLink, "_blank")}
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
