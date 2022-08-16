// Javascript == allows user interaction with website

// initialize variable "type <string>"
var topics = ["HTML", "CSS", "Git", "Javascript"];

// console.log == output message to web console
    // 'console' == test environment
    // '.log()' == output to console
    // methods ('()') == execution instructions for computer

    // mostly used to test code
    // can be viewed in 'console' tab of webpage 'inspect'
console.log(topics);



// 3.3.4 CONDITIONAL LOGIC

// control flow example

var hasFuel = false;

if (hasFuel === false) {    // conditional statement
    hasFuel = true;
}


// 3.3.5 Arrays & for loops

var shapes = ["triangle", "circle", "square", "pentagon"]; // initalize array
var studentInfo = ["Lu", 54, true];

console.log(shapes[0]); // access and print triangle from array to console

for(var i = 0; i < shapes.length; i++) { // use 'for' loop and '.length' to loop through array
    console.log(shapes[i]);
}

// 3.4.3 Functions

// list all items with for loop
function listTopics(topics) {
    for(var i = 0; i < topics.length; i++) {
        console.log(topics[i]);
    }
}

// generates random topic based on random indices
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function selectTopic() {
    if (randomTopic === "HTML") {     // conditional checking statement has 3 '='
        console.log("Let's study HTML!");
    } else if (randomTopic === 'CSS') {   // checks topics array even if undefined in function
    console.log("Let's study CSS!");
    } else if (randomTopic === 'Git') {
    console.log("Let's study Git!");
    } else if (randomTopic === 'JavaScript') {
    console.log("Let's study JavaScript!");
    } else {
    console.log('Please try again!');
    }
}

console.log("Here are the topics we learned through Prework:");
listTopics(topics);   // lists all topics listed; var initialized in line 4
console.log("Which topic should we study first?");
selectTopic();        // generates random topic