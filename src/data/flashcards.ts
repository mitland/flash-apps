export interface Flashcard {
  id: number;
  question: string;
  answer: string;
  category: string;
  mastered: boolean;
}

export const initialCards: Flashcard[] = [
  {
    id: 1,
    question: "What is a variable?",
    answer:
      "A named storage location in memory that holds a value which can be changed during program execution.",
    category: "Basics",
    mastered: false,
  },
  {
    id: 2,
    question: "What is a function?",
    answer:
      "A reusable block of code designed to perform a specific task, which may accept parameters and return a value.",
    category: "Basics",
    mastered: false,
  },
  {
    id: 3,
    question: "What is Object-Oriented Programming?",
    answer:
      "A programming paradigm based on 'objects' containing data and methods, organized into classes that can inherit properties.",
    category: "Paradigms",
    mastered: false,
  },
  {
    id: 4,
    question: "What is a closure?",
    answer:
      "A function that has access to variables from its outer (enclosing) lexical scope, even after the outer function has returned.",
    category: "Advanced",
    mastered: false,
  },
  {
    id: 5,
    question: "What is Big O notation?",
    answer:
      "A mathematical notation that describes the limiting behavior of a function when the argument tends towards a particular value or infinity, used to classify algorithms by their time or space complexity.",
    category: "Algorithms",
    mastered: false,
  },
  {
    id: 6,
    question: "What is a REST API?",
    answer:
      "Representational State Transfer (REST) is an architectural style for designing networked applications, using HTTP requests to access and manipulate data using stateless operations.",
    category: "Web",
    mastered: false,
  },
  {
    id: 7,
    question: "What is a Promise in JavaScript?",
    answer:
      "An object representing the eventual completion or failure of an asynchronous operation, allowing for cleaner handling of asynchronous code.",
    category: "JavaScript",
    mastered: false,
  },
  {
    id: 8,
    question: "What is a Hook in React?",
    answer:
      "Functions that let you 'hook into' React state and lifecycle features from function components, like useState and useEffect.",
    category: "React",
    mastered: false,
  },
  {
    id: 9,
    question: "What is recursion?",
    answer:
      "A technique where a function calls itself to solve a problem, breaking it down into smaller instances of the same problem.",
    category: "Algorithms",
    mastered: false,
  },
  {
    id: 10,
    question: "What is a data structure?",
    answer:
      "A specialized format for organizing, processing, retrieving and storing data to suit a specific purpose, like arrays, linked lists, trees, and hash tables.",
    category: "Data Structures",
    mastered: false,
  },
  // JavaScript Cards
  {
    id: 11,
    question:
      "What is the difference between let, const, and var in JavaScript?",
    answer:
      "var is function-scoped and can be redeclared and updated. let is block-scoped and can be updated but not redeclared. const is block-scoped and cannot be updated or redeclared after initialization.",
    category: "JavaScript",
    mastered: false,
  },
  {
    id: 12,
    question: "What is the event loop in JavaScript?",
    answer:
      "The event loop is a mechanism that allows JavaScript to perform non-blocking operations despite being single-threaded. It monitors the call stack and callback queue, pushing callbacks from the queue to the stack when it's empty.",
    category: "JavaScript",
    mastered: false,
  },
  {
    id: 13,
    question: "What is the difference between == and === in JavaScript?",
    answer:
      "== is the equality operator that compares values after type conversion. === is the strict equality operator that compares both values and types without conversion.",
    category: "JavaScript",
    mastered: false,
  },
  {
    id: 14,
    question: "What is a callback function in JavaScript?",
    answer:
      "A callback function is a function passed as an argument to another function, which is then invoked inside the outer function to complete some kind of action or routine.",
    category: "JavaScript",
    mastered: false,
  },
  {
    id: 15,
    question: "What is hoisting in JavaScript?",
    answer:
      "Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope. Function declarations are hoisted completely, while variable declarations (but not initializations) are hoisted.",
    category: "JavaScript",
    mastered: false,
  },
  // React Cards
  {
    id: 16,
    question: "What is JSX in React?",
    answer:
      "JSX (JavaScript XML) is a syntax extension for JavaScript that looks similar to HTML. It allows you to write HTML-like code in your JavaScript files for defining React elements.",
    category: "React",
    mastered: false,
  },
  {
    id: 17,
    question: "What is the virtual DOM in React?",
    answer:
      "The Virtual DOM is a lightweight copy of the actual DOM in memory. React uses it to improve performance by minimizing direct DOM manipulations. It compares the virtual DOM with the real DOM and only updates what has changed.",
    category: "React",
    mastered: false,
  },
  {
    id: 18,
    question: "What is the difference between state and props in React?",
    answer:
      "Props are passed to a component from its parent and are read-only. State is managed within the component and can be changed using setState(). Changes to state trigger re-renders.",
    category: "React",
    mastered: false,
  },
  {
    id: 19,
    question: "What is the useEffect hook used for in React?",
    answer:
      "useEffect is used for handling side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM. It runs after every render by default, but can be configured to run only when certain values change.",
    category: "React",
    mastered: false,
  },
  {
    id: 20,
    question: "What is React Context?",
    answer:
      "React Context provides a way to pass data through the component tree without having to pass props down manually at every level. It's designed to share data that can be considered 'global' for a tree of React components.",
    category: "React",
    mastered: false,
  },
  // Data Structures Cards
  {
    id: 21,
    question: "What is a linked list?",
    answer:
      "A linked list is a linear data structure where elements are stored in nodes, and each node points to the next node in the sequence. Unlike arrays, linked lists don't require contiguous memory allocation.",
    category: "Data Structures",
    mastered: false,
  },
  {
    id: 22,
    question: "What is a stack data structure?",
    answer:
      "A stack is a linear data structure that follows the Last In, First Out (LIFO) principle. Elements can only be added or removed from the top of the stack, like a stack of plates.",
    category: "Data Structures",
    mastered: false,
  },
  {
    id: 23,
    question: "What is a queue data structure?",
    answer:
      "A queue is a linear data structure that follows the First In, First Out (FIFO) principle. Elements are added at the rear and removed from the front, like people waiting in line.",
    category: "Data Structures",
    mastered: false,
  },
  {
    id: 24,
    question: "What is a binary tree?",
    answer:
      "A binary tree is a hierarchical data structure where each node has at most two children, referred to as the left child and the right child. It's used for efficient searching and sorting.",
    category: "Data Structures",
    mastered: false,
  },
  {
    id: 25,
    question: "What is a hash table?",
    answer:
      "A hash table is a data structure that implements an associative array, mapping keys to values using a hash function. It provides fast data retrieval, with average time complexity of O(1) for search, insert, and delete operations.",
    category: "Data Structures",
    mastered: false,
  },
  // Algorithms Cards
  {
    id: 26,
    question: "What is a sorting algorithm?",
    answer:
      "A sorting algorithm is a method for reorganizing a sequence of items in a specific order, typically ascending or descending. Common examples include bubble sort, merge sort, and quicksort.",
    category: "Algorithms",
    mastered: false,
  },
  {
    id: 27,
    question: "What is the time complexity of quicksort?",
    answer:
      "Quicksort has an average time complexity of O(n log n), but in the worst case (when the pivot is always the smallest or largest element), it can degrade to O(n²).",
    category: "Algorithms",
    mastered: false,
  },
  {
    id: 28,
    question: "What is a binary search?",
    answer:
      "Binary search is an efficient algorithm for finding an item in a sorted array. It works by repeatedly dividing the search interval in half, with a time complexity of O(log n).",
    category: "Algorithms",
    mastered: false,
  },
  {
    id: 29,
    question: "What is dynamic programming?",
    answer:
      "Dynamic programming is a method for solving complex problems by breaking them down into simpler subproblems. It solves each subproblem only once and stores the results to avoid redundant calculations.",
    category: "Algorithms",
    mastered: false,
  },
  {
    id: 30,
    question: "What is a greedy algorithm?",
    answer:
      "A greedy algorithm makes locally optimal choices at each step with the hope of finding a global optimum. It doesn't always yield the best solution but is often used for optimization problems.",
    category: "Algorithms",
    mastered: false,
  },
  // Web Development Cards
  {
    id: 31,
    question: "What is HTTP?",
    answer:
      "HTTP (Hypertext Transfer Protocol) is an application protocol for distributed, collaborative, hypermedia information systems. It is the foundation of data communication for the World Wide Web.",
    category: "Web",
    mastered: false,
  },
  {
    id: 32,
    question: "What is CORS?",
    answer:
      "CORS (Cross-Origin Resource Sharing) is a security feature implemented by browsers that restricts web pages from making requests to a different domain than the one that served the original page.",
    category: "Web",
    mastered: false,
  },
  {
    id: 33,
    question: "What is the difference between GET and POST requests?",
    answer:
      "GET requests retrieve data and can be cached, bookmarked, and remain in browser history. They have length restrictions and shouldn't change server state. POST requests submit data, can't be cached or bookmarked, and are used for operations that change server state.",
    category: "Web",
    mastered: false,
  },
  {
    id: 34,
    question: "What is a cookie in web development?",
    answer:
      "A cookie is a small piece of data stored on the user's computer by the web browser while browsing a website. It's used to remember information about the user, such as login status or shopping cart items.",
    category: "Web",
    mastered: false,
  },
  {
    id: 35,
    question: "What is responsive web design?",
    answer:
      "Responsive web design is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes. It uses techniques like fluid grids, flexible images, and media queries.",
    category: "Web",
    mastered: false,
  },
  // Database Cards
  {
    id: 36,
    question: "What is SQL?",
    answer:
      "SQL (Structured Query Language) is a domain-specific language used for managing and manipulating relational databases. It's used for tasks like querying data, inserting records, updating records, and deleting records.",
    category: "Databases",
    mastered: false,
  },
  {
    id: 37,
    question: "What is a primary key in a database?",
    answer:
      "A primary key is a column or group of columns in a table that uniquely identifies each row. It must contain unique values and cannot contain NULL values.",
    category: "Databases",
    mastered: false,
  },
  {
    id: 38,
    question: "What is normalization in databases?",
    answer:
      "Normalization is the process of organizing data in a database to reduce redundancy and improve data integrity. It involves dividing large tables into smaller ones and defining relationships between them.",
    category: "Databases",
    mastered: false,
  },
  {
    id: 39,
    question: "What is the difference between SQL and NoSQL databases?",
    answer:
      "SQL databases are relational, table-based, have fixed schemas, and use SQL for querying. NoSQL databases are non-relational, document/key-value/graph-based, have flexible schemas, and use various query languages.",
    category: "Databases",
    mastered: false,
  },
  {
    id: 40,
    question: "What is an index in a database?",
    answer:
      "An index is a data structure that improves the speed of data retrieval operations on a database table. It works like an index in a book, allowing the database to find data without scanning the entire table.",
    category: "Databases",
    mastered: false,
  },
  // TypeScript Cards
  {
    id: 41,
    question: "What is TypeScript?",
    answer:
      "TypeScript is a superset of JavaScript that adds static typing. It compiles to plain JavaScript and helps catch errors during development rather than at runtime.",
    category: "TypeScript",
    mastered: false,
  },
  {
    id: 42,
    question: "What are interfaces in TypeScript?",
    answer:
      "Interfaces in TypeScript define the structure that objects must adhere to. They specify the property names, types, and whether they're required or optional.",
    category: "TypeScript",
    mastered: false,
  },
  {
    id: 43,
    question: "What is type inference in TypeScript?",
    answer:
      "Type inference is TypeScript's ability to automatically determine types without explicit annotations, based on the values and how they're used in the code.",
    category: "TypeScript",
    mastered: false,
  },
  {
    id: 44,
    question: "What are generics in TypeScript?",
    answer:
      "Generics in TypeScript allow you to create reusable components that work with a variety of types rather than a single one, providing type safety while maintaining flexibility.",
    category: "TypeScript",
    mastered: false,
  },
  {
    id: 45,
    question: "What is the 'any' type in TypeScript?",
    answer:
      "The 'any' type in TypeScript allows a variable to be of any type, effectively opting out of type checking. It's useful when working with dynamic content or migrating from JavaScript, but reduces TypeScript's benefits.",
    category: "TypeScript",
    mastered: false,
  },
  // CSS Cards
  {
    id: 46,
    question: "What is the CSS box model?",
    answer:
      "The CSS box model is a box that wraps around every HTML element, consisting of margins, borders, padding, and the actual content. It's used to create the design and layout of web pages.",
    category: "CSS",
    mastered: false,
  },
  {
    id: 47,
    question:
      "What is the difference between inline, block, and inline-block display values?",
    answer:
      "Inline elements don't start on a new line and only take up as much width as necessary. Block elements start on a new line and take up the full width available. Inline-block elements are placed as inline elements but can have block-level properties like width and height.",
    category: "CSS",
    mastered: false,
  },
  {
    id: 48,
    question: "What is CSS flexbox?",
    answer:
      "Flexbox is a CSS layout model that allows responsive elements within a container to be automatically arranged depending on viewport size. It provides a more efficient way to lay out, align, and distribute space among items in a container.",
    category: "CSS",
    mastered: false,
  },
  {
    id: 49,
    question: "What is CSS Grid?",
    answer:
      "CSS Grid is a two-dimensional layout system designed for the web, allowing you to lay out content in rows and columns. It provides more complex and sophisticated layouts than traditional methods.",
    category: "CSS",
    mastered: false,
  },
  {
    id: 50,
    question: "What are CSS media queries?",
    answer:
      "Media queries are CSS techniques that allow content to adapt to different conditions such as screen resolution or device type. They're a fundamental part of responsive web design.",
    category: "CSS",
    mastered: false,
  },
  // System Design Cards
  {
    id: 51,
    question: "What is microservices architecture?",
    answer:
      "Microservices architecture is an approach to developing a single application as a suite of small, independently deployable services, each running in its own process and communicating with lightweight mechanisms.",
    category: "System Design",
    mastered: false,
  },
  {
    id: 52,
    question: "What is load balancing?",
    answer:
      "Load balancing is the process of distributing network traffic across multiple servers to ensure no single server bears too much demand. It improves application responsiveness and availability.",
    category: "System Design",
    mastered: false,
  },
  {
    id: 53,
    question: "What is caching in system design?",
    answer:
      "Caching is a technique of storing copies of frequently accessed data in a temporary storage location (cache) to improve data retrieval times, reduce latency, and decrease system load.",
    category: "System Design",
    mastered: false,
  },
  {
    id: 54,
    question: "What is horizontal vs. vertical scaling?",
    answer:
      "Horizontal scaling (scaling out) means adding more machines to your resource pool. Vertical scaling (scaling up) means adding more power (CPU, RAM) to an existing machine. Horizontal scaling is often more desirable for distributed systems.",
    category: "System Design",
    mastered: false,
  },
  {
    id: 55,
    question: "What is a CDN?",
    answer:
      "A Content Delivery Network (CDN) is a geographically distributed network of proxy servers that deliver content to users based on their geographic location. It improves website performance by reducing latency and distributing server load.",
    category: "System Design",
    mastered: false,
  },
  // Git Cards
  {
    id: 56,
    question: "What is Git?",
    answer:
      "Git is a distributed version control system for tracking changes in source code during software development. It allows multiple developers to work together on non-linear development.",
    category: "Git",
    mastered: false,
  },
  {
    id: 57,
    question: "What is the difference between Git and GitHub?",
    answer:
      "Git is a version control system that allows developers to track changes in their code. GitHub is a cloud-based hosting service that lets you manage Git repositories and provides additional collaboration features.",
    category: "Git",
    mastered: false,
  },
  {
    id: 58,
    question: "What is a Git branch?",
    answer:
      "A branch in Git is a lightweight movable pointer to a commit. It represents an independent line of development, allowing you to work on features or fixes without affecting the main codebase.",
    category: "Git",
    mastered: false,
  },
  {
    id: 59,
    question: "What is a Git merge conflict?",
    answer:
      "A merge conflict occurs when Git can't automatically resolve differences in code between two commits. It happens when two branches have made edits to the same line in a file, or when a file is deleted in one branch but edited in the other.",
    category: "Git",
    mastered: false,
  },
  {
    id: 60,
    question: "What is Git rebase?",
    answer:
      "Git rebase is a command that integrates changes from one branch into another by moving or combining commits. Unlike merging, which creates a new commit, rebasing rewrites the commit history to produce a linear sequence of commits.",
    category: "Git",
    mastered: false,
  },
  // Machine Learning Cards
  {
    id: 71,
    question: "What is machine learning?",
    answer:
      "Machine learning is a subset of artificial intelligence that enables systems to learn and improve from experience without being explicitly programmed. It focuses on developing algorithms that can access data and use it to learn for themselves.",
    category: "Machine Learning",
    mastered: false,
  },
  {
    id: 72,
    question:
      "What is the difference between supervised and unsupervised learning?",
    answer:
      "Supervised learning uses labeled training data with input-output pairs to learn a mapping function. Unsupervised learning uses unlabeled data and algorithms must find patterns and relationships on their own.",
    category: "Machine Learning",
    mastered: false,
  },
  {
    id: 73,
    question: "What is a neural network?",
    answer:
      "A neural network is a computational model inspired by the human brain, consisting of layers of interconnected nodes (neurons) that process information. It's used for pattern recognition, classification, and prediction tasks.",
    category: "Machine Learning",
    mastered: false,
  },
  {
    id: 74,
    question: "What is overfitting in machine learning?",
    answer:
      "Overfitting occurs when a model learns the training data too well, including its noise and outliers. This results in poor performance on new, unseen data because the model lacks generalization ability.",
    category: "Machine Learning",
    mastered: false,
  },
  {
    id: 75,
    question: "What is gradient descent?",
    answer:
      "Gradient descent is an optimization algorithm used to minimize a function by iteratively moving in the direction of steepest descent as defined by the negative of the gradient. It's commonly used to train machine learning models.",
    category: "Machine Learning",
    mastered: false,
  },
  // Python Cards
  {
    id: 76,
    question: "What is Python?",
    answer:
      "Python is a high-level, interpreted programming language known for its readability, simplicity, and versatility. It supports multiple programming paradigms including procedural, object-oriented, and functional programming.",
    category: "Python",
    mastered: false,
  },
  {
    id: 77,
    question: "What are Python list comprehensions?",
    answer:
      "List comprehensions are a concise way to create lists in Python. They consist of brackets containing an expression followed by a for clause, then zero or more for or if clauses. Example: [x*2 for x in range(10) if x % 2 == 0]",
    category: "Python",
    mastered: false,
  },
  {
    id: 78,
    question: "What is the difference between a tuple and a list in Python?",
    answer:
      "Lists are mutable (can be changed after creation) and are defined with square brackets []. Tuples are immutable (cannot be changed after creation) and are defined with parentheses (). Tuples are generally faster than lists.",
    category: "Python",
    mastered: false,
  },
  {
    id: 79,
    question: "What are Python decorators?",
    answer:
      "Decorators are a design pattern in Python that allow a user to add new functionality to an existing object without modifying its structure. They are usually called before the definition of a function you want to decorate.",
    category: "Python",
    mastered: false,
  },
  {
    id: 80,
    question: "What is PEP 8?",
    answer:
      "PEP 8 is Python's style guide. It provides coding conventions for Python code to make it more readable and consistent. It covers topics like indentation, line length, imports, naming conventions, and more.",
    category: "Python",
    mastered: false,
  },

  // Security Cards
  {
    id: 81,
    question: "What is Cross-Site Scripting (XSS)?",
    answer:
      "XSS is a security vulnerability that allows attackers to inject client-side scripts into web pages viewed by other users. It occurs when an application includes untrusted data in a new web page without proper validation or escaping.",
    category: "Security",
    mastered: false,
  },
  {
    id: 82,
    question: "What is SQL Injection?",
    answer:
      "SQL Injection is a code injection technique that exploits security vulnerabilities in an application's software by inserting malicious SQL statements into entry fields for execution by the backend database.",
    category: "Security",
    mastered: false,
  },
  {
    id: 83,
    question: "What is HTTPS?",
    answer:
      "HTTPS (Hypertext Transfer Protocol Secure) is an extension of HTTP that uses SSL/TLS for security. It provides encrypted communication and secure identification of a web server, protecting against man-in-the-middle attacks.",
    category: "Security",
    mastered: false,
  },
  {
    id: 84,
    question: "What is two-factor authentication (2FA)?",
    answer:
      "Two-factor authentication is a security process in which users provide two different authentication factors to verify their identity. It typically combines something you know (password) with something you have (like a phone) or something you are (biometrics).",
    category: "Security",
    mastered: false,
  },
  {
    id: 85,
    question: "What is a CSRF attack?",
    answer:
      "Cross-Site Request Forgery (CSRF) is an attack that forces authenticated users to submit a request to a web application against which they are currently authenticated. It tricks users into performing actions they did not intend to perform.",
    category: "Security",
    mastered: false,
  },

  // Design Patterns Cards
  {
    id: 86,
    question: "What is the Singleton design pattern?",
    answer:
      "The Singleton pattern ensures a class has only one instance and provides a global point of access to it. It's useful when exactly one object is needed to coordinate actions across the system.",
    category: "Design Patterns",
    mastered: false,
  },
  {
    id: 87,
    question: "What is the Factory design pattern?",
    answer:
      "The Factory pattern provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created. It creates objects without exposing the creation logic to the client.",
    category: "Design Patterns",
    mastered: false,
  },
  {
    id: 88,
    question: "What is the Observer design pattern?",
    answer:
      "The Observer pattern defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically. It's often used to implement distributed event handling systems.",
    category: "Design Patterns",
    mastered: false,
  },
  {
    id: 89,
    question: "What is the Strategy design pattern?",
    answer:
      "The Strategy pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable. It lets the algorithm vary independently from clients that use it, allowing for flexible and reusable code.",
    category: "Design Patterns",
    mastered: false,
  },
  {
    id: 90,
    question: "What is the MVC design pattern?",
    answer:
      "Model-View-Controller (MVC) is an architectural pattern that separates an application into three main components: the Model (data), the View (user interface), and the Controller (processes that handle input). It helps in organizing code and separating concerns.",
    category: "Design Patterns",
    mastered: false,
  },
];
