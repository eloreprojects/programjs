# Contributing

## Process
1. Place implementations of data structures and algorithms in the `/data_structures` and `/algorithms` directories respectively. The implementation must be written as a `module.exports` function or object (refer to existing implementations) in its own file.
2. Add the necessary `require` or `import` statement to index.js
3. Update README.md to include the new implemented algorithm or data structure.
4. Open pull request to the repository for merging or feedback.

## Conventions
We use the [Airbnb's Javascript Style Guide](https://github.com/airbnb/javascript) for writing Javascript using ES6. File names are made using lowercase letters with underscores to seperate multiple words (e.g. bubble_sort.js)

## Inspiration
Don't know where to start finding algorithms to implement? This project accepts implementations of CORE data structures and algorithms. Although this definition is a little vague, try picking up a textbook like this project's namesake [Algorithms + Data Structures = Programs](https://www.google.com/search?q=data+structures+%2B+algorithms+%3D+programs&oq=data+structures+%2B+algorithms+%3D+programs&aqs=chrome..69i57j69i61l3j69i60j35i39.5661j0j1&sourceid=chrome&ie=UTF-8) or the famous [Introduction To Algorithms (CLRS)](https://www.amazon.com/Introduction-Algorithms-3rd-MIT-Press/dp/0262033844/ref=sr_1_1?s=books&ie=UTF8&qid=1499944366&sr=1-1&keywords=CLRS) and try implementing what you find in them!

## Testing 
Each addition must have a unit test in `src/test` for the respective changes.