const app = {
    quotes: [
        "<p>Insight emerges out of silence.</p>", 
        "<p>If you let go a little you will have a little happiness. If you let go completely you will be free.</p>", 
        "<p>\"The wild geese do not intend to cast their reflections.The water has no mind to receive their images.\"</p>",
        "<p>\“It does not matter how slowly you go as long as you do not stop.”\ – Confucius</p>",
        "<p>\"The true miracle is not walking on water or walking in air, but simply walking on this earth.\" ― Thích Nhất Hạnh</p>",
        "<p>\“Our greatest glory is not in never falling, but in rising every time we fall.”\ – Confucius</p>",
        "<p>\"You are exactly where you need to be\"</p>",
        "<p>\"Knowledge is learning something everyday. Wisdom is letting go of something everyday.\"</p>",
        "<p>\"One must be deeply aware of the impermanence of the world.\"– Dogen</p>",
        "<p>\"Have good trust in yourself … not in the One that you think you should be, but in the One that you are.\"– Maezumi Roshi</p>",
    ],
    backgrounds: [
        "bg0",
        "bg1",
        "bg2",
        "bg3",
        "bg4",
        "bg5",
        "bg6",
        "bg7",
        "bg8",
        "bg9"
    ]
    
}

// write function to return random quote from array

const getRandomQuote = function () {
    const randomQuote = app.quotes[Math.floor(Math.random() * app.quotes.length)];
    $(".result").html(randomQuote);
}

// write function to return random class which will include image URL from array
const getRandomBackground = function () {
    const randomBgClass = app.backgrounds[Math.floor(Math.random() * app.backgrounds.length)];
    // changeBackgroundofDiv(randomBkgroundClass);
    // select the element that I want to have a random background, and give it a class of the random background returned to me by getRandomBackground()
    $("main").removeClass();

    $("main").addClass(randomBgClass);
}


$(function () {
    console.log("ready");

    $("button").on("click", function () {
        getRandomQuote();
        getRandomBackground();
    })
});