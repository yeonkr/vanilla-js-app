const quotes = [
    {
        quote: "Action is the foundational key to all success.",
        author: "Pablo Picasso",
    },
    {
        quote: "Don't let the fear of losing be greater than the excitement of winning.",
        author: "Robert Kiyosaki",
    },
    {
        quote: "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.",
        author: "Dale Carnegie",
    },
    {
        quote: "he difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack of will.",
        author: "Vince Lombardi",
    },
    {
        quote: "It is your determination and persistence that will make you a successful person.",
        author: "Kenneth J Hutchins",
    },
    {
        quote: "You can waste your life drawing lines. Or you can live your life crossing them.",
        author: "Shonda Rhimes",
    },
    {
        quote: "Be poor, humble and driven. Don't be afraid to shift or pivot.",
        author: "Alex Rodriguez",
    },
    {
        quote: "The way get started is to quit talking and begin doing.",
        author: "Walt Disney",
    },
    {
        quote: "Success is walking from failure to failure with no loss of enthusiasm.",
        author: "Winston Churchill",
    },
    {
        quote: "All progress takes place outside the comfort zone.",
        author: "Michael John Bobak",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// Math.floor는 소수점을 버림
// Math.ceil은 소수점을 올림
// Math.round는 소수점을 반올림

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;