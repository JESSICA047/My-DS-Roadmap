import React from "react";
import Phase from "./Phase";

const Roadmap = () => {
  const phases = [
    {
      id: 1,
      title: "Foundations",
      period: "JUNE - JULY",
      colorFrom: "from-indigo-600",
      colorTo: "to-indigo-400",
      textColor: "text-indigo-700",
      borderColor: "border-indigo-300",
      description:
        "Build a strong theoretical and practical foundation in core data science tools and concepts.",
      months: [
        {
          id: "june",
          title: "June 2025: Python & Data Manipulation",
          emoji: "📊",
          color: "indigo",
        },
        {
          id: "july",
          title: "July 2025: Statistics, Probability & ML Fundamentals",
          emoji: "📈",
          color: "indigo",
        },
      ],
    },
    {
      id: 2,
      title: "Deep Dive & Specialization",
      period: "AUG - SEP",
      colorFrom: "from-blue-600",
      colorTo: "to-blue-400",
      textColor: "text-blue-700",
      borderColor: "border-blue-300",
      description:
        "Explore more advanced ML algorithms, deep learning basics, and foundational cloud/big data concepts.",
      months: [
        {
          id: "august",
          title: "August 2025: Advanced ML & Ensemble Methods",
          emoji: "🔍",
          color: "blue",
        },
        {
          id: "september",
          title: "September 2025: Deep Learning & Cloud/Big Data Basics",
          emoji: "🧠",
          color: "blue",
        },
      ],
    },
    {
      id: 3,
      title: "Application & Portfolio Building",
      period: "OCT - NOV",
      colorFrom: "from-purple-600",
      colorTo: "to-purple-400",
      textColor: "text-purple-700",
      borderColor: "border-purple-300",
      description:
        "Consolidate knowledge with end-to-end projects, focus on deployment basics, and prepare for job applications.",
      months: [
        {
          id: "october",
          title: "October 2025: End-to-End Project & Deployment",
          emoji: "🚀",
          color: "purple",
        },
        {
          id: "november",
          title: "November 2025: Advanced Topics, Interview Prep & Networking",
          emoji: "🏁",
          color: "purple",
        },
      ],
    },
  ];

  return (
    <section id="roadmap" className="mb-16 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 animate__animated animate__fadeIn">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-600 bg-indigo-100 rounded-full uppercase tracking-wider">
            6-Month Plan
          </span>
          <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Data Scientist Roadmap
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500">
            A comprehensive guide to transform you from beginner to job-ready
            data scientist
          </p>
        </div>

        {phases.map((phase, index) => (
          <Phase
            key={phase.id}
            phase={phase}
            isLast={index === phases.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

export default Roadmap;
