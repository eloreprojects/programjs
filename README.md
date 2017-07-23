# program.js
[![NPM](https://nodei.co/npm/programjs.png?mini=true)](https://nodei.co/npm/programjs/)
[![Travis](https://img.shields.io/travis/eloreprojects/programjs.svg)]()

A comprehensive and lightweight npm package of common data structures and algorithms to accelerate development.

## About
Why is this module named program.js? An inspiration for this project was computer science pioneer Niklaus Wirth: author of the classic textbook *Algorithms + Data Structures = Programs*. We believe that the philosophy of algorithms and data structures being at the core of software is important, so this module is made in the textbook's honor.

![Textbook](https://upload.wikimedia.org/wikipedia/en/9/90/Algorithms_%2B_Data_Structures.jpg)

### Current implementations:

#### Algorithms
- [x] Bubble sort
- [x] Insertion sort
- [ ] Quick Sort
- [ ] Merge Sort

#### Data Structures
- [x] Stack
- [x] Queue
- [ ] Linked List
- [ ] Heap
- [ ] Tree

## Usage
1. Install the package using `npm install --save programjs` or `yarn add programjs`
2. Import the feature set you would like to use (e.g. `import { algorithms } from 'programjs'`)
3. Access specific implementation through the feature set object (e.g. `const sorted_array = algorithms.bubble_sort(array)`)

## Contributing
If you're interested in contributing to program.js, refer to [our guide](https://github.com/eloreprojects/programjs/blob/master/CONTRIBUTING.md).

## License
We believe in open source projects. Our code is licensed under [The GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.en.html).
