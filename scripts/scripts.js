console.log("ALL IMAGES COURTESY OF UNSPLASH.COM");

const app = {};

$(function () {
    app.init();
});

app.init = function() {
    // On page load, fade in page elements.
    $('main').css('display', 'none');
    $('main').fadeIn(2000);

    // If neither quote nor background are locked by user, fade-in/out new quote/background on BUTTON CLICK.
    $("button").on("click", function() {          
        if (app.quoteLocked === false) {
            $(".quote-text").fadeOut(1200, function() {
                app.getRandomQuote();
                $(".quote-text").fadeIn(2000);
            })
        };

        if (app.bgLocked === false) {
            $(".background-image").fadeOut(1200, function() {
                app.getRandomBackground();
                setTimeout( function() {
                    $(".background-image").fadeIn(2000);
                }, 500);
            })
        };
    });

    // On the click of quote and/or image "lock" links, set their "locked" variables to opposite boolean.
    $(".quote-lock-link").on("click", function () {
        $(this).toggleClass("active-lock");
        app.quoteLocked = !app.quoteLocked;
        if (app.quoteLocked === true) {
            $(this).find(".fas").removeClass();
            $(this).find("i").addClass("fas fa-lock");
        } else {
            $(this).find(".fas").removeClass();
            $(this).find("i").addClass("fas fa-lock-open");
        }
        return app.quoteLocked;
    });

    $(".bg-lock-link").on("click", function () {
        $(this).toggleClass("active-lock");
        app.bgLocked = !app.bgLocked;
        if (app.bgLocked === true) {
            $(this).find("i").removeClass();
            $(this).find("i").addClass("fas fa-lock");
        } else {
            $(this).find("i").removeClass();
            $(this).find("i").addClass("fas fa-lock-open");
        }
        return app.bgLocked;
    });
};
// END APP.INIT *****

// By default, neither quote nor background are locked.
app.quoteLocked = false;
app.bgLocked = false;

// Retreive random quote text, insert text into quote-text paragraph tag.
app.getRandomQuote = function () {
    const randomQuote = app.data.quotes[Math.floor(Math.random() * app.data.quotes.length)];
    $(".quote-text").html(randomQuote);
};

// Retreive random background image, insert into background-image div. 
app.getRandomBackground = function () {
    if (app.bgLocked === false) {
        app.randomBgSrc = app.data.backgrounds[Math.floor(Math.random() * app.data.backgrounds.length)].bgSource;
        $(".background-image").html(`${app.randomBgSrc}`);
    };
};

