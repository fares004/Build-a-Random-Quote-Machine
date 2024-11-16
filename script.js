const QUOTEBANK  =[
    {
      quote:"Be not afraid of greatness. Some are born great, some achieve greatness, and others have greatness thrust upon them.",
      author:"-William Shakespeare"

    },
    {
        quote:"You cannot swim for new horizons until you have courage to lose sight of the shore.",
        author:"-William Faulkner"
    },
    {
        quote:"I am so clever that sometimes I don't understand a single word of what I am saying.",
        author:"-Oscar Wilde"
    }
];




window.onload= init;
function init(){
    generateQuote();
}

function generateQuote(){
   let quoteSize= QUOTEBANK.length;
   let randomIndex = Math.floor(Math.random()* quoteSize);
   let randomQuoteData = QUOTEBANK[randomIndex];
   let twitterLink= "https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text="
 
    

   // Add The Quote 
   let quoteInApiFormat = randomQuoteData.quote.replace(/ /g , "%20");
   twitterLink += quoteInApiFormat;

   // Add the Author 
   let authorInApiFormat = randomQuoteData.author.replace(/ /g , "%20");
   twitterLink +=  "-" + authorInApiFormat;


    document.getElementById("tweet-quote").href = twitterLink;
    document.getElementById("text").innerText=randomQuoteData.quote;
    document.getElementById("author").innerText=randomQuoteData.author;
}
const colorButton =document.getElementById("new-quote");

colorButton.addEventListener("click", function(){
    
        // Generate a random color
        var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        
        // Change the background color of the body
        document.body.style.backgroundColor = randomColor;
        document.body.style.color = randomColor;
         
      
})
  

