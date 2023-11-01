const quotes = [
  {
    id: 1,
    quote:
      "Be who you are and say what you feel, because those who mind don't matter and those who matter don't mind.",
    source: "Dr. Seuss",
  },
  {
    id: 2,
    quote: "This too, shall pass.",
    source: "Anonymous",
  },
  {
    id: 3,
    quote: "Keep your eyes on the stars and your feet on the ground.",
    source: "Theodore Roosevelt",
  },
  {
    id: 4,
    quote:
      "The only person you should try to be better than is the person you were yesterday.",
    source: "Anonymous",
  },
  {
    id: 5,
    quote:
      "Never be bullied into silence. Never allow yourself to be made a victim. Accept no one's definition of your life; define yourself.",
    source: "Harvey Fierstein",
  },
  {
    id: 6,
    quote:
      "Faith is the art of holding on to things your reason has once accepted, in spite of your changing moods.",
    source: "C.S. Lewis",
  },
  {
    id: 7,
    quote:
      "A man who flies from his fear may find that he has only taken a shortcut to meet it.",
    source: "Sador",
  },
  {
    id: 8,
    quote: "Life's too mysterious to take too serious.",
    source: "Mary Engelbreit",
  },
  {
    id: 9,
    quote: "No one can make you feel inferior without your consent.",
    source: "Eleanor Roosevelt",
  },
  {
    id: 10,
    quote:
      "The woman who follows the crowd will usually go no further than the crowd. The woman who walks alone is likely to find herself in places no one has been before.",
    source: "Albert Einstein",
  },
  {
    id: 11,
    quote:
      "You can't go around building a better world for people. Only people can build a better world for people. Otherwise it's just a cage.",
    source: "Terry Pratchett",
  },
  {
    id: 12,
    quote:
      "There isn't a way things should be. There's just what happens, and what we do.",
    source: "Terry Pratchett",
  },
  {
    id: 13,
    quote:
      "It's not about how hard you can hit; it's about how hard you can get hit and keep moving forward.",
    source: "Rocky Balboa",
  },
  {
    id: 14,
    quote:
      "If you want to go fast, go alone. If you want to go far, go together.",
    source: "African proverb",
  },
  {
    id: 15,
    quote: "It's OK to not be OK, as long as you don't stay that way.",
    source: "Anonymous",
  },
  {
    id: 16,
    quote:
      "I can be changed by what happens to me but I refuse to be reduced by it.",
    source: "Maya Angelou",
  },
  {
    id: 17,
    quote: "Believe you can and you're halfway there.",
    source: "T. Roosevelt",
  },
  {
    id: 18,
    quote:
      "May I never be complete. May I never be content. May I never be perfect.",
    source: "Chuck Palahniuk",
  },
  {
    id: 19,
    quote:
      "Nothing in life is to be feared; it is only to be understood. Now is the time to understand more so that we may fear less.",
    source: "Marie Curie",
  },
  {
    id: 20,
    quote: "Those who don't believe in magic will never find it.",
    source: "Roald Dahl",
  },
  {
    id: 21,
    quote: "There is no elevator to success  you have to take the stairs.",
    source: "Anonymous",
  },
  {
    id: 22,
    quote:
      "Plant your garden and decorate your own soul, instead of waiting for someone to bring you flowers.",
    source: "Jose Luis Borges",
  },
  {
    id: 23,
    quote: "It does not do to dwell on dreams and forget to live.",
    source: "Albus Dumbledore",
  },
  {
    id: 24,
    quote: "Don't sweat the petty things and don't pet the sweaty things.",
    source: "George Carlin",
  },
  {
    id: 25,
    quote:
      "Do what you feel in your heart to be right, for you'll be criticized anyway.",
    source: "Eleanor Roosevelt",
  },
  {
    id: 26,
    quote: "Do not set yourself on fire in order to keep others warm.",
    source: "Anonymous",
  },
  {
    id: 27,
    quote:
      "The way I see it, every life is a pile of good things and bad things. The good things don't always soften the bad things, but vice versa, the bad things don't always spoil the good things and make them unimportant.",
    source: "Doctor Who",
  },
  {
    id: 28,
    quote: "It's supposed to be hard. If it were easy, everyone would do it.",
    source: "Jimmy Dugan",
  },
  {
    id: 29,
    quote:
      "Ask yourself if what you're doing today will get you closer to where you want to be tomorrow.",
    source: "Anonymous",
  },
  {
    id: 30,
    quote:
      "Life may not be the party we hoped for, but while we're here, we should dance.",
    source: "Anonymous",
  },
];

// ----- DOM ------ //
const inputElement = document.getElementById("inputOfNumbers");
const btnElement = document.getElementById("submitBtn");
const containerElement = document.querySelector(".quotesContainer");
const formElement = document.getElementById("form");
const clearBtnEl = document.getElementById("clearBtn")

formElement.addEventListener("submit", function (e) {
  e.preventDefault();
  let value = inputElement.value;
  containerElement.innerHTML = "";
  
  //---- print the quotes in doc ----//
  if (isNaN(value)) {
    alert("Please just enter numbers :)");
    clearBtnEl.style.transform = "scale(0)"
  } else if(value) {
    for (let i = 0; i < value; i++) {
      let randomNumber = Math.floor(Math.random() * 30);
      const quoteElement = document.createElement("div");
      quoteElement.classList.add("quote");
      const h2Element = document.createElement("h2");
      const quoteParagraph = document.createElement("p");
      const sourceSpan = document.createElement("span");
      
      h2Element.innerHTML = i + 1;
      quoteParagraph.innerHTML = quotes[randomNumber].quote;
      sourceSpan.innerHTML = "- " + quotes[randomNumber].source;
      quoteElement.append(h2Element, quoteParagraph, sourceSpan);
      containerElement.append(quoteElement);
      clearBtnEl.style.transform = "scale(1)";
    }
  } else {
    alert("Please enter a number");
    clearBtnEl.style.transform = "scale(0)";
  }
  inputElement.value = "";
});


clearBtnEl.addEventListener("click", function() {
  containerElement.innerHTML = "";
  this.style.transform = "scale(0)"
})