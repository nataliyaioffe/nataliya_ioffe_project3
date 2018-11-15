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
        "<p>\"Have good trust in yourself … not in the One that you think you should be, but in the One that you are.\"–Maezumi Roshi</p > ",
    ],
    backgrounds: [
        {
            bgSource: "../images/sarah-dorweiler-357715-unsplash.jpg",
            bgSize: "cover"
        },
        {
            bgSource: "../images/igor-son-320878-unsplash.jpg",
            bgSize: "cover"
        },
        {
            bgSource: "../images/tristan-taussac-356484-unsplash.jpg",
            bgSize: "cover"
        },
        {
            bgSource: "../images/masaaki-komori-603921-unsplash.jpg",
            bgSize: "cover"
        },
        {
            bgSource: "../images/quino-al-103766-unsplash.jpg",
            bgSize: "cover"
        },
        {
            bgSource: "../images/max-di-capua-1064162-unsplash.jpg",
            bgSize: "cover"
        },
        {
            bgSource: "../images/cristina-gottardi-564469-unsplash.jpg",
            bgSize: "cover"
        },
        {
            bgSource: "../images/jeremy-bishop-338661-unsplash.jpg",
            bgSize: "cover"
        },
        {
            bgSource: "../images/igor-son-320878-unsplash.jpg",
            bgSize: "cover"
        },
        {
            bgSource: "../images/elin-tabitha-1092029-unsplash.jpg",
            bgSize: "cover"
        },
        {
            bgSource: "../images/darran-shen-589140-unsplash.jpg",
            bgSize: "cover"
        }
    ]
}

// create "locked" quote flag
// retreive random quote item from array
// insert random quote item into "results" div
let quoteLocked = false;
const getRandomQuote = function () {
    if (quoteLocked === false) {
        const randomQuote = app.quotes[Math.floor(Math.random() * app.quotes.length)];
        $(".result").html(randomQuote);
    }
}


let defaultAndChangingGradient = "linear-gradient(to top, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3))";
// let changingBackground = "../images/sarah-dorweiler-357715-unsplash.jpg";

function changeColorAndBg(linearGradient, imageSource) {
    $("main").css("background-image", `${linearGradient}, url(${imageSource})`);
}

// create "locked" background flag
// retreive random bg class item from array
// if bg is NOT LOCKED, remove any classes from "main," and insert random bg class instead.
let bgLocked = false;
const getRandomBackground = function () {
    if (bgLocked === false) {
        // select the element that I want to have a random background, and give it a class of the random background returned to me by getRandomBackground()
        const randomBgSrc = app.backgrounds[Math.floor(Math.random() * app.backgrounds.length)].bgSource;
        changeColorAndBg(defaultAndChangingGradient, randomBgSrc);
    }
}

$(function () {
    // on click of button, execute random quote / bg class functions.
    $("button").on("click", function () {
        getRandomQuote();
        getRandomBackground();
        // call changeImageAndBg with new default changing gradient
        // GET input from color thingy (val)
        // figure out what bg we are on (WHEN LOCKEEd)
        // IN button.on Click ,call changeImageAndBg with new default Changing Graident
    });
    // on the click of background lock icon. Set the "bgLocked" variable/flag to true.
    $(".bg-lock-link").on("click", function () {
        bgLocked = !bgLocked;
        console.log(bgLocked);
        return bgLocked;
    });
    // on the click of quote lock icon. Set the "quoteLocked" variable/flag to true.
    $(".quote-lock-link").on("click", function () {
        quoteLocked = !quoteLocked;
        console.log("quoteLocked")
        return bgLocked;
    });
    
    // GET input from color thingy (val)

    $("form").on("submit", function(event) {
        event.preventDefault();
        const userColor = $("input[type='color']").val();
        console.log('heh', userColor);
    });    
});