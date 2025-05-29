import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ProgressTracker() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [progressData, setProgressData] = useState(() => {
    // Get saved progress from localStorage or use default empty object
    const savedProgress = localStorage.getItem("dataScientistProgress");
    return savedProgress ? JSON.parse(savedProgress) : {};
  });

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("dataScientistProgress", JSON.stringify(progressData));
  }, [progressData]);

  const toggleProgress = (phase, week, item) => {
    const itemKey = `${phase}-${week}-${item.id}`;

    setProgressData((prevData) => {
      const completed = !prevData[itemKey];

      return {
        ...prevData,
        [itemKey]: completed,
      };
    });
  };

  const calculatePhaseProgress = (phase) => {
    const phaseItems = journeyData[phase].weeks.flatMap((week) =>
      week.items.map((item) => `${phase}-${week.id}-${item.id}`)
    );

    const completedItems = phaseItems.filter((key) => progressData[key]);

    return {
      completed: completedItems.length,
      total: phaseItems.length,
      percentage:
        phaseItems.length > 0
          ? Math.round((completedItems.length / phaseItems.length) * 100)
          : 0,
    };
  };

  const calculateTotalProgress = () => {
    const allItems = Object.keys(journeyData).flatMap((phase) =>
      journeyData[phase].weeks.flatMap((week) =>
        week.items.map((item) => `${phase}-${week.id}-${item.id}`)
      )
    );

    const completedItems = allItems.filter((key) => progressData[key]);

    return {
      completed: completedItems.length,
      total: allItems.length,
      percentage:
        allItems.length > 0
          ? Math.round((completedItems.length / allItems.length) * 100)
          : 0,
    };
  };

  // Journey data structure
  const journeyData = {
    foundation: {
      title: "Foundation Phase",
      description: "Build your data science fundamentals",
      color: "indigo",
      weeks: [
        {
          id: "week1",
          title: "Week 1: Python Basics",
          description: "Getting started with Python programming",
          items: [
            { id: 1, task: "Set up Python development environment" },
            { id: 2, task: "Learn basic syntax, variables and data types" },
            {
              id: 3,
              task: "Practice with control structures (if/else, loops)",
            },
            { id: 4, task: "Understand functions and modules" },
            { id: 5, task: "Complete Python basics exercise" },
          ],
        },
        {
          id: "week2",
          title: "Week 2: Data Structures & NumPy",
          description: "Working with data structures and NumPy",
          items: [
            { id: 1, task: "Master lists, dictionaries, sets and tuples" },
            { id: 2, task: "Install and set up NumPy" },
            { id: 3, task: "Learn NumPy arrays and operations" },
            { id: 4, task: "Practice with NumPy functions" },
            { id: 5, task: "Create data manipulation script with NumPy" },
          ],
        },
        {
          id: "week3",
          title: "Week 3: Pandas Fundamentals",
          description: "Data manipulation with Pandas",
          items: [
            { id: 1, task: "Set up Pandas library" },
            { id: 2, task: "Learn Series and DataFrame objects" },
            { id: 3, task: "Practice data cleaning techniques" },
            { id: 4, task: "Understand indexing and selection" },
            { id: 5, task: "Create data analysis report with Pandas" },
          ],
        },
        {
          id: "week4",
          title: "Week 4: Data Visualization",
          description: "Creating visualizations with Matplotlib/Seaborn",
          items: [
            { id: 1, task: "Set up Matplotlib and Seaborn" },
            { id: 2, task: "Create basic plots (line, bar, scatter)" },
            { id: 3, task: "Customize visualizations" },
            { id: 4, task: "Generate statistical plots with Seaborn" },
            { id: 5, task: "Create visualization dashboard for a dataset" },
          ],
        },
        {
          id: "week5",
          title: "Week 5: SQL Fundamentals",
          description: "Database queries with SQL",
          items: [
            { id: 1, task: "Set up a database environment" },
            { id: 2, task: "Learn basic SQL queries (SELECT, WHERE, JOIN)" },
            { id: 3, task: "Practice data filtering and sorting" },
            { id: 4, task: "Work with aggregate functions" },
            { id: 5, task: "Create complex queries with subqueries" },
          ],
        },
        {
          id: "week6",
          title: "Week 6: Statistics for Data Science",
          description: "Statistical concepts for data analysis",
          items: [
            { id: 1, task: "Learn descriptive statistics" },
            { id: 2, task: "Understand probability distributions" },
            { id: 3, task: "Practice hypothesis testing" },
            { id: 4, task: "Learn correlation and regression basics" },
            { id: 5, task: "Complete statistical analysis project" },
          ],
        },
      ],
    },
    specialization: {
      title: "Specialization Phase",
      description: "Deepen your knowledge in machine learning",
      color: "blue",
      weeks: [
        {
          id: "week1",
          title: "Week 1: Machine Learning Basics",
          description: "Introduction to machine learning concepts",
          items: [
            { id: 1, task: "Understand supervised vs unsupervised learning" },
            { id: 2, task: "Learn about training and test sets" },
            { id: 3, task: "Set up Scikit-learn" },
            { id: 4, task: "Implement simple linear regression" },
            { id: 5, task: "Complete basic ML model evaluation" },
          ],
        },
        {
          id: "week2",
          title: "Week 2: Classification Algorithms",
          description: "Working with classification techniques",
          items: [
            { id: 1, task: "Learn logistic regression" },
            { id: 2, task: "Implement decision trees" },
            { id: 3, task: "Understand random forests" },
            { id: 4, task: "Practice with support vector machines" },
            { id: 5, task: "Build a classification project" },
          ],
        },
        {
          id: "week3",
          title: "Week 3: Regression Algorithms",
          description: "Advanced regression techniques",
          items: [
            { id: 1, task: "Deep dive into linear regression" },
            { id: 2, task: "Learn polynomial regression" },
            { id: 3, task: "Understand regularization (Ridge, Lasso)" },
            { id: 4, task: "Practice with regression metrics" },
            { id: 5, task: "Build a regression analysis project" },
          ],
        },
        {
          id: "week4",
          title: "Week 4: Clustering & Dimensionality Reduction",
          description: "Unsupervised learning techniques",
          items: [
            { id: 1, task: "Learn K-means clustering" },
            { id: 2, task: "Understand hierarchical clustering" },
            { id: 3, task: "Practice with Principal Component Analysis (PCA)" },
            { id: 4, task: "Implement t-SNE" },
            { id: 5, task: "Complete unsupervised learning project" },
          ],
        },
        {
          id: "week5",
          title: "Week 5: Model Evaluation",
          description: "Techniques for evaluating ML models",
          items: [
            { id: 1, task: "Learn cross-validation techniques" },
            { id: 2, task: "Understand precision, recall, and F1-score" },
            { id: 3, task: "Practice with ROC curves and AUC" },
            { id: 4, task: "Implement hyperparameter tuning" },
            { id: 5, task: "Create model evaluation report" },
          ],
        },
        {
          id: "week6",
          title: "Week 6: Feature Engineering",
          description: "Creating and selecting features",
          items: [
            { id: 1, task: "Learn feature scaling techniques" },
            { id: 2, task: "Practice handling categorical variables" },
            { id: 3, task: "Understand feature selection methods" },
            { id: 4, task: "Implement feature creation" },
            { id: 5, task: "Complete feature engineering project" },
          ],
        },
      ],
    },
    application: {
      title: "Application Phase",
      description: "Apply your skills to real-world projects",
      color: "green",
      weeks: [
        {
          id: "week1",
          title: "Week 1: Deep Learning Fundamentals",
          description: "Introduction to neural networks",
          items: [
            {
              id: 1,
              task: "Set up deep learning environment (TensorFlow/Keras)",
            },
            { id: 2, task: "Understand neural network architecture" },
            { id: 3, task: "Learn about activation functions" },
            { id: 4, task: "Practice with simple neural networks" },
            { id: 5, task: "Build a basic deep learning model" },
          ],
        },
        {
          id: "week2",
          title: "Week 2: Natural Language Processing",
          description: "Working with text data",
          items: [
            { id: 1, task: "Learn text preprocessing techniques" },
            { id: 2, task: "Understand tokenization and stemming" },
            { id: 3, task: "Practice text vectorization" },
            { id: 4, task: "Implement sentiment analysis" },
            { id: 5, task: "Build an NLP project" },
          ],
        },
        {
          id: "week3",
          title: "Week 3: Time Series Analysis",
          description: "Analyzing time-based data",
          items: [
            { id: 1, task: "Understand time series components" },
            { id: 2, task: "Learn forecasting techniques" },
            { id: 3, task: "Practice with ARIMA models" },
            { id: 4, task: "Implement seasonal decomposition" },
            { id: 5, task: "Complete time series prediction project" },
          ],
        },
        {
          id: "week4",
          title: "Week 4: Data Engineering Basics",
          description: "Working with data pipelines",
          items: [
            { id: 1, task: "Learn ETL processes" },
            { id: 2, task: "Set up data pipeline" },
            { id: 3, task: "Practice with data storage solutions" },
            { id: 4, task: "Understand data quality and validation" },
            { id: 5, task: "Build an automated data pipeline" },
          ],
        },
        {
          id: "week5",
          title: "Week 5: Model Deployment",
          description: "Deploying models to production",
          items: [
            { id: 1, task: "Learn model serialization" },
            { id: 2, task: "Understand API development" },
            { id: 3, task: "Set up Flask/FastAPI" },
            { id: 4, task: "Practice containerization with Docker" },
            { id: 5, task: "Deploy a machine learning model" },
          ],
        },
        {
          id: "week6",
          title: "Week 6: Capstone Project",
          description: "Bringing it all together",
          items: [
            { id: 1, task: "Define project scope and objectives" },
            { id: 2, task: "Collect and prepare data" },
            { id: 3, task: "Build and evaluate models" },
            { id: 4, task: "Create visualizations and insights" },
            { id: 5, task: "Present final data science project" },
          ],
        },
      ],
    },
  };

  const totalProgress = calculateTotalProgress();

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* <!-- Navigation Bar --> */}
        <nav className="sticky top-0 bg-white/80 backdrop-blur-lg shadow-sm z-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="text-indigo-600 font-bold text-xl">
                  DataScience<span className="text-blue-500">Path</span>
                </Link>
              </div>
              <div className="hidden md:flex items-center space-x-6">
                <Link
                  to="/#roadmap"
                  className="text-gray-600 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  Roadmap
                </Link>
                <Link
                  to="/linkedin"
                  className="text-gray-600 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  LinkedIn
                </Link>
                <Link
                  to="/tracker"
                  className="text-indigo-600 border-b-2 border-indigo-600 px-3 py-2 text-sm font-medium"
                >
                  Progress Tracker
                </Link>
              </div>
              <div className="md:hidden flex items-center">
                <button
                  id="mobile-menu-button"
                  className="text-gray-500 hover:text-gray-700 focus:outline-none"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* <!-- Mobile menu, show/hide based on menu state. --> */}
          <div
            id="mobile-menu"
            className={`md:hidden bg-white border-b border-gray-200 ${
              mobileMenuOpen ? "block" : "hidden"
            }`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
              >
                Roadmap
              </Link>
              <Link
                to="/linkedin"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
              >
                LinkedIn
              </Link>
              <Link
                to="/tracker"
                className="block px-3 py-2 rounded-md text-base font-medium text-indigo-600 bg-indigo-50"
              >
                Progress Tracker
              </Link>
            </div>
          </div>
        </nav>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Your Data Science Learning Journey
              </h1>
              <p className="text-lg text-gray-600 max-w-xl mx-auto">
                Track your progress through each phase of the data science
                curriculum. Check off items as you complete them.
              </p>
            </div>

            {/* Overall Progress Bar */}
            <div className="mb-10 bg-white rounded-xl shadow-md p-6">
              <div className="flex justify-between mb-2">
                <h2 className="text-lg font-semibold">Overall Progress</h2>
                <span className="text-indigo-600 font-semibold">
                  {totalProgress.percentage}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className="bg-gradient-to-r from-indigo-600 to-blue-500 h-4 rounded-full"
                  style={{ width: `${totalProgress.percentage}%` }}
                ></div>
              </div>
              <div className="mt-2 text-sm text-gray-600 text-right">
                {totalProgress.completed} of {totalProgress.total} tasks
                completed
              </div>
            </div>

            {/* Phase Tabs */}
            <div className="border-b border-gray-200 mb-6">
              <nav className="-mb-px flex space-x-8">
                {Object.keys(journeyData).map((phaseKey) => {
                  const phase = journeyData[phaseKey];
                  const progress = calculatePhaseProgress(phaseKey);

                  return (
                    <a
                      key={phaseKey}
                      href={`#${phaseKey}`}
                      className={`
                        border-transparent text-gray-700 hover:text-${phase.color}-600 hover:border-${phase.color}-600
                        whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
                      `}
                    >
                      {phase.title}
                      <span
                        className={`ml-2 py-0.5 px-2 rounded-full text-xs bg-${phase.color}-100 text-${phase.color}-800`}
                      >
                        {progress.percentage}%
                      </span>
                    </a>
                  );
                })}
              </nav>
            </div>

            {/* Content for each phase */}
            {Object.keys(journeyData).map((phaseKey) => {
              const phase = journeyData[phaseKey];

              return (
                <div key={phaseKey} id={phaseKey} className="mb-12">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2
                        className={`text-2xl font-bold text-${phase.color}-600`}
                      >
                        {phase.title}
                      </h2>
                      <p className="text-gray-600">{phase.description}</p>
                    </div>
                    <div className={`text-${phase.color}-600 font-semibold`}>
                      {calculatePhaseProgress(phaseKey).percentage}% complete
                    </div>
                  </div>

                  {/* Weeks within the phase */}
                  <div className="space-y-6">
                    {phase.weeks.map((week) => (
                      <div
                        key={week.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden"
                      >
                        <div
                          className={`px-6 py-4 bg-gradient-to-r from-${phase.color}-500 to-${phase.color}-600`}
                        >
                          <h3 className="text-white font-semibold">
                            {week.title}
                          </h3>
                          <p className="text-white text-opacity-90 text-sm">
                            {week.description}
                          </p>
                        </div>
                        <div className="p-6">
                          <ul className="space-y-3">
                            {week.items.map((item) => {
                              const isCompleted =
                                progressData[
                                  `${phaseKey}-${week.id}-${item.id}`
                                ];

                              return (
                                <li key={item.id} className="flex items-center">
                                  <input
                                    type="checkbox"
                                    checked={isCompleted || false}
                                    onChange={() =>
                                      toggleProgress(phaseKey, week.id, item)
                                    }
                                    className={`form-checkbox h-5 w-5 rounded border-gray-300 text-${phase.color}-600 mr-3 focus:ring-${phase.color}-500`}
                                  />
                                  <span
                                    className={
                                      isCompleted
                                        ? "line-through text-gray-500"
                                        : "text-gray-800"
                                    }
                                  >
                                    {item.task}
                                  </span>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProgressTracker;
