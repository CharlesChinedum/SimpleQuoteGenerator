let quotes = [
    'The Way To Get Started Is To Quit Talking And Begin Doing. <br><b>- Walt Disney</b>',
    'The Persimist Sees Difficulty In Everfy Opportunity. The Optimist Sees The Opportunity In Every  Difficulty. <br><b>- Winston Churchill</b>',
    'Don\'t Let Yesterday Take Up Too Much Of Today. <br><b>- Will Rogers</b>',
    'You Learn More From Failurre Than From Success. Don\'t Let It Stop You. Failure Builds Character. <br><b>- Unknown</b>',
    'It\'s Not Whether You Get KNocked Down, It\'s Whether You Get Up. <br><b>- Vince Lombardi</b>',
    'If You Are Working On Something That You Really Care About, You Don\' Have To Be Pushed. The Vision Pulls You. <br><b>- Steve Jobs</b>',
    'Poeple Who Are Crazy Enough to Think They Can Change The World, Are The Ones Who Do. <br><b>- Rob Siltanen</b>',
    'Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough. <br><b>- Og Mandino</b>',
    'Entrepreneurs Are Great At Dealing With Uncerrtainty And Also Very Good At Minimizing Risk. That\'s The Classic Entrepreneur. <br><b>- Mohnish Pabrai</b>',
    'We May Encounter Many Defeats But We Must Not Be Defeated. <br><b>- Maya Angelou</b>',
]

function newQuote() {
    var randomnumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById("quoteDisplay").innerHTML = quotes[randomnumber];
}

