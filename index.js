const quotes = [
    { text: "Be yourself, everyone else is already taken.", author: "Oscar Wilde" },
    { text: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.", author: "Marilyn Monroe" },
    { text: "So many books, so little time", author: "Frank Zappa" },
    { text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe", author: "Albert Einstein" },
    { text: "A room without books is like a body without a soul", author: "Marcus Tullius Cicero" },
    { text: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.", author: "Bernard M. Baruch" },
    { text: "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.", author: "William W. Purkey" },
    { text: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.", author: "Dr. Seuss" },
    { text: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
    { text: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
    { text: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
    { text: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.", author: "J.K. Rowling, Harry Potter and the Goblet of Fire" },
    { text: "Don’t walk in front of me… I may not follow, Don’t walk behind me… I may not lead, Walk beside me… just be my friend", author: "Albert Camus" },
]

const quoteText = document.getElementById('quote')
const quoteAuthor = document.getElementById('author')
const btnQuote = document.getElementById('new-quote')

const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    console.log(randomIndex);
    const randomQuotes = quotes[randomIndex]

    quoteText.textContent = `"${randomQuotes.text}"`
    quoteAuthor.textContent = `- ${randomQuotes.author}`
}

btnQuote.addEventListener('click', generateQuote)

generateQuote()