import {
  AlertCircle,
  ArrowUpCircle,
  CheckCircle2,
  Download,
  Lightbulb,
  Sparkles,
  Star,
  X,
} from "lucide-react";
import React, { useContext } from "react";
import { FeedbackDataContext } from "../context/FeedbackContext";
import { useNavigate } from "react-router-dom";

const ResumeFeedback = () => {
  let { feedback } = useContext(FeedbackDataContext);
  let navigate = useNavigate();
  const parsedFeedback = JSON.parse(feedback);

  const maxScore = 10;

  function handleGoBack() {
    navigate("/");
  }

  function handleDownloadReport() {
    const fileContent =
      `Resume Feedback Report\n\n` +
      `Resume Rating: ${parsedFeedback?.resume_rating}/10\n\n` +
      `Key Strengths:\n${parsedFeedback?.key_strengths
        ?.map((s, i) => `${i + 1}. ${s}`)
        .join("\n")}\n\n` +
      `Suggested Improvements:\n${parsedFeedback?.points_to_improve
        ?.map((p, i) => `${i + 1}. ${p}`)
        .join("\n")}\n\n` +
      `Structure Analysis:\n` +
      `- ATS Compatibility: ${parsedFeedback?.structure_feedback?.ATS_friendly}\n` +
      `- Format Consistency: ${parsedFeedback?.structure_feedback?.format_consistency}\n` +
      `- Readability: ${parsedFeedback?.structure_feedback?.readability}`;

    const blob = new Blob([fileContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "resume_feedback.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  return (
    <div className="fixed inset-0 bg-gray-900 overflow-y-auto z-50 text-white">
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold">AI Resume Analysis</h1>
            <button
              onClick={handleGoBack}
              className="text-gray-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Score Card */}
            <div className="lg:col-span-1">
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold">Resume Score</h2>
                  <Star className="w-5 h-5 text-yellow-500" />
                </div>
                <div className="flex items-center justify-center py-6">
                  <div className="relative">
                    <svg className="w-32 h-32">
                      <circle
                        className="text-gray-700"
                        strokeWidth="8"
                        stroke="currentColor"
                        fill="transparent"
                        r="56"
                        cx="64"
                        cy="64"
                      />
                      <circle
                        className="text-blue-500"
                        strokeWidth="8"
                        strokeDasharray={`${
                          (parsedFeedback?.resume_rating / maxScore) * 351.8584
                        }, 351.8584`}
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="transparent"
                        r="56"
                        cx="64"
                        cy="64"
                      />
                    </svg>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                      <span className="text-3xl font-bold">
                        {parsedFeedback?.resume_rating}
                      </span>
                      <span className="text-gray-400 text-sm">/10</span>
                    </div>
                  </div>
                </div>
                <p className="text-center text-gray-400">
                  Your resume is performing well! Here's how you can make it
                  even better.
                </p>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Strengths */}
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <h2 className="text-xl font-semibold">Key Strengths</h2>
                </div>
                <ul className="space-y-3">
                  {parsedFeedback?.key_strengths.map((strength, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-1" />
                      <span>{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Improvements */}
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <div className="flex items-center gap-2 mb-4">
                  <AlertCircle className="w-5 h-5 text-yellow-500" />
                  <h2 className="text-xl font-semibold">
                    Suggested Improvements
                  </h2>
                </div>
                <ul className="space-y-3">
                  {parsedFeedback?.points_to_improve?.map(
                    (improvement, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <ArrowUpCircle className="w-4 h-4 text-yellow-500 mt-1" />
                        <span>{improvement}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Structure Analysis */}
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <div className="flex items-center gap-2 mb-4">
                  <Lightbulb className="w-5 h-5 text-blue-500" />
                  <h2 className="text-xl font-semibold">Structure Analysis</h2>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-blue-400 mb-2">
                      ATS Compatibility
                    </h3>
                    {parsedFeedback?.structure_feedback?.ATS_friendly}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-blue-400 mb-2">
                      Format Consistency
                    </h3>
                    {parsedFeedback?.structure_feedback?.format_consistency}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-blue-400 mb-2">
                      Readability
                    </h3>
                    {parsedFeedback?.structure_feedback?.readability}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button
              onClick={handleDownloadReport}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <Download className="w-5 h-5" />
              Download Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeFeedback;
