import { Brain, FileUp, History, Shield, Sparkles } from "lucide-react";
import React from "react";

const Hero = ({setshowUploadModal}) => {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Smart Analysis",
      description:
        "Advanced AI algorithms analyze your resume's content and structure",
    },
    {
      icon: <History className="w-6 h-6" />,
      title: "Track Progress",
      description:
        "Save your analysis history and track improvements over time",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Private & Secure",
      description: "Your data is encrypted and never shared with third parties",
    },
  ];
  return (
    <main className="pt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center py-20">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Optimize Your Resume for Success
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Upload your resume and get instant, AI-powered feedback to help you
            land your dream job. Our advanced algorithms analyze your resume's
            content, format, and impact.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={() => setshowUploadModal(true)} className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-lg font-semibold transition-colors w-full sm:w-auto">
              <FileUp className="w-5 h-5" />
              <span>Upload Resume</span>
            </button>
            <p className="text-sm text-gray-500">
              {/* Guest user message */}
              <Sparkles className="inline w-4 h-4 mr-1" />
              Analyze as guest or login to save history
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 py-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors"
            >
              <div className="bg-blue-500/10 p-3 rounded-lg w-fit mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Hero;
