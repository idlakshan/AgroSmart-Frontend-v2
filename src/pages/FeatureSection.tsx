import {
  MicroscopeIcon,
  MapPinIcon,
  BarChart3Icon,
  BookOpenIcon,
} from "lucide-react";
import React from "react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const FeatureSection = () => {
  const features: Feature[] = [
    {
      icon: <MicroscopeIcon className="h-10 w-10 text-green-600" />,
      title: "Soil Analysis",
      description:
        "Upload your soil photo for personalized recommendations based on advanced AI analysis of soil composition.",
    },
    {
      icon: <MapPinIcon className="h-10 w-10 text-green-600" />,
      title: "Location-Based",
      description:
        "Get recommendations specific to your district's climate, taking into account historical temperature and humidity patterns.",
    },
    {
      icon: <BarChart3Icon className="h-10 w-10 text-green-600" />,
      title: "Smart Suggestions",
      description:
        "View confidence scores for each recommended crop to help you make informed decisions about what to plant.",
    },
    {
      icon: <BookOpenIcon className="h-10 w-10 text-green-600" />,
      title: "Crop Knowledge Base",
      description:
        "Access a comprehensive database of crops with essential growing information for successful cultivation.",
    },
  ];

  return (
    <section id="features" className="pt-16 pb-14 px-4 md:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Features
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Discover how AgroSmart can help optimize your agricultural practices
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-green-200 transition-colors"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-center mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
