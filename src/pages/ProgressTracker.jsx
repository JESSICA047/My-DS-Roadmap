import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

function ProgressTracker() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [progressData, setProgressData] = useState(() => {
    // Get saved progress from localStorage or use default empty object
    const savedProgress = localStorage.getItem("dataScientistProgress");
    return savedProgress ? JSON.parse(savedProgress) : {};
  });
  const [openWeeks, setOpenWeeks] = useState({});
  const [activePhase, setActivePhase] = useState("foundation");
  // Define the actual start date of the entire journey
  // Using moment.js for better date handling
  const journeyStartDate = moment("2025-06-03");

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

  const toggleWeek = (phase, weekId) => {
    setOpenWeeks((prev) => ({
      ...prev,
      [`${phase}-${weekId}`]: !prev[`${phase}-${weekId}`],
    }));
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
  // Function to format date as "MMM D, YYYY" (e.g. "Jun 3, 2025")
  const formatDate = (date) => {
    return moment(date).format("MMM D, YYYY");
  };
  // Function to calculate week dates
  const getWeekDates = (phaseKey, weekId) => {
    let weekIndex = 0;
    let totalWeeksBeforeThisPhase = 0;

    // Calculate total weeks before the active phase
    for (const pKey in journeyData) {
      if (pKey === phaseKey) break;
      totalWeeksBeforeThisPhase += journeyData[pKey].weeks.length;
    }

    // Find the index of the current week within its phase
    const currentPhaseWeeks = journeyData[phaseKey].weeks;
    for (let i = 0; i < currentPhaseWeeks.length; i++) {
      if (currentPhaseWeeks[i].id === weekId) {
        weekIndex = i;
        break;
      }
    }

    const overallWeekNumber = totalWeeksBeforeThisPhase + weekIndex;

    // Calculate start date (adding weeks to journey start date)
    const startDate = moment(journeyStartDate).add(overallWeekNumber, "weeks");

    // Calculate end date (6 days after start date for a 7-day week)
    const endDate = moment(startDate).add(6, "days");

    return {
      startDate: formatDate(startDate),
      endDate: formatDate(endDate),
    };
  };
  // Journey data structure with enhanced CTAs and resources
  const journeyData = {
    foundation: {
      title: "Foundation Phase",
      description: "Build your data science fundamentals",
      color: "indigo",
      weeks: [
        {
          id: "week1",
          title: "Week 1: Python Basics & Environment Setup",
          description:
            "Getting started with Python programming and essential tools",
          items: [
            {
              id: 1,
              task: "Install Python 3.9+ and set up your development environment",
              difficulty: "easy",
              resources: [
                {
                  type: "article",
                  title: "Official Python Installation Guide",
                  url: "https://www.python.org/downloads/",
                },
                {
                  type: "video",
                  title: "Python Setup for Beginners",
                  url: "https://www.youtube.com/watch?v=YYXdXT2l-Gg",
                },
              ],
            },
            {
              id: 2,
              task: "Learn basic syntax, variables, and primitive data types",
              difficulty: "easy",
              resources: [
                {
                  type: "course",
                  title: "Python for Everybody (Ch. 1-3)",
                  url: "https://www.py4e.com/lessons",
                },
                {
                  type: "article",
                  title: "Python Basics Tutorial",
                  url: "https://www.w3schools.com/python/python_intro.asp",
                },
              ],
            },
            {
              id: 3,
              task: "Practice with control structures (if/else, for/while loops)",
              difficulty: "medium",
              resources: [
                {
                  type: "practice",
                  title: "Python Control Flow Exercises",
                  url: "https://www.w3resource.com/python-exercises/python-conditional-statements-and-loop-exercises.php",
                },
                {
                  type: "video",
                  title: "Python Control Flow Tutorial",
                  url: "https://www.youtube.com/watch?v=Zp5MuPOtsSY",
                },
              ],
            },
            {
              id: 4,
              task: "Define and use functions, import modules",
              difficulty: "medium",
              resources: [
                {
                  type: "article",
                  title: "Python Functions Guide",
                  url: "https://realpython.com/defining-your-own-python-function/",
                },
                {
                  type: "practice",
                  title: "Function Practice Problems",
                  url: "https://www.practicepython.org/",
                },
              ],
            },
            {
              id: 5,
              task: "Complete a Python basics mini-project (calculator or converter)",
              difficulty: "project",
              resources: [
                {
                  type: "project",
                  title: "Build a Simple Calculator",
                  url: "https://www.digitalocean.com/community/tutorials/how-to-make-a-simple-calculator-program-in-python",
                },
                {
                  type: "github",
                  title: "Python Beginner Projects",
                  url: "https://github.com/practical-tutorials/project-based-learning#python",
                },
              ],
            },
          ],
        },
        {
          id: "week2",
          title: "Week 2: Data Structures & NumPy",
          description:
            "Working with Python collections and numerical computing",
          items: [
            {
              id: 1,
              task: "Master Python lists and dictionaries with practical examples",
              difficulty: "medium",
              resources: [
                {
                  type: "article",
                  title: "Python Lists Explained",
                  url: "https://realpython.com/python-lists-tuples/",
                },
                {
                  type: "article",
                  title: "Python Dictionary Guide",
                  url: "https://realpython.com/python-dicts/",
                },
              ],
            },
            {
              id: 2,
              task: "Learn sets and tuples with use cases for each",
              difficulty: "easy",
              resources: [
                {
                  type: "article",
                  title: "Python Sets Tutorial",
                  url: "https://www.programiz.com/python-programming/set",
                },
                {
                  type: "practice",
                  title: "Data Structures Practice",
                  url: "https://www.hackerrank.com/domains/python?filters%5Bsubdomains%5D%5B%5D=py-basic-data-types",
                },
              ],
            },
            {
              id: 3,
              task: "Install and set up NumPy for numerical computing",
              difficulty: "easy",
              resources: [
                {
                  type: "article",
                  title: "NumPy Installation Guide",
                  url: "https://numpy.org/install/",
                },
                {
                  type: "video",
                  title: "Introduction to NumPy",
                  url: "https://www.youtube.com/watch?v=QUT1VHiLmmI",
                },
              ],
            },
            {
              id: 4,
              task: "Learn NumPy arrays, indexing, broadcasting",
              difficulty: "medium",
              resources: [
                {
                  type: "article",
                  title: "NumPy Array Tutorial",
                  url: "https://numpy.org/doc/stable/user/quickstart.html",
                },
                {
                  type: "course",
                  title: "NumPy Fundamentals",
                  url: "https://www.datacamp.com/courses/introduction-to-numpy",
                },
              ],
            },
            {
              id: 5,
              task: "Create a data manipulation script using NumPy",
              difficulty: "project",
              resources: [
                {
                  type: "project",
                  title: "NumPy Data Analysis Mini-Project",
                  url: "https://www.kaggle.com/code/willkoehrsen/numpy-tutorial-python-for-data-science",
                },
                {
                  type: "practice",
                  title: "100 NumPy Exercises",
                  url: "https://github.com/rougier/numpy-100",
                },
              ],
            },
          ],
        },
        {
          id: "week3",
          title: "Week 3: Pandas Fundamentals",
          description: "Data manipulation and analysis with pandas",
          items: [
            {
              id: 1,
              task: "Install pandas and understand its role in data science",
              difficulty: "easy",
              resources: [
                {
                  type: "article",
                  title: "Pandas Installation Guide",
                  url: "https://pandas.pydata.org/getting_started.html",
                },
                {
                  type: "video",
                  title: "Pandas Intro for Data Science",
                  url: "https://www.youtube.com/watch?v=vmEHCJofslg",
                },
              ],
            },
            {
              id: 2,
              task: "Learn to create and manipulate Series and DataFrame objects",
              difficulty: "medium",
              resources: [
                {
                  type: "article",
                  title: "Pandas Series & DataFrames",
                  url: "https://pandas.pydata.org/pandas-docs/stable/user_guide/dsintro.html",
                },
                {
                  type: "practice",
                  title: "Pandas Exercises",
                  url: "https://github.com/guipsamora/pandas_exercises",
                },
              ],
            },
            {
              id: 3,
              task: "Master data cleaning: handling missing values, duplicates",
              difficulty: "medium",
              resources: [
                {
                  type: "article",
                  title: "Data Cleaning with Pandas",
                  url: "https://towardsdatascience.com/data-cleaning-with-python-and-pandas-detecting-missing-values-3e9c6ebcf78b",
                },
                {
                  type: "video",
                  title: "Pandas Data Cleaning Tutorial",
                  url: "https://www.youtube.com/watch?v=iYie42M1ZyU",
                },
              ],
            },
            {
              id: 4,
              task: "Practice indexing, filtering, and selection techniques",
              difficulty: "medium",
              resources: [
                {
                  type: "article",
                  title: "Pandas Indexing Guide",
                  url: "https://pandas.pydata.org/pandas-docs/stable/user_guide/indexing.html",
                },
                {
                  type: "practice",
                  title: "Pandas Selection Exercises",
                  url: "https://www.w3resource.com/python-exercises/pandas/index.php",
                },
              ],
            },
            {
              id: 5,
              task: "Create a data analysis report using real-world dataset",
              difficulty: "project",
              resources: [
                {
                  type: "dataset",
                  title: "Kaggle Datasets",
                  url: "https://www.kaggle.com/datasets",
                },
                {
                  type: "project",
                  title: "Exploratory Data Analysis Tutorial",
                  url: "https://www.kaggle.com/code/ekami66/detailed-exploratory-data-analysis-with-python",
                },
              ],
            },
          ],
        },
        {
          id: "week4",
          title: "Week 4: Data Visualization",
          description:
            "Creating impactful visualizations with Matplotlib and Seaborn",
          items: [
            {
              id: 1,
              task: "Set up Matplotlib and understand plotting basics",
              difficulty: "easy",
              resources: [
                {
                  type: "article",
                  title: "Matplotlib Quick Start Guide",
                  url: "https://matplotlib.org/stable/tutorials/introductory/quick_start.html",
                },
                {
                  type: "video",
                  title: "Matplotlib Crash Course",
                  url: "https://www.youtube.com/watch?v=O_OeWxpnUc0",
                },
              ],
            },
            {
              id: 2,
              task: "Create and customize line, bar, and scatter plots",
              difficulty: "medium",
              resources: [
                {
                  type: "article",
                  title: "Matplotlib Plot Types",
                  url: "https://matplotlib.org/stable/plot_types/index.html",
                },
                {
                  type: "practice",
                  title: "Matplotlib Exercises",
                  url: "https://www.w3resource.com/python-exercises/matplotlib/index.php",
                },
              ],
            },
            {
              id: 3,
              task: "Install Seaborn and create statistical visualizations",
              difficulty: "medium",
              resources: [
                {
                  type: "article",
                  title: "Seaborn Introduction",
                  url: "https://seaborn.pydata.org/introduction.html",
                },
                {
                  type: "tutorial",
                  title: "Seaborn Tutorial",
                  url: "https://www.tutorialspoint.com/seaborn/index.htm",
                },
              ],
            },
            {
              id: 4,
              task: "Master advanced plots: heatmaps, pair plots, distribution plots",
              difficulty: "hard",
              resources: [
                {
                  type: "article",
                  title: "Seaborn Advanced Plots",
                  url: "https://seaborn.pydata.org/tutorial/function_overview.html",
                },
                {
                  type: "video",
                  title: "Advanced Visualization Techniques",
                  url: "https://www.youtube.com/watch?v=KfPhZ4SG5_I",
                },
              ],
            },
            {
              id: 5,
              task: "Create a comprehensive visualization dashboard for a dataset",
              difficulty: "project",
              resources: [
                {
                  type: "project",
                  title: "Data Visualization Portfolio Project",
                  url: "https://towardsdatascience.com/jupyter-notebook-as-a-data-science-portfolio-62e779334a4b",
                },
                {
                  type: "example",
                  title: "Visualization Dashboard Examples",
                  url: "https://www.kaggle.com/kernels?sortBy=votes&group=everyone&pageSize=20&tagIds=13106",
                },
              ],
            },
          ],
        },
        {
          id: "week5",
          title: "Week 5: SQL Fundamentals",
          description: "Database querying and manipulation with SQL",
          items: [
            {
              id: 1,
              task: "Set up SQLite or PostgreSQL database environment",
              difficulty: "easy",
              resources: [
                {
                  type: "article",
                  title: "SQLite Installation Guide",
                  url: "https://www.sqlitetutorial.net/download-install-sqlite/",
                },
                {
                  type: "tutorial",
                  title: "DB Browser for SQLite Tutorial",
                  url: "https://github.com/sqlitebrowser/sqlitebrowser",
                },
              ],
            },
            {
              id: 2,
              task: "Learn basic SQL queries (SELECT, WHERE, JOIN)",
              difficulty: "medium",
              resources: [
                {
                  type: "interactive",
                  title: "SQLBolt Interactive Tutorials",
                  url: "https://sqlbolt.com/",
                },
                {
                  type: "course",
                  title: "SQL Basics Course",
                  url: "https://www.khanacademy.org/computing/computer-programming/sql",
                },
              ],
            },
            {
              id: 3,
              task: "Practice filtering, sorting, and limiting results",
              difficulty: "medium",
              resources: [
                {
                  type: "practice",
                  title: "SQL Practice Problems",
                  url: "https://www.hackerrank.com/domains/sql",
                },
                {
                  type: "article",
                  title: "SQL Filtering Guide",
                  url: "https://mode.com/sql-tutorial/sql-where",
                },
              ],
            },
            {
              id: 4,
              task: "Master aggregate functions and GROUP BY operations",
              difficulty: "medium",
              resources: [
                {
                  type: "article",
                  title: "SQL Aggregations",
                  url: "https://mode.com/sql-tutorial/sql-aggregate-functions",
                },
                {
                  type: "practice",
                  title: "Aggregation Exercises",
                  url: "https://pgexercises.com/questions/aggregates/",
                },
              ],
            },
            {
              id: 5,
              task: "Create complex queries using subqueries and CTEs",
              difficulty: "hard",
              resources: [
                {
                  type: "article",
                  title: "SQL Subqueries Guide",
                  url: "https://mode.com/sql-tutorial/sql-sub-queries",
                },
                {
                  type: "tutorial",
                  title: "SQL Common Table Expressions",
                  url: "https://www.essentialsql.com/introduction-common-table-expressions-ctes/",
                },
              ],
            },
            {
              id: 6,
              task: "Complete a database project with real-world schema design",
              difficulty: "project",
              resources: [
                {
                  type: "project",
                  title: "Database Design Project",
                  url: "https://www.sqlite.org/famous-databases.html",
                },
                {
                  type: "example",
                  title: "Sample Database Projects",
                  url: "https://www.sqlitetutorial.net/sqlite-sample-database/",
                },
              ],
            },
          ],
        },
        {
          id: "week6",
          title: "Week 6: Statistics for Data Science",
          description: "Essential statistical concepts for data analysis",
          items: [
            {
              id: 1,
              task: "Master descriptive statistics: mean, median, variance, etc.",
              difficulty: "medium",
              resources: [
                {
                  type: "article",
                  title: "Descriptive Statistics Explained",
                  url: "https://www.khanacademy.org/math/statistics-probability/summarizing-quantitative-data",
                },
                {
                  type: "video",
                  title: "Statistics Fundamentals",
                  url: "https://www.youtube.com/watch?v=xxpc-HPKN28",
                },
              ],
            },
            {
              id: 2,
              task: "Learn probability distributions (normal, binomial, Poisson)",
              difficulty: "hard",
              resources: [
                {
                  type: "article",
                  title: "Probability Distributions Guide",
                  url: "https://statisticsbyjim.com/basics/probability-distributions/",
                },
                {
                  type: "interactive",
                  title: "Seeing Theory: Probability Distributions",
                  url: "https://seeing-theory.brown.edu/probability-distributions/index.html",
                },
              ],
            },
            {
              id: 3,
              task: "Understand and implement hypothesis testing",
              difficulty: "hard",
              resources: [
                {
                  type: "article",
                  title: "Hypothesis Testing Explained",
                  url: "https://towardsdatascience.com/hypothesis-testing-explained-as-simply-as-possible-6e0a256293cf",
                },
                {
                  type: "video",
                  title: "Hypothesis Testing Tutorial",
                  url: "https://www.youtube.com/watch?v=0oc49DyA3hU",
                },
              ],
            },
            {
              id: 4,
              task: "Learn correlation analysis and causation concepts",
              difficulty: "medium",
              resources: [
                {
                  type: "article",
                  title: "Correlation vs Causation",
                  url: "https://towardsdatascience.com/correlation-vs-causation-data-science-for-business-80436d45e35f",
                },
                {
                  type: "example",
                  title: "Spurious Correlations",
                  url: "https://www.tylervigen.com/spurious-correlations",
                },
              ],
            },
            {
              id: 5,
              task: "Conduct a statistical analysis on a real dataset",
              difficulty: "project",
              resources: [
                {
                  type: "project",
                  title: "Statistical Analysis Project",
                  url: "https://www.kaggle.com/code/artgor/eda-and-statistical-analysis-in-python",
                },
                {
                  type: "tutorial",
                  title: "Statistical Analysis Tutorial",
                  url: "https://realpython.com/python-statistics/",
                },
              ],
            },
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
          description: "Introduction to ML concepts and algorithms",
          items: [
            {
              id: 1,
              task: "Understand supervised vs unsupervised learning paradigms",
              difficulty: "medium",
              resources: [
                {
                  type: "article",
                  title: "ML Learning Types Explained",
                  url: "https://towardsdatascience.com/types-of-machine-learning-algorithms-you-should-know-953a08248861",
                },
                {
                  type: "video",
                  title: "ML Fundamentals",
                  url: "https://www.youtube.com/watch?v=Gv9_4yMHFhI",
                },
              ],
            },
            {
              id: 2,
              task: "Set up scikit-learn and explore its documentation",
              difficulty: "easy",
              resources: [
                {
                  type: "article",
                  title: "Scikit-learn Installation Guide",
                  url: "https://scikit-learn.org/stable/install.html",
                },
                {
                  type: "tutorial",
                  title: "Scikit-learn Beginners Tutorial",
                  url: "https://scikit-learn.org/stable/tutorial/basic/tutorial.html",
                },
              ],
            },
            {
              id: 3,
              task: "Learn about training-test splits and model validation",
              difficulty: "medium",
              resources: [
                {
                  type: "article",
                  title: "Train-Test Split Explained",
                  url: "https://towardsdatascience.com/train-validation-and-test-sets-72cb40cba9e7",
                },
                {
                  type: "tutorial",
                  title: "Cross-Validation Tutorial",
                  url: "https://scikit-learn.org/stable/modules/cross_validation.html",
                },
              ],
            },
            {
              id: 4,
              task: "Implement simple linear regression with scikit-learn",
              difficulty: "medium",
              resources: [
                {
                  type: "project",
                  title: "Linear Regression Project",
                  url: "https://towardsdatascience.com/linear-regression-detailed-view-ea73175f6e86",
                },
                {
                  type: "example",
                  title: "Housing Price Prediction Example",
                  url: "https://www.kaggle.com/code/ashydv/housing-price-prediction-linear-regression",
                },
              ],
            },
            {
              id: 5,
              task: "Evaluate model performance using appropriate metrics",
              difficulty: "medium",
              resources: [
                {
                  type: "article",
                  title: "Regression Metrics Guide",
                  url: "https://scikit-learn.org/stable/modules/model_evaluation.html",
                },
                {
                  type: "tutorial",
                  title: "Model Evaluation Tutorial",
                  url: "https://towardsdatascience.com/metrics-to-evaluate-your-regression-model-18d9e70d9617",
                },
              ],
            },
          ],
        },
        {
          id: "week2",
          title: "Week 2: Classification Algorithms",
          description: "Working with classification techniques",
          items: [
            {
              id: 1,
              task: "Implement logistic regression for binary classification",
              difficulty: "medium",
              resources: [
                {
                  type: "article",
                  title: "Logistic Regression Explained",
                  url: "https://towardsdatascience.com/logistic-regression-detailed-overview-46c4da4303bc",
                },
                {
                  type: "project",
                  title: "Titanic Survival Prediction",
                  url: "https://www.kaggle.com/code/mnassrib/titanic-logistic-regression-with-python",
                },
              ],
            },
            {
              id: 2,
              task: "Learn decision tree classifiers and their visualization",
              difficulty: "medium",
              resources: [
                {
                  type: "article",
                  title: "Decision Trees Guide",
                  url: "https://scikit-learn.org/stable/modules/tree.html",
                },
                {
                  type: "tutorial",
                  title: "Decision Tree Visualization",
                  url: "https://mljar.com/blog/visualize-decision-tree/",
                },
              ],
            },
            {
              id: 3,
              task: "Implement and tune random forest classifiers",
              difficulty: "hard",
              resources: [
                {
                  type: "article",
                  title: "Random Forest Tutorial",
                  url: "https://towardsdatascience.com/random-forest-in-python-24d0893d51c0",
                },
                {
                  type: "project",
                  title: "Random Forest Classification Project",
                  url: "https://www.kaggle.com/code/prashant111/random-forest-classifier-tutorial",
                },
              ],
            },
            {
              id: 4,
              task: "Explore support vector machines for classification",
              difficulty: "hard",
              resources: [
                {
                  type: "article",
                  title: "SVM Explained",
                  url: "https://towardsdatascience.com/support-vector-machine-introduction-to-machine-learning-algorithms-934a444fca47",
                },
                {
                  type: "tutorial",
                  title: "SVM Implementation Tutorial",
                  url: "https://www.datacamp.com/community/tutorials/svm-classification-scikit-learn-python",
                },
              ],
            },
            {
              id: 5,
              task: "Build a complete classification project with real-world data",
              difficulty: "project",
              resources: [
                {
                  type: "project",
                  title: "Credit Card Fraud Detection",
                  url: "https://www.kaggle.com/code/janiobachmann/credit-fraud-dealing-with-imbalanced-datasets",
                },
                {
                  type: "dataset",
                  title: "Classification Datasets",
                  url: "https://archive.ics.uci.edu/ml/datasets.php",
                },
              ],
            },
          ],
        },
        {
          id: "week3",
          title: "Week 3: Regression Algorithms",
          description: "Advanced regression techniques",
          items: [
            {
              id: 1,
              task: "Explore linear regression fundamentals and assumptions",
              difficulty: "medium",
              resources: [
                {
                  type: "article",
                  title: "Linear Regression Assumptions",
                  url: "https://towardsdatascience.com/linear-regression-and-its-assumptions-5de83fbc7d0b",
                },
                {
                  type: "tutorial",
                  title: "Linear Regression Deep Dive",
                  url: "https://www.statsmodels.org/stable/examples/notebooks/generated/ols.html",
                },
              ],
            },
            {
              id: 2,
              task: "Implement polynomial regression for nonlinear relationships",
              difficulty: "medium",
              resources: [
                {
                  type: "article",
                  title: "Polynomial Regression Guide",
                  url: "https://towardsdatascience.com/polynomial-regression-bbe8b9d97491",
                },
                {
                  type: "example",
                  title: "Polynomial Regression Example",
                  url: "https://scikit-learn.org/stable/auto_examples/linear_model/plot_polynomial_interpolation.html",
                },
              ],
            },
            {
              id: 3,
              task: "Learn regularization techniques (Ridge, Lasso, ElasticNet)",
              difficulty: "hard",
              resources: [
                {
                  type: "article",
                  title: "Regularization Explained",
                  url: "https://towardsdatascience.com/regularization-in-machine-learning-76441ddcf99a",
                },
                {
                  type: "tutorial",
                  title: "Ridge and Lasso Regression",
                  url: "https://scikit-learn.org/stable/auto_examples/linear_model/plot_ridge_path.html",
                },
              ],
            },
            {
              id: 4,
              task: "Evaluate regression models with appropriate metrics",
              difficulty: "medium",
              resources: [
                {
                  type: "article",
                  title: "Regression Metrics Guide",
                  url: "https://towardsdatascience.com/what-are-the-best-metrics-to-evaluate-your-regression-model-418ca481755b",
                },
                {
                  type: "tutorial",
                  title: "Model Evaluation Tutorial",
                  url: "https://scikit-learn.org/stable/modules/model_evaluation.html#regression-metrics",
                },
              ],
            },
            {
              id: 5,
              task: "Build a regression analysis project for real-world prediction",
              difficulty: "project",
              resources: [
                {
                  type: "project",
                  title: "House Price Prediction Project",
                  url: "https://www.kaggle.com/c/house-prices-advanced-regression-techniques",
                },
                {
                  type: "example",
                  title: "Regression Project Example",
                  url: "https://www.kaggle.com/code/shreayan98c/house-price-prediction-ridge-and-lasso",
                },
              ],
            },
          ],
        },
        {
          id: "week4",
          title: "Week 4: Clustering & Dimensionality Reduction",
          description: "Unsupervised learning techniques",
          items: [
            {
              id: 1,
              task: "Implement K-means clustering on multi-dimensional data",
              difficulty: "medium",
              resources: [
                {
                  type: "article",
                  title: "K-means Clustering Explained",
                  url: "https://towardsdatascience.com/k-means-clustering-algorithm-applications-evaluation-methods-and-drawbacks-aa03e644b48a",
                },
                {
                  type: "tutorial",
                  title: "K-means Implementation",
                  url: "https://scikit-learn.org/stable/modules/clustering.html#k-means",
                },
              ],
            },
            {
              id: 2,
              task: "Learn hierarchical clustering techniques and visualization",
              difficulty: "medium",
              resources: [
                {
                  type: "article",
                  title: "Hierarchical Clustering Guide",
                  url: "https://towardsdatascience.com/understanding-the-concept-of-hierarchical-clustering-technique-c6e8243758ec",
                },
                {
                  type: "example",
                  title: "Hierarchical Clustering Example",
                  url: "https://scikit-learn.org/stable/auto_examples/cluster/plot_agglomerative_dendrogram.html",
                },
              ],
            },
            {
              id: 3,
              task: "Implement PCA for dimensionality reduction",
              difficulty: "hard",
              resources: [
                {
                  type: "article",
                  title: "PCA Explained",
                  url: "https://towardsdatascience.com/a-one-stop-shop-for-principal-component-analysis-5582fb7e0a9c",
                },
                {
                  type: "tutorial",
                  title: "PCA Implementation",
                  url: "https://scikit-learn.org/stable/modules/decomposition.html#pca",
                },
              ],
            },
            {
              id: 4,
              task: "Explore t-SNE for data visualization and dimensionality reduction",
              difficulty: "hard",
              resources: [
                {
                  type: "article",
                  title: "t-SNE Guide",
                  url: "https://towardsdatascience.com/an-introduction-to-t-sne-with-python-example-5a3a293108d1",
                },
                {
                  type: "tutorial",
                  title: "t-SNE Implementation",
                  url: "https://scikit-learn.org/stable/modules/generated/sklearn.manifold.TSNE.html",
                },
              ],
            },
            {
              id: 5,
              task: "Complete an unsupervised learning project (e.g., customer segmentation)",
              difficulty: "project",
              resources: [
                {
                  type: "project",
                  title: "Customer Segmentation Project",
                  url: "https://www.kaggle.com/code/fabiendaniel/customer-segmentation",
                },
                {
                  type: "dataset",
                  title: "Clustering Datasets",
                  url: "https://archive.ics.uci.edu/ml/datasets.php?format=&task=clu&att=&area=&numAtt=&numIns=&type=&sort=nameUp&view=table",
                },
              ],
            },
          ],
        },
        {
          id: "week5",
          title: "Week 5: Model Evaluation",
          description: "Comprehensive model assessment techniques",
          items: [
            {
              id: 1,
              task: "Implement cross-validation strategies",
              difficulty: "medium",
              resources: [
                {
                  type: "article",
                  title: "Cross-validation Guide",
                  url: "https://towardsdatascience.com/cross-validation-explained-evaluating-estimator-performance-e51e5430ff85",
                },
                {
                  type: "tutorial",
                  title: "Cross-validation Implementation",
                  url: "https://scikit-learn.org/stable/modules/cross_validation.html",
                },
              ],
            },
            {
              id: 2,
              task: "Master classification metrics (precision, recall, F1-score)",
              difficulty: "medium",
              resources: [
                {
                  type: "article",
                  title: "Classification Metrics Explained",
                  url: "https://towardsdatascience.com/accuracy-precision-recall-or-f1-331fb37c5cb9",
                },
                {
                  type: "tutorial",
                  title: "Classification Report Tutorial",
                  url: "https://scikit-learn.org/stable/modules/generated/sklearn.metrics.classification_report.html",
                },
              ],
            },
            {
              id: 3,
              task: "Understand and plot ROC curves and calculate AUC",
              difficulty: "medium",
              resources: [
                {
                  type: "article",
                  title: "ROC and AUC Explained",
                  url: "https://towardsdatascience.com/understanding-auc-roc-curve-68b2303cc9c5",
                },
                {
                  type: "example",
                  title: "ROC Curve Example",
                  url: "https://scikit-learn.org/stable/auto_examples/model_selection/plot_roc.html",
                },
              ],
            },
            {
              id: 4,
              task: "Implement hyperparameter tuning techniques",
              difficulty: "hard",
              resources: [
                {
                  type: "article",
                  title: "Hyperparameter Tuning Guide",
                  url: "https://towardsdatascience.com/hyperparameter-tuning-explained-d0ebb2ba1d35",
                },
                {
                  type: "tutorial",
                  title: "GridSearchCV Tutorial",
                  url: "https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.GridSearchCV.html",
                },
              ],
            },
            {
              id: 5,
              task: "Create a comprehensive model evaluation report",
              difficulty: "project",
              resources: [
                {
                  type: "project",
                  title: "Model Evaluation Project",
                  url: "https://www.kaggle.com/code/sudhirnl7/model-evaluation-metrics",
                },
                {
                  type: "example",
                  title: "Model Comparison Example",
                  url: "https://scikit-learn.org/stable/auto_examples/classification/plot_classifier_comparison.html",
                },
              ],
            },
          ],
        },
        {
          id: "week6",
          title: "Week 6: Feature Engineering",
          description: "Creating and optimizing features",
          items: [
            {
              id: 1,
              task: "Learn feature scaling techniques (StandardScaler, MinMaxScaler)",
              difficulty: "medium",
              resources: [
                {
                  type: "article",
                  title: "Feature Scaling Guide",
                  url: "https://towardsdatascience.com/all-about-feature-scaling-bcc0ad75cb35",
                },
                {
                  type: "tutorial",
                  title: "Preprocessing Tutorial",
                  url: "https://scikit-learn.org/stable/modules/preprocessing.html",
                },
              ],
            },
            {
              id: 2,
              task: "Implement encoding techniques for categorical variables",
              difficulty: "medium",
              resources: [
                {
                  type: "article",
                  title: "Categorical Encoding Guide",
                  url: "https://towardsdatascience.com/understanding-feature-engineering-part-2-categorical-data-d26d61bc70d",
                },
                {
                  type: "tutorial",
                  title: "OneHotEncoder Tutorial",
                  url: "https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.OneHotEncoder.html",
                },
              ],
            },
            {
              id: 3,
              task: "Practice feature selection methods",
              difficulty: "hard",
              resources: [
                {
                  type: "article",
                  title: "Feature Selection Guide",
                  url: "https://towardsdatascience.com/a-feature-selection-tool-for-machine-learning-in-python-b64dd23710f0",
                },
                {
                  type: "tutorial",
                  title: "Feature Selection Tutorial",
                  url: "https://scikit-learn.org/stable/modules/feature_selection.html",
                },
              ],
            },
            {
              id: 4,
              task: "Learn to create new features from existing ones",
              difficulty: "medium",
              resources: [
                {
                  type: "article",
                  title: "Feature Creation Guide",
                  url: "https://towardsdatascience.com/feature-engineering-for-machine-learning-3a5e293a5114",
                },
                {
                  type: "tutorial",
                  title: "Feature Engineering Tutorial",
                  url: "https://www.kaggle.com/code/gunesevitan/advanced-feature-engineering-tutorial-with-python",
                },
              ],
            },
            {
              id: 5,
              task: "Complete a feature engineering project",
              difficulty: "project",
              resources: [
                {
                  type: "project",
                  title: "Feature Engineering Project",
                  url: "https://www.kaggle.com/code/prashant111/extensive-feature-engineering-tutorial",
                },
                {
                  type: "example",
                  title: "Feature Selection Example",
                  url: "https://www.kaggle.com/code/ryanholbrook/feature-engineering-for-house-prices",
                },
              ],
            },
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
          description: "Introduction to neural networks and deep learning",
          items: [
            {
              id: 1,
              task: "Set up TensorFlow/Keras environment",
              difficulty: "medium",
              resources: [
                {
                  type: "article",
                  title: "TensorFlow Installation Guide",
                  url: "https://www.tensorflow.org/install",
                },
                {
                  type: "tutorial",
                  title: "Keras Getting Started",
                  url: "https://keras.io/getting_started/",
                },
              ],
            },
            {
              id: 2,
              task: "Learn neural network architecture basics",
              difficulty: "medium",
              resources: [
                {
                  type: "article",
                  title: "Neural Networks Explained",
                  url: "https://towardsdatascience.com/how-to-build-your-own-neural-network-from-scratch-in-python-68998a08e4f6",
                },
                {
                  type: "video",
                  title: "Neural Networks Visualization",
                  url: "https://www.youtube.com/watch?v=aircAruvnKk",
                },
              ],
            },
            {
              id: 3,
              task: "Understand activation functions and their purposes",
              difficulty: "medium",
              resources: [
                {
                  type: "article",
                  title: "Activation Functions Guide",
                  url: "https://towardsdatascience.com/activation-functions-neural-networks-1cbd9f8d91d6",
                },
                {
                  type: "tutorial",
                  title: "Activation Functions Tutorial",
                  url: "https://machinelearningmastery.com/choose-an-activation-function-for-deep-learning/",
                },
              ],
            },
            {
              id: 4,
              task: "Build a simple neural network with Keras",
              difficulty: "hard",
              resources: [
                {
                  type: "article",
                  title: "Keras Sequential API",
                  url: "https://keras.io/guides/sequential_model/",
                },
                {
                  type: "tutorial",
                  title: "Simple Neural Network Tutorial",
                  url: "https://machinelearningmastery.com/tutorial-first-neural-network-python-keras/",
                },
              ],
            },
            {
              id: 5,
              task: "Create a basic image classifier using deep learning",
              difficulty: "project",
              resources: [
                {
                  type: "project",
                  title: "MNIST Image Classification",
                  url: "https://www.tensorflow.org/tutorials/keras/classification",
                },
                {
                  type: "example",
                  title: "Image Classification with CNN",
                  url: "https://www.kaggle.com/code/kanncaa1/convolutional-neural-network-cnn-tutorial",
                },
              ],
            },
          ],
        },
        {
          id: "week2",
          title: "Week 2: Natural Language Processing",
          description: "Working with text data and language models",
          items: [
            {
              id: 1,
              task: "Learn text preprocessing techniques for NLP",
              difficulty: "medium",
              resources: [
                {
                  type: "article",
                  title: "NLP Preprocessing Guide",
                  url: "https://towardsdatascience.com/nlp-preprocessing-with-nltk-3c04ee00edc0",
                },
                {
                  type: "tutorial",
                  title: "NLTK Tutorial",
                  url: "https://www.nltk.org/book/",
                },
              ],
            },
            {
              id: 2,
              task: "Understand tokenization, stemming, and lemmatization",
              difficulty: "medium",
              resources: [
                {
                  type: "article",
                  title: "Tokenization Explained",
                  url: "https://www.analyticsvidhya.com/blog/2020/05/what-is-tokenization-nlp/",
                },
                {
                  type: "tutorial",
                  title: "Stemming vs Lemmatization",
                  url: "https://www.datacamp.com/community/tutorials/stemming-lemmatization-python",
                },
              ],
            },
            {
              id: 3,
              task: "Implement text vectorization (Bag of Words, TF-IDF)",
              difficulty: "medium",
              resources: [
                {
                  type: "article",
                  title: "Text Vectorization Guide",
                  url: "https://towardsdatascience.com/3-basic-approaches-in-bag-of-words-which-are-better-than-word-embeddings-c2cbc7398016",
                },
                {
                  type: "tutorial",
                  title: "TF-IDF Implementation",
                  url: "https://scikit-learn.org/stable/modules/generated/sklearn.feature_extraction.text.TfidfVectorizer.html",
                },
              ],
            },
            {
              id: 4,
              task: "Build a sentiment analysis model",
              difficulty: "hard",
              resources: [
                {
                  type: "article",
                  title: "Sentiment Analysis Guide",
                  url: "https://towardsdatascience.com/sentiment-analysis-concept-analysis-and-applications-6c94d6f58c17",
                },
                {
                  type: "project",
                  title: "Sentiment Analysis Project",
                  url: "https://www.kaggle.com/code/stoicstatic/twitter-sentiment-analysis-for-beginners",
                },
              ],
            },
            {
              id: 5,
              task: "Complete an NLP project (text classification/summarization)",
              difficulty: "project",
              resources: [
                {
                  type: "project",
                  title: "Text Classification Project",
                  url: "https://www.kaggle.com/code/itachi9604/text-classification-using-cnn",
                },
                {
                  type: "dataset",
                  title: "NLP Datasets",
                  url: "https://github.com/niderhoff/nlp-datasets",
                },
              ],
            },
          ],
        },
        {
          id: "week3",
          title: "Week 3: Time Series Analysis",
          description: "Analyzing and forecasting sequential data",
          items: [
            {
              id: 1,
              task: "Learn time series components and visualization",
              difficulty: "medium",
              resources: [
                {
                  type: "article",
                  title: "Time Series Components",
                  url: "https://towardsdatascience.com/time-series-decomposition-and-statsmodels-parameters-69e54d035453",
                },
                {
                  type: "tutorial",
                  title: "Time Series Visualization",
                  url: "https://pandas.pydata.org/pandas-docs/stable/user_guide/visualization.html#visualization-basic",
                },
              ],
            },
            {
              id: 2,
              task: "Implement moving averages and exponential smoothing",
              difficulty: "medium",
              resources: [
                {
                  type: "article",
                  title: "Moving Averages Explained",
                  url: "https://towardsdatascience.com/moving-averages-in-python-16170e20f6c",
                },
                {
                  type: "tutorial",
                  title: "Exponential Smoothing Tutorial",
                  url: "https://machinelearningmastery.com/exponential-smoothing-for-time-series-forecasting-in-python/",
                },
              ],
            },
            {
              id: 3,
              task: "Learn and apply ARIMA/SARIMA models",
              difficulty: "hard",
              resources: [
                {
                  type: "article",
                  title: "ARIMA Models Guide",
                  url: "https://towardsdatascience.com/time-series-forecasting-arima-models-7f221e9eee06",
                },
                {
                  type: "tutorial",
                  title: "SARIMA Implementation",
                  url: "https://www.statsmodels.org/stable/examples/notebooks/generated/statespace_sarimax_stata.html",
                },
              ],
            },
            {
              id: 4,
              task: "Understand and implement seasonal decomposition",
              difficulty: "hard",
              resources: [
                {
                  type: "article",
                  title: "Seasonal Decomposition Guide",
                  url: "https://towardsdatascience.com/time-series-decomposition-93aee55ccce4",
                },
                {
                  type: "tutorial",
                  title: "Seasonal Decomposition Tutorial",
                  url: "https://www.statsmodels.org/stable/generated/statsmodels.tsa.seasonal.seasonal_decompose.html",
                },
              ],
            },
            {
              id: 5,
              task: "Complete a time series forecasting project",
              difficulty: "project",
              resources: [
                {
                  type: "project",
                  title: "Stock Price Prediction Project",
                  url: "https://www.kaggle.com/code/faressayah/stock-market-analysis-prediction-using-lstm",
                },
                {
                  type: "dataset",
                  title: "Time Series Datasets",
                  url: "https://github.com/AileenNielsen/TimeSeriesAnalysisWithPython",
                },
              ],
            },
          ],
        },
        {
          id: "week4",
          title: "Week 4: Data Engineering Basics",
          description: "Building data pipelines and storage solutions",
          items: [
            {
              id: 1,
              task: "Learn ETL (Extract, Transform, Load) concepts",
              difficulty: "medium",
              resources: [
                {
                  type: "article",
                  title: "ETL Process Explained",
                  url: "https://www.ibm.com/cloud/learn/etl",
                },
                {
                  type: "tutorial",
                  title: "ETL with Python",
                  url: "https://towardsdatascience.com/build-your-own-etl-85579e734be8",
                },
              ],
            },
            {
              id: 2,
              task: "Set up a simple data pipeline",
              difficulty: "medium",
              resources: [
                {
                  type: "article",
                  title: "Data Pipelines with Python",
                  url: "https://towardsdatascience.com/data-pipelines-luigi-airflow-everything-you-need-to-know-18dc741449b7",
                },
                {
                  type: "tutorial",
                  title: "Simple ETL Pipeline",
                  url: "https://www.analyticsvidhya.com/blog/2019/01/simple-guide-data-wrangling-python/",
                },
              ],
            },
            {
              id: 3,
              task: "Learn about data storage solutions (SQL vs NoSQL)",
              difficulty: "medium",
              resources: [
                {
                  type: "article",
                  title: "SQL vs NoSQL Guide",
                  url: "https://www.mongodb.com/nosql-explained/nosql-vs-sql",
                },
                {
                  type: "tutorial",
                  title: "Database Selection Tutorial",
                  url: "https://www.digitalocean.com/community/tutorials/understanding-sql-and-nosql-databases-and-different-database-models",
                },
              ],
            },
            {
              id: 4,
              task: "Implement data quality checks and validations",
              difficulty: "hard",
              resources: [
                {
                  type: "article",
                  title: "Data Quality Guide",
                  url: "https://towardsdatascience.com/data-quality-dimensions-for-ml-models-dab8f048df9a",
                },
                {
                  type: "tutorial",
                  title: "Data Validation Tutorial",
                  url: "https://www.tensorflow.org/tfx/tutorials/data_validation/tfdv_basic",
                },
              ],
            },
            {
              id: 5,
              task: "Build an automated data pipeline for a dataset",
              difficulty: "project",
              resources: [
                {
                  type: "project",
                  title: "ETL Pipeline Project",
                  url: "https://towardsdatascience.com/create-an-etl-pipeline-in-python-with-pandas-in-10-minutes-6be436483ec9",
                },
                {
                  type: "example",
                  title: "Data Pipeline Example",
                  url: "https://github.com/damiansp/completePython/tree/master/dataPipelines",
                },
              ],
            },
          ],
        },
        {
          id: "week5",
          title: "Week 5: Model Deployment",
          description: "Taking ML models to production",
          items: [
            {
              id: 1,
              task: "Learn model serialization techniques",
              difficulty: "medium",
              resources: [
                {
                  type: "article",
                  title: "Model Serialization Guide",
                  url: "https://machinelearningmastery.com/save-load-machine-learning-models-python-scikit-learn/",
                },
                {
                  type: "tutorial",
                  title: "Pickle and Joblib Tutorial",
                  url: "https://scikit-learn.org/stable/modules/model_persistence.html",
                },
              ],
            },
            {
              id: 2,
              task: "Understand API development basics",
              difficulty: "medium",
              resources: [
                {
                  type: "article",
                  title: "REST API Guide",
                  url: "https://www.ibm.com/cloud/learn/rest-apis",
                },
                {
                  type: "tutorial",
                  title: "API Development Tutorial",
                  url: "https://realpython.com/api-integration-in-python/",
                },
              ],
            },
            {
              id: 3,
              task: "Set up a model serving API with Flask or FastAPI",
              difficulty: "hard",
              resources: [
                {
                  type: "article",
                  title: "Flask API Tutorial",
                  url: "https://towardsdatascience.com/creating-restful-apis-using-flask-and-python-655bad51b24",
                },
                {
                  type: "tutorial",
                  title: "FastAPI Guide",
                  url: "https://fastapi.tiangolo.com/tutorial/first-steps/",
                },
              ],
            },
            {
              id: 4,
              task: "Learn Docker containerization basics",
              difficulty: "hard",
              resources: [
                {
                  type: "article",
                  title: "Docker for ML Models",
                  url: "https://towardsdatascience.com/how-to-deploy-machine-learning-models-as-a-microservice-using-docker-containers-d77f6d1ce6ab",
                },
                {
                  type: "tutorial",
                  title: "Docker Tutorial",
                  url: "https://www.docker.com/101-tutorial/",
                },
              ],
            },
            {
              id: 5,
              task: "Deploy a ML model as a web service",
              difficulty: "project",
              resources: [
                {
                  type: "project",
                  title: "Model Deployment Project",
                  url: "https://www.analyticsvidhya.com/blog/2020/04/how-to-deploy-machine-learning-model-flask/",
                },
                {
                  type: "example",
                  title: "ML Model API Example",
                  url: "https://github.com/amirziai/sklearnflask",
                },
              ],
            },
          ],
        },
        {
          id: "week6",
          title: "Week 6: Capstone Project",
          description: "Building a complete data science solution",
          items: [
            {
              id: 1,
              task: "Define project scope, objectives, and deliverables",
              difficulty: "medium",
              resources: [
                {
                  type: "article",
                  title: "Data Science Project Planning",
                  url: "https://towardsdatascience.com/data-science-project-planning-9d617e9a0733",
                },
                {
                  type: "template",
                  title: "Project Proposal Template",
                  url: "https://www.smartsheet.com/free-project-proposal-templates",
                },
              ],
            },
            {
              id: 2,
              task: "Collect and prepare data for your capstone project",
              difficulty: "hard",
              resources: [
                {
                  type: "article",
                  title: "Data Collection Guide",
                  url: "https://towardsdatascience.com/data-collection-for-data-science-project-part-1-ef22c3e954c2",
                },
                {
                  type: "dataset",
                  title: "Kaggle Datasets",
                  url: "https://www.kaggle.com/datasets",
                },
              ],
            },
            {
              id: 3,
              task: "Build and evaluate multiple models for your project",
              difficulty: "hard",
              resources: [
                {
                  type: "article",
                  title: "Model Selection Guide",
                  url: "https://towardsdatascience.com/logistic-regression-or-random-forest-1c0c5b3b00e6",
                },
                {
                  type: "tutorial",
                  title: "Model Evaluation Tutorial",
                  url: "https://www.kdnuggets.com/2018/03/comprehensive-guide-model-selection.html",
                },
              ],
            },
            {
              id: 4,
              task: "Create data visualizations and extract insights",
              difficulty: "medium",
              resources: [
                {
                  type: "article",
                  title: "Data Visualization Best Practices",
                  url: "https://towardsdatascience.com/10-simple-rules-for-better-figures-1709dfb077c",
                },
                {
                  type: "tutorial",
                  title: "Interactive Visualization Tutorial",
                  url: "https://plotly.com/python/plotly-express/",
                },
              ],
            },
            {
              id: 5,
              task: "Prepare a final presentation and documentation",
              difficulty: "project",
              resources: [
                {
                  type: "article",
                  title: "Data Science Presentation Guide",
                  url: "https://towardsdatascience.com/presenting-data-science-a-guide-for-presentations-and-meetings-d63517485e6b",
                },
                {
                  type: "example",
                  title: "GitHub Portfolio Example",
                  url: "https://github.com/sajal2692/data-science-portfolio",
                },
              ],
            },
          ],
        },
      ],
    },
  };
  // Find the next uncompleted task
  const findNextTask = () => {
    // Start by looking in the active phase
    const phases = Object.keys(journeyData);

    // First try to find a task in the active phase
    const activePhaseWeeks = journeyData[activePhase]?.weeks || [];
    for (const week of activePhaseWeeks) {
      for (const item of week.items) {
        const itemKey = `${activePhase}-${week.id}-${item.id}`;
        if (!progressData[itemKey]) {
          return {
            task: item,
            week: week,
            phase: journeyData[activePhase],
            phaseKey: activePhase,
          };
        }
      }
    }

    // If no uncompleted task in active phase, find the first uncompleted task in any phase
    for (const phaseKey of phases) {
      const phase = journeyData[phaseKey];
      for (const week of phase.weeks) {
        for (const item of week.items) {
          const itemKey = `${phaseKey}-${week.id}-${item.id}`;
          if (!progressData[itemKey]) {
            return {
              task: item,
              week: week,
              phase: phase,
              phaseKey: phaseKey,
            };
          }
        }
      }
    }

    // If all tasks are completed, return the last task
    const lastPhaseKey = phases[phases.length - 1];
    const lastPhase = journeyData[lastPhaseKey];
    const lastWeek = lastPhase.weeks[lastPhase.weeks.length - 1];
    const lastItem = lastWeek.items[lastWeek.items.length - 1];

    return {
      task: lastItem,
      week: lastWeek,
      phase: lastPhase,
      phaseKey: lastPhaseKey,
      completed: true,
    };
  };

  const nextTask = findNextTask();
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
        </nav>{" "}
        <div className="container mx-auto px-2 sm:px-4 lg:px-8 py-4 sm:py-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-6 sm:mb-8">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Your Data Science Learning Journey
              </h1>
              <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto px-2">
                Track your progress through each phase of the data science
                curriculum. Check off items as you complete them.
              </p>
            </div>{" "}
            {/* Overall Progress Card */}
            <div className="mb-6 sm:mb-8 bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6">
              {" "}
              <div className="flex flex-col sm:flex-row sm:justify-between mb-4 gap-2">
                <div>
                  <h2 className="text-base sm:text-lg font-semibold flex items-center">
                    Overall Progress
                    <span className="ml-2 text-indigo-600 text-xs font-bold py-0.5 px-1.5 bg-indigo-50 rounded-md">
                      {totalProgress.percentage}%
                    </span>
                  </h2>
                  {(() => {
                    const now = moment();
                    const startDate = moment(journeyStartDate);
                    const isUpcoming = now.isBefore(startDate);

                    if (isUpcoming) {
                      const daysToStart = startDate.diff(now, "days");
                      return (
                        <p className="text-xs text-orange-600 mt-1 font-medium flex items-center">
                          <svg
                            className="w-3.5 h-3.5 mr-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                          </svg>
                          Journey begins in {daysToStart} days (
                          {formatDate(journeyStartDate)})
                        </p>
                      );
                    } else {
                      const weeksPassed = now.diff(startDate, "weeks");
                      const totalWeeks = Object.values(journeyData).reduce(
                        (acc, phase) => acc + phase.weeks.length,
                        0
                      );
                      const weeksRemaining = Math.max(
                        0,
                        totalWeeks - weeksPassed
                      );

                      return (
                        <p className="text-xs text-gray-500 mt-1">
                          <span className="font-medium">
                            Started on {formatDate(journeyStartDate)}
                          </span>
                          <span className="mx-1">•</span>
                          <span>
                            {weeksPassed} {weeksPassed === 1 ? "week" : "weeks"}{" "}
                            in, {weeksRemaining}{" "}
                            {weeksRemaining === 1 ? "week" : "weeks"} remaining
                          </span>
                        </p>
                      );
                    }
                  })()}
                </div>
                <div className="flex flex-wrap gap-3">
                  <div className="text-xs flex flex-col items-center justify-center border border-gray-200 rounded-lg px-3 py-2 bg-gray-50">
                    <span className="font-semibold text-lg text-indigo-600">
                      {totalProgress.completed}
                    </span>
                    <span className="text-gray-600">Tasks Done</span>
                  </div>
                  <div className="text-xs flex flex-col items-center justify-center border border-gray-200 rounded-lg px-3 py-2 bg-gray-50">
                    <span className="font-semibold text-lg text-blue-600">
                      {totalProgress.total}
                    </span>
                    <span className="text-gray-600">Total Tasks</span>
                  </div>
                  <div className="text-xs flex flex-col items-center justify-center border border-gray-200 rounded-lg px-3 py-2 bg-gray-50 relative overflow-hidden">
                    <div
                      className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-green-500 to-blue-500"
                      style={{ width: `${totalProgress.percentage}%` }}
                    ></div>
                    <span className="font-semibold text-lg text-green-600">
                      {totalProgress.percentage}%
                    </span>
                    <span className="text-gray-600">Completion</span>
                  </div>
                </div>
              </div>{" "}
              {/* Progress bar */}
              <div className="w-full bg-gray-200 rounded-full h-3 sm:h-4 overflow-hidden mb-2 relative">
                <div
                  className="bg-gradient-to-r from-indigo-600 to-blue-500 h-3 sm:h-4 rounded-full transition-all duration-500"
                  style={{ width: `${totalProgress.percentage}%` }}
                ></div>
                {/* Progress milestones */}
                {[25, 50, 75].map((milestone) => (
                  <div
                    key={milestone}
                    className={`absolute top-0 bottom-0 w-px bg-white opacity-70 ${
                      totalProgress.percentage >= milestone
                        ? "border-r border-white"
                        : ""
                    }`}
                    style={{ left: `${milestone}%` }}
                  >
                    {totalProgress.percentage >= milestone && (
                      <div className="absolute -top-7 transform -translate-x-1/2 bg-indigo-100 text-indigo-800 text-xs font-medium px-1.5 py-0.5 rounded">
                        {milestone}%
                      </div>
                    )}
                  </div>
                ))}
              </div>
              {/* Next Task Recommendation */}
              <div className="mt-4 p-4 border border-indigo-100 bg-indigo-50 rounded-lg">
                <h3 className="text-sm font-medium text-indigo-800 mb-2">
                  {nextTask.completed
                    ? "All Tasks Completed! 🎉"
                    : "Next Recommended Task:"}
                </h3>
                {!nextTask.completed ? (
                  <div className="flex items-start">
                    <div className="bg-white rounded-lg p-3 flex-grow shadow-sm border border-indigo-100">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-gray-800">
                          {nextTask.task.task}
                        </span>
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full capitalize 
                          ${
                            nextTask.task.difficulty === "easy"
                              ? "bg-green-100 text-green-800"
                              : nextTask.task.difficulty === "medium"
                              ? "bg-yellow-100 text-yellow-800"
                              : nextTask.task.difficulty === "hard"
                              ? "bg-red-100 text-red-800"
                              : "bg-purple-100 text-purple-800"
                          }`}
                        >
                          {nextTask.task.difficulty}
                        </span>
                      </div>
                      <div className="text-xs text-gray-600">
                        <span className="font-medium">
                          {nextTask.phase.title}
                        </span>{" "}
                        &rarr; {nextTask.week.title}
                      </div>
                      <button
                        className="mt-2 text-xs bg-indigo-600 hover:bg-indigo-700 text-white py-1 px-3 rounded flex items-center"
                        onClick={() => {
                          setActivePhase(nextTask.phaseKey);
                          setOpenWeeks((prev) => ({
                            ...prev,
                            [`${nextTask.phaseKey}-${nextTask.week.id}`]: true,
                          }));
                          // Scroll to that week
                          setTimeout(() => {
                            const weekElement = document.getElementById(
                              `week-${nextTask.phaseKey}-${nextTask.week.id}`
                            );
                            if (weekElement) {
                              weekElement.scrollIntoView({
                                behavior: "smooth",
                                block: "center",
                              });
                            }
                          }, 100);
                        }}
                      >
                        <svg
                          className="w-3 h-3 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                          ></path>
                        </svg>
                        Go to Task
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="text-sm text-indigo-700">
                    Congratulations on completing all tasks in your data science
                    journey! Consider revisiting difficult concepts or exploring
                    additional resources.
                  </div>
                )}
              </div>{" "}
              {/* Phase timeline visualization */}
              <div className="mt-4 flex items-center justify-between">
                {Object.keys(journeyData).map((phaseKey, index) => {
                  const phase = journeyData[phaseKey];
                  const progress = calculatePhaseProgress(phaseKey);
                  const isActive = activePhase === phaseKey;

                  // Get the first and last date for timeline display
                  const firstWeek = phase.weeks[0];
                  const finalWeek = phase.weeks[phase.weeks.length - 1];
                  const firstWeekDate = getWeekDates(phaseKey, firstWeek.id);
                  const lastWeekDate = getWeekDates(phaseKey, finalWeek.id);
                  // Calculate time remaining
                  const now = moment();
                  const endDate = moment(lastWeekDate.endDate, "MMM D, YYYY");
                  const isUpcoming = now.isBefore(
                    moment(firstWeekDate.startDate, "MMM D, YYYY")
                  );
                  const isComplete = progress.percentage === 100;

                  // Display status
                  let statusText = "";
                  let statusClass = "";

                  if (isComplete) {
                    statusText = "Completed";
                    statusClass = "text-green-600";
                  } else if (isUpcoming) {
                    statusText = "Coming soon";
                    statusClass = "text-blue-600";
                  } else {
                    // Calculate days remaining
                    const daysRemaining = endDate.diff(now, "days");
                    statusText = `${daysRemaining} days left`;
                    statusClass = "text-orange-600";
                  }

                  return (
                    <div
                      key={phaseKey}
                      className={`flex-1 text-center ${
                        index > 0 ? "ml-1" : ""
                      }`}
                      onClick={() => setActivePhase(phaseKey)}
                    >
                      <button
                        className={`w-full cursor-pointer transition-all duration-200 py-1 px-2 rounded-lg ${
                          isActive
                            ? `bg-${phase.color}-100 text-${phase.color}-700`
                            : "hover:bg-gray-100"
                        }`}
                      >
                        <div className="flex flex-col items-center">
                          <span className="font-medium text-xs hidden sm:block">
                            {phase.title}
                          </span>
                          <span className="text-xs sm:hidden">
                            {phase.title.split(" ")[0]}
                          </span>
                          <div className="w-full mt-1 h-1 bg-gray-200 rounded">
                            <div
                              style={{ width: `${progress.percentage}%` }}
                              className={`h-1 rounded bg-${phase.color}-500`}
                            ></div>
                          </div>
                          <div className="flex justify-between w-full text-xs mt-1">
                            <span>{firstWeekDate.startDate.split(",")[0]}</span>
                            <span className={statusClass + " font-medium"}>
                              {statusText}
                            </span>
                          </div>
                        </div>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* Phase Tabs */}
            <div className="sticky top-16 z-40 bg-gray-50 border-b border-gray-200 mb-4 sm:mb-6 -mx-2 px-2">
              <div className="overflow-x-auto no-scrollbar">
                <nav className="flex space-x-2 sm:space-x-8 min-w-max pb-1">
                  {Object.keys(journeyData).map((phaseKey) => {
                    const phase = journeyData[phaseKey];
                    const progress = calculatePhaseProgress(phaseKey);
                    const isActive = activePhase === phaseKey;
                    return (
                      <button
                        key={phaseKey}
                        onClick={() => setActivePhase(phaseKey)}
                        className={`whitespace-nowrap py-2 sm:py-3 px-3 sm:px-4 rounded-t-lg font-medium text-xs sm:text-sm focus:outline-none transition-colors duration-200 border-b-2 ${
                          isActive
                            ? `border-${phase.color}-600 text-${phase.color}-700 bg-white shadow`
                            : `border-transparent text-gray-600 hover:text-${phase.color}-600 hover:border-${phase.color}-400`
                        }`}
                      >
                        {phase.title}
                        <span
                          className={`ml-1 sm:ml-2 py-0.5 px-1.5 sm:px-2 rounded-full text-xs bg-${phase.color}-100 text-${phase.color}-800`}
                        >
                          {progress.percentage}%
                        </span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>{" "}
            {/* Content for active phase only */}
            {(() => {
              const phaseKey = activePhase;
              const phase = journeyData[phaseKey];
              return (
                <div key={phaseKey} id={phaseKey} className="mb-8 sm:mb-12">
                  {" "}
                  <div className="flex flex-col sm:items-stretch mb-4 sm:mb-6 gap-2 bg-white p-4 sm:p-6 rounded-lg shadow-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      {" "}
                      <div>
                        <h2
                          className={`text-xl sm:text-2xl font-bold text-${phase.color}-600`}
                        >
                          {phase.title}
                        </h2>
                        <p className="text-sm sm:text-base text-gray-600">
                          {phase.description}
                        </p>
                      </div>
                      <div
                        className={`text-${phase.color}-600 font-semibold text-sm sm:text-base bg-${phase.color}-50 py-1 px-3 rounded-full mt-2 sm:mt-0 inline-flex items-center`}
                      >
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {calculatePhaseProgress(phaseKey).percentage}% complete
                      </div>
                    </div>
                    {/* Phase date information */}{" "}
                    {(() => {
                      const firstWeek = phase.weeks[0];
                      const finalWeek = phase.weeks[phase.weeks.length - 1];
                      const firstWeekDate = getWeekDates(
                        phaseKey,
                        firstWeek.id
                      );
                      const lastWeekDate = getWeekDates(phaseKey, finalWeek.id);

                      return (
                        <div className="mt-4 flex flex-wrap gap-3 text-sm text-gray-600">
                          <div className="flex items-center">
                            <svg
                              className="w-4 h-4 mr-1 text-gray-500"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                            <span className="font-medium">Timeline:</span>
                            <span className="ml-1">
                              {firstWeekDate.startDate} - {lastWeekDate.endDate}
                            </span>
                          </div>

                          <div className="flex items-center">
                            <svg
                              className="w-4 h-4 mr-1 text-gray-500"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <span className="font-medium">Duration:</span>
                            <span className="ml-1">
                              {phase.weeks.length} weeks
                            </span>
                          </div>

                          <div className="flex items-center">
                            <svg
                              className="w-4 h-4 mr-1 text-gray-500"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                              />
                            </svg>
                            <span className="font-medium">Tasks:</span>
                            <span className="ml-1">
                              {calculatePhaseProgress(phaseKey).completed}/
                              {calculatePhaseProgress(phaseKey).total} completed
                            </span>
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                  {/* Weeks within the phase */}{" "}
                  <div className="space-y-4 sm:space-y-6">
                    {phase.weeks.map((week) => {
                      const weekOpen =
                        openWeeks[`${phaseKey}-${week.id}`] ?? true;
                      return (
                        <div
                          key={week.id}
                          id={`week-${phaseKey}-${week.id}`}
                          className="bg-white rounded-lg sm:rounded-2xl shadow-lg overflow-hidden border border-gray-100"
                        >
                          {" "}
                          <button
                            className={`w-full flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-${phase.color}-500 to-${phase.color}-600 focus:outline-none group`}
                            onClick={() => toggleWeek(phaseKey, week.id)}
                            aria-expanded={weekOpen}
                          >
                            <div className="flex flex-col text-left flex-1 mr-2">
                              <h3 className="text-black font-semibold text-sm sm:text-lg flex items-center">
                                {week.title}
                                {/* Week Date Badge */}
                                {(() => {
                                  const weekDates = getWeekDates(
                                    phaseKey,
                                    week.id
                                  );
                                  return (
                                    <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-white bg-opacity-80 text-black">
                                      {weekDates.startDate.split(",")[0]}
                                    </span>
                                  );
                                })()}
                              </h3>
                              <p className="text-black text-opacity-90 text-xs sm:text-sm line-clamp-2">
                                {week.description}
                              </p>
                            </div>
                            <span className="ml-2 sm:ml-4 flex-shrink-0">
                              <svg
                                className={`w-5 h-5 sm:w-6 sm:h-6 text-black transform transition-transform duration-300 ${
                                  weekOpen ? "rotate-90" : "rotate-0"
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </span>
                          </button>
                          {weekOpen && (
                            <div className="p-3 sm:p-6">
                              {/* Week dates */}
                              <div className="mb-4 text-sm text-gray-600 flex items-center">
                                <svg
                                  className="w-4 h-4 mr-1"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                  />
                                </svg>
                                <span>
                                  {(() => {
                                    const weekDates = getWeekDates(
                                      phaseKey,
                                      week.id
                                    );
                                    return `${weekDates.startDate} - ${weekDates.endDate}`;
                                  })()}
                                </span>
                              </div>

                              <ul className="space-y-4 sm:space-y-6">
                                {week.items.map((item) => {
                                  const isCompleted =
                                    progressData[
                                      `${phaseKey}-${week.id}-${item.id}`
                                    ];

                                  // Determine difficulty badge color
                                  const difficultyColors = {
                                    easy: "bg-green-100 text-green-800",
                                    medium: "bg-yellow-100 text-yellow-800",
                                    hard: "bg-red-100 text-red-800",
                                    project: "bg-purple-100 text-purple-800",
                                  };

                                  const difficultyColor =
                                    difficultyColors[item.difficulty] ||
                                    "bg-gray-100 text-gray-800";

                                  return (
                                    <li
                                      key={item.id}
                                      className="border border-gray-100 rounded-lg shadow-sm p-3 sm:p-4"
                                    >
                                      <div className="flex items-start sm:items-center">
                                        <label className="flex items-start sm:items-center cursor-pointer group">
                                          <span
                                            className={`relative flex items-center justify-center mr-2 sm:mr-3 mt-0.5 sm:mt-0 flex-shrink-0`}
                                          >
                                            <input
                                              type="checkbox"
                                              checked={isCompleted || false}
                                              onChange={() =>
                                                toggleProgress(
                                                  phaseKey,
                                                  week.id,
                                                  item
                                                )
                                              }
                                              className="peer appearance-none h-4 w-4 sm:h-5 sm:w-5 border-2 border-gray-300 rounded-md checked:bg-gradient-to-br checked:from-green-400 checked:to-${phase.color}-500 checked:border-transparent transition-colors duration-200 focus:ring-2 focus:ring-${phase.color}-300"
                                              aria-checked={
                                                isCompleted || false
                                              }
                                            />
                                            <span
                                              className={`absolute pointer-events-none w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center text-white text-opacity-90 transition-opacity duration-200 ${
                                                isCompleted
                                                  ? "opacity-100"
                                                  : "opacity-0"
                                              }`}
                                            >
                                              <svg
                                                className="w-3 h-3 sm:w-4 sm:h-4"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="3"
                                                viewBox="0 0 24 24"
                                              >
                                                <path
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  d="M5 13l4 4L19 7"
                                                />
                                              </svg>
                                            </span>
                                          </span>{" "}
                                          <span
                                            className={`${
                                              isCompleted
                                                ? "line-through text-gray-500"
                                                : "text-gray-800 group-hover:text-gray-900 transition-colors duration-200"
                                            } text-sm sm:text-base font-medium relative group`}
                                          >
                                            {item.task}
                                            {item.description && (
                                              <span className="hidden group-hover:block absolute left-0 bottom-full mb-2 w-64 bg-gray-800 text-white text-xs p-2 rounded shadow-lg z-10">
                                                <div className="font-medium mb-1">
                                                  Task Details:
                                                </div>
                                                <p>{item.description}</p>
                                                {item.estimatedTime && (
                                                  <p className="mt-1">
                                                    <span className="font-medium">
                                                      Estimated time:
                                                    </span>{" "}
                                                    {item.estimatedTime}
                                                  </p>
                                                )}
                                                <div className="absolute left-4 bottom-[-6px] transform rotate-45 w-3 h-3 bg-gray-800"></div>
                                              </span>
                                            )}
                                          </span>
                                        </label>

                                        {/* Difficulty badge */}
                                        <span
                                          className={`ml-auto ${difficultyColor} text-xs px-2 py-0.5 rounded-full capitalize`}
                                        >
                                          {item.difficulty}
                                        </span>
                                      </div>

                                      {/* Resources section */}
                                      {item.resources &&
                                        item.resources.length > 0 && (
                                          <div className="mt-3 pl-7 sm:pl-8">
                                            <h4 className="text-xs text-gray-500 uppercase tracking-wide mb-2">
                                              Resources
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                              {item.resources.map(
                                                (resource, idx) => (
                                                  <a
                                                    href={resource.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    key={idx}
                                                    className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium 
                                                  ${
                                                    isCompleted
                                                      ? "bg-gray-100 text-gray-500"
                                                      : `bg-${phase.color}-50 text-${phase.color}-700 hover:bg-${phase.color}-100`
                                                  }
                                                  transition-colors duration-200`}
                                                  >
                                                    {(() => {
                                                      // Icon based on resource type
                                                      const iconMap = {
                                                        article: (
                                                          <svg
                                                            className="w-3 h-3 mr-1"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                          >
                                                            <path
                                                              strokeLinecap="round"
                                                              strokeLinejoin="round"
                                                              strokeWidth="2"
                                                              d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                                                            />
                                                          </svg>
                                                        ),
                                                        video: (
                                                          <svg
                                                            className="w-3 h-3 mr-1"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                          >
                                                            <path
                                                              strokeLinecap="round"
                                                              strokeLinejoin="round"
                                                              strokeWidth="2"
                                                              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                                            />
                                                            <path
                                                              strokeLinecap="round"
                                                              strokeLinejoin="round"
                                                              strokeWidth="2"
                                                              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                            />
                                                          </svg>
                                                        ),
                                                        tutorial: (
                                                          <svg
                                                            className="w-3 h-3 mr-1"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                          >
                                                            <path
                                                              strokeLinecap="round"
                                                              strokeLinejoin="round"
                                                              strokeWidth="2"
                                                              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                                            />
                                                          </svg>
                                                        ),
                                                        course: (
                                                          <svg
                                                            className="w-3 h-3 mr-1"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                          >
                                                            <path
                                                              strokeLinecap="round"
                                                              strokeLinejoin="round"
                                                              strokeWidth="2"
                                                              d="M12 14l9-5-9-5-9 5 9 5z"
                                                            />
                                                            <path
                                                              strokeLinecap="round"
                                                              strokeLinejoin="round"
                                                              strokeWidth="2"
                                                              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                                            />
                                                            <path
                                                              strokeLinecap="round"
                                                              strokeLinejoin="round"
                                                              strokeWidth="2"
                                                              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                                            />
                                                          </svg>
                                                        ),
                                                        practice: (
                                                          <svg
                                                            className="w-3 h-3 mr-1"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                          >
                                                            <path
                                                              strokeLinecap="round"
                                                              strokeLinejoin="round"
                                                              strokeWidth="2"
                                                              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                                            />
                                                          </svg>
                                                        ),
                                                        project: (
                                                          <svg
                                                            className="w-3 h-3 mr-1"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                          >
                                                            <path
                                                              strokeLinecap="round"
                                                              strokeLinejoin="round"
                                                              strokeWidth="2"
                                                              d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                                                            />
                                                          </svg>
                                                        ),
                                                        dataset: (
                                                          <svg
                                                            className="w-3 h-3 mr-1"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                          >
                                                            <path
                                                              strokeLinecap="round"
                                                              strokeLinejoin="round"
                                                              strokeWidth="2"
                                                              d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                                                            />
                                                          </svg>
                                                        ),
                                                        github: (
                                                          <svg
                                                            className="w-3 h-3 mr-1"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                          >
                                                            <path
                                                              strokeLinecap="round"
                                                              strokeLinejoin="round"
                                                              strokeWidth="2"
                                                              d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                                                            />
                                                          </svg>
                                                        ),
                                                        example: (
                                                          <svg
                                                            className="w-3 h-3 mr-1"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                          >
                                                            <path
                                                              strokeLinecap="round"
                                                              strokeLinejoin="round"
                                                              strokeWidth="2"
                                                              d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                                                            />
                                                          </svg>
                                                        ),
                                                        interactive: (
                                                          <svg
                                                            className="w-3 h-3 mr-1"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                          >
                                                            <path
                                                              strokeLinecap="round"
                                                              strokeLinejoin="round"
                                                              strokeWidth="2"
                                                              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                                                            />
                                                          </svg>
                                                        ),
                                                        template: (
                                                          <svg
                                                            className="w-3 h-3 mr-1"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                          >
                                                            <path
                                                              strokeLinecap="round"
                                                              strokeLinejoin="round"
                                                              strokeWidth="2"
                                                              d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                                                            />
                                                          </svg>
                                                        ),
                                                      };
                                                      return (
                                                        <>
                                                          {iconMap[
                                                            resource.type
                                                          ] || (
                                                            <svg
                                                              className="w-3 h-3 mr-1"
                                                              fill="none"
                                                              stroke="currentColor"
                                                              viewBox="0 0 24 24"
                                                              xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                              <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth="2"
                                                                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                                                              />
                                                            </svg>
                                                          )}
                                                          {resource.title}
                                                        </>
                                                      );
                                                    })()}
                                                  </a>
                                                )
                                              )}
                                            </div>
                                          </div>
                                        )}
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProgressTracker;
