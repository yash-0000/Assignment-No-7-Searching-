//Assignment 1 Create a Map to store countries and their capitals

const countryMap = new Map([
            ['USA', 'Washington, D.C.'],
            ['Canada', 'Ottawa'],
            ['France', 'Paris'],
            ['Japan', 'Tokyo'],
            ['Brazil', 'Brasília']
]);


countryMap.forEach((capital, country) => {
            console.log(`Country: ${country}, Capital: ${capital}`);
});

//Assignment 2 Input array with duplicates

const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = new Set(numbers);

console.log([...uniqueNumbers]);

// Assignment Create a map

const myMap = new Map();

// Add key-value pairs to the Map
myMap.set('a', 1);
myMap.set('b', 2);
myMap.set('c', 3);


for (const [key, value] of myMap) {
            console.log(`Key: ${key}, Value: ${value}`);
}

 Check if a specific key exists
const keyToCheck = 'b';
console.log(`Key '${keyToCheck}' exists: ${myMap.has(keyToCheck)}`);

//  Remove a key-value pair from the Map
myMap.delete('b');


// Assignment 4 Create Sets for even and odd numbers

const evenNumbers = new Set([2, 4, 6, 8, 10]);
const oddNumbers = new Set([1, 3, 5, 7, 9]);

// Union of the two sets
const unionSet = new Set([...evenNumbers, ...oddNumbers]);
console.log('Union:', [...unionSet]);

// Intersection of the two sets
const intersectionSet = new Set([...evenNumbers].filter(x => oddNumbers.has(x)));
console.log('Intersection:', [...intersectionSet]);

// Elements only in the even numbers set
const evenOnlySet = new Set([...evenNumbers].filter(x => !oddNumbers.has(x)));
console.log('Even Only:', [...evenOnlySet]);

// Elements only in the odd numbers set
const oddOnlySet = new Set([...oddNumbers].filter(x => !evenNumbers.has(x)));
console.log('Odd Only:', [...oddOnlySet]);


// Assignment 5 Create a Map of fruits and their colors

const fruitColors = new Map([
            ['Apple', 'Red'],
            ['Banana', 'Yellow'],
            ['Grapes', 'Purple'],
            ['Orange', 'Orange'],
]);

// Iterate and print fruit names and colors
for (const [fruit, color] of fruitColors) {
            console.log(`Fruit: ${fruit}, Color: ${color}`);
}


//Assignment 6 Create a Set of integers

const integerSet = new Set([1, 2, 3, 4, 5]);

console.log('Set size:', integerSet.size);


integerSet.clear()

console.log('Set size after clear:', integerSet.size);
