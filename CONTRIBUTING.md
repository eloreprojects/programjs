# Contributing

## Inspiration

Don't know where to start finding algorithms to implement? This project accepts implementations of CORE data structures and algorithms. Although this definition is a little vague, try picking up a textbook like this project's namesake [Algorithms + Data Structures = Programs](https://www.google.com/search?q=data+structures+%2B+algorithms+%3D+programs&oq=data+structures+%2B+algorithms+%3D+programs&aqs=chrome..69i57j69i61l3j69i60j35i39.5661j0j1&sourceid=chrome&ie=UTF-8) or the famous [Introduction To Algorithms (CLRS)](https://www.amazon.com/Introduction-Algorithms-3rd-MIT-Press/dp/0262033844/ref=sr_1_1?s=books&ie=UTF8&qid=1499944366&sr=1-1&keywords=CLRS) and try implementing what you find in them!

## Process

1. Place implementations of data structures and algorithms in the `/data_structures` and `/algorithms` directories respectively. The implementation must be written as a `module.exports` function or object (refer to existing implementations) in its own file.
2. Add the necessary `require` or `import` statement to index.js
3. Update README.md to include the new implemented algorithm or data structure.
4. Open pull request to the repository for merging or feedback.

## Conventions

### Style

We use the [Airbnb's Javascript Style Guide](https://github.com/airbnb/javascript) for writing Javascript using ES6. We use ESLint to ensure this standard throughout the project.

File names are made using lowercamelcase with the first letter being lowercase, and each first letter of the following words being upper case (e.g. bubbleSort.js).

### Comments

Comments are crucial to helping new developers write code (one of the goals of programjs). As such, we have a few guidelines for writing comments.

All class implementations should begin with a brief multi-line comment giving a brief overview of the class as well as space/time efficiency using Big O notation for each function. Comments within each implementation will vary with the complexity of the code. For example, to explain a strange-looking or conterversial piece of code with other developers, a comment can look like `note: using a recursive function instead of loop to minimize runtime`. Comments should explain not what the code does, but WHY it is written a certain way. Comments to explain functions are not neccessary, as it is expected that the function and variable names will be intuitive.

Overall, comment usage should be minimized in hopes of keeping files lightweight and easy for developers to get a sense of through code and code alone.

## Testing

Each addition must have a unit tests in the `test` directory for the respective changes. Try to modularize as much as possible,
breaking down each functionality into a different test.

Add your test into `test/test.js` following existing format. Add your test with the `.only` descriptor to `describe` if testing an entire data structure, or `it` if a single part of a test. We do this to minimize the number of tests when testing, and create a more lightweight experience.

## Github

All commits must start with upper case letters.

## Pull Request

When creating a pull request, add @n3a9 and @kirubarajan as reviewers. Also make sure to have a detailed title, and add a small description if necessary.

If you make major changes after a PR is approved, dismiss the reviews to ensure that your new code is reviewed as well.