app.data = {
    quotes: [
        "\"Insight emerges out of silence.\"<span class='author'>B. D. Schiers</span>",
        "\"If you let go a little you will have a little happiness. If you let go completely you will be free.\"<span class='author'>Ajahn Chah</span>",
        "\"The wild geese do not intend to cast their reflections.The water has no mind to receive their images.\"<span class='author'>Zen Proverb</span>",
        "\"You are exactly where you need to be.\"<span class='author'>Unknown</span>",
        "\"Knowledge is learning something everyday. Wisdom is letting go of something everyday.\"<span class='author'>Zen Proverb</span>",
        "\“Our greatest glory is not in never falling, but in rising every time we fall.”\<span class='author'>Confucius</span>",
        "\“It does not matter how slowly you go as long as you do not stop.”\<span class='author'>Confucius</span>",
        "\"The true miracle is not walking on water or walking in air, but simply walking on this earth.\" <span class='author'>Thích Nhất Hạnh</span>",
        "\"One must be deeply aware of the impermanence of the world.\"<span class='author'>Dogen</span>",
        "\"Have good trust in yourself… not in the One that you think you should be, but in the One that you are.\"<span class='author'>Maezumi Roshi</span>",
        "\"Who you are is always right.\"<span class='author'>Ming-Dao Deng</span>",
        "\"The search for happiness is one of the chief sources of unhappiness.\"<span class='author'>Eric Hoffer</span>",
        "\"Everything that happens to you is a form of instruction if you pay attention.\"<span class='author'>Robert Greene</span>",
        "\"Relax. Nothing’s missing.\"<span class='author'>Maxime Lagacé</span>",
        "\"Life is a balance of holding on and letting go.\"<span class='author'>Rumi</span>",
        "\"Wherever you are, be there totally.\"<span class='author'>Eckhart Tolle</span>",
        "\"One loses joy and happiness in the attempt to possess them.\"<span class='author'>Masanobu Fukuoka</span>",
        "\"Muddy water is best cleared by leaving it alone.\"<span class='author'>Alan Watts</span>",
        "\"When you realize nothing is lacking, the whole world belongs to you.\"<span class='author'>Lao Tzu</span>",
        "\"Treat every moment as your last. It is not preparation for something else.\"<span class='author'>Shunryu Suzuki</span>",
        "\"Nature does not hurry, yet everything is accomplished.\"<span class='author'>Lao Tzu</span>",
        "\"Be kind whenever possible. It is always possible.\"<span class='author'>Dalai Lama</span>",
        "\"Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.\"<span class='author'>Buddha</span>",
        "\"To seek is to suffer. To seek nothing is bliss.\"<span class='author'>Bodhidharma</span>",
        "\"All things are difficult before they are easy.\"<span class='author'>Thomas Fuller</span>",
        "\"Act without expectation.\"<span class='author'>Lao Tzu</span>",
        "\"Roads were made for journeys not destinations.\"<span class='author'>Confucius</span>",
        "\"Sleep is the best meditation.\"<span class='author'>Dalai Lama</span>",
        "\"The personal life deeply lived always expands into truths beyond itself.\"<span class='author'>Anais Nin</span>", ,
        "\"It is easy to believe we are each waves and forget we are also the ocean.\"<span class='author'>Jon J. Muth</span>",
        "\"In the midst of chaos, there is also opportunity.\"<span class='author'>Sun Tzu</span>",
        "\"You look at where you’re going and where you are and it never makes sense, but then you look back at where you’ve been and a pattern seems to emerge.\" <span class='author'>Robert M. Pirsig</span>",
        "\"As a bee gathering nectar does not harm or disturb the color & fragrance of the flower; so do the wise move through the world.\" <span class='author'>Buddha</span>",
        "\"The whole moon and the entire sky are reflected in one dewdrop on the grass.\"<span class='author'> Dogen</span>",
        "\"If your compassion does not include yourself, it is incomplete.\"<span class='author'>Buddha</span>",
        "\"They call it ‘peace of mind’ but maybe it should be called ‘peace from mind.'\"<span class='author'>Naval Ravikant</span>",
        "\"If you think you are too small to make a difference, try sleeping with a mosquito.\"<span class='author'>Dalai Lama</span>",
        "\"A man is great not because he hasn’t failed; a man is great because failure hasn’t stopped him.\" <span class='author'>Confucius</span>",
        "\"Unhappiness and rain just drift by and are gone, they are visitors.\" <span class='author'>John Aske</span>",
        "\"When you catch yourself slipping into a pool of negativity, notice how it derives from nothing other than resistance to the current situation.\" <span class='author'>Donna Quesada</span>"
    ],
    backgrounds: [
        // ALL IMAGES COURTESY OF UNSPLASH.COM
        { bgSource: "<img src='./images/carolinie-cavalli-99609-unsplash.jpg' alt='Tranquil and foggy waterscape with mountains in the distance.'>" },
        { bgSource: "<img src='./images/cristina-gottardi-564469-unsplash.jpg' alt='Snowy landscape with single tree in the distance.'>" },
        { bgSource: "<img src='./images/darran-shen-589140-unsplash.jpg' alt='Bird soaring in the sky.'>" },
        { bgSource: "<img src='./images/davies-designs-379022-unsplash.jpg' alt='Beautiful whispy clouds'>" },
        { bgSource: "<img src='./images/dominik-schroder-14534-unsplash.jpg' alt='Thick clouds seen from above, as if standing on a mountaintop.'>" },
        { bgSource: "<img src='./images/fabrizio-conti-499616-unsplash.jpg' alt='Giant white sand dunes against a blue cloudy sky.'>" },
        { bgSource: "<img src='./images/joel-peel-131757-unsplash.jpg' alt='Green ivy creeping up a white exterior wall.'>" },
        { bgSource: "<img src='./images/kumiko-shimizu-629602-unsplash.jpg' alt='Tranquil washing up on sandy shore.'>" },
        { bgSource: "<img src='./images/masaaki-komori-597700-unsplash.jpg' alt='Bright golden yellow flowers.'>" },
        { bgSource: "<img src='./images/masaaki-komori-603921-unsplash.jpg' alt='Cherry blossom branches against a bright white background.'>" },
        { bgSource: "<img src='./images/masaaki-komori-654069-unsplash.jpg' alt='Clear blue tropical waves lapping up on white sand shore.'>" },
        { bgSource: "<img src='./images/michel-paz-330665-unsplash.jpg' alt='Dainty white flowers in a meadow.'>" },
        { bgSource: "<img src='./images/nordwood-themes-490552-unsplash.jpg' alt='White coffe cup sitting on a clean white desk.'>" },
        { bgSource: "<img src='./images/paul-earle-39322-unsplash.jpg' alt='Blue colored mountain ridges sticking out through thin white fog.'>" },
        { bgSource: "<img src='./images/scott-webb-662577-unsplash.jpg' alt='Two olive-green-colored leaves against a white background'>" },
        { bgSource: "<img src='./images/sharon-mccutcheon-576867-unsplash.jpg' alt='Bokeh photography of lights.'>" },
        { bgSource: "<img src='./images/simon-matzinger-392063-unsplash.jpg' alt='Tall and dainty grasses and flowers.'>" },
        { bgSource: "<img src='./images/thomas-kinto-1057481-unsplash.jpg' alt='A blurry green and pink background.'>" },
        { bgSource: "<img src='./images/vitalis-hirschmann-504920-unsplash.jpg' alt='Dark evergreen forest peaking out from thick fog and clouds.'>" },
        { bgSource: "<img src='./images/bench-accounting-49909-unsplash.jpg' alt='Minimalist, bright office with desk against wall.'>" },
    ]
}
// END APP.DATA ****