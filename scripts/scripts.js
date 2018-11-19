// ALL IMAGES COURTESY OF UNSPLASH.COM

const app = {};

app.data = {
    quotes: [
        "<p>\"Insight emerges out of silence.\"<span class='author'>B. D. Schiers</span></p>",
        "<p>\"If you let go a little you will have a little happiness. If you let go completely you will be free.\"<span class='author'>Ajahn Chah</span></p>",
        "<p>\"The wild geese do not intend to cast their reflections.The water has no mind to receive their images.\"<span class='author'>Zen Proverb</span></p>",
        "<p>\"You are exactly where you need to be.\"<span class='author'>Unknown</span></p>",
        "<p>\"Knowledge is learning something everyday. Wisdom is letting go of something everyday.\"<span class='author'>Zen Proverb</span></p>",
        "<p>\“Our greatest glory is not in never falling, but in rising every time we fall.”\<span class='author'>Confucius</span></p>",
        "<p>\“It does not matter how slowly you go as long as you do not stop.”\<span class='author'>Confucius</span></p>",
        "<p>\"The true miracle is not walking on water or walking in air, but simply walking on this earth.\" <span class='author'>Thích Nhất Hạnh</span></p>",
        "<p>\"One must be deeply aware of the impermanence of the world.\"<span class='author'>Dogen</span></p>",
        "<p>\"Have good trust in yourself… not in the One that you think you should be, but in the One that you are.\"<span class='author'>Maezumi Roshi</span></p>",
        "<p>\"Who you are is always right.\"<span class='author'>Ming-Dao Deng</span></p>",
        "<p>\"The search for happiness is one of the chief sources of unhappiness.\"<span class='author'>Eric Hoffer</span></p>",
        "<p>\"Everything that happens to you is a form of instruction if you pay attention.\"<span class='author'>Robert Greene</span></p>",
        "<p>\"Relax. Nothing’s missing.\"<span class='author'>Maxime Lagacé</span></p>",
        "<p>\"Life is a balance of holding on and letting go.\"<span class='author'>Rumi</span></p>",
        "<p>\"Wherever you are, be there totally.\"<span class='author'>Eckhart Tolle</span></p>",
        "<p>\"One loses joy and happiness in the attempt to possess them.\"<span class='author'>Masanobu Fukuoka</span></p>",
        "<p>\"Muddy water is best cleared by leaving it alone.\"<span class='author'>Alan Watts</span></p>",
        "<p>\"When you realize nothing is lacking, the whole world belongs to you.\"<span class='author'>Lao Tzu</span></p>",
        "<p>\"Treat every moment as your last. It is not preparation for something else.\"<span class='author'>Shunryu Suzuki</span></p>",
        "<p>\"Nature does not hurry, yet everything is accomplished.\"<span class='author'>Lao Tzu</span></p>",
        "<p>\"Be kind whenever possible. It is always possible.\"<span class='author'>Dalai Lama</span></p>",
        "<p>\"Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.\"<span class='author'>Buddha</span></p>",
        "<p>\"To seek is to suffer. To seek nothing is bliss.\"<span class='author'>Bodhidharma</span></p>",
        "<p>\"All things are difficult before they are easy.\"<span class='author'>Thomas Fuller</span></p>",
        "<p>\"Act without expectation.\"<span class='author'>Lao Tzu</span></p>",
        "<p>\"Roads were made for journeys not destinations.\"<span class='author'>Confucius</span></p>",
        "<p>\"Sleep is the best meditation.\"<span class='author'>Dalai Lama</span></p>",
        "<p>\"The personal life deeply lived always expands into truths beyond itself.\"<span class='author'>Anais Nin</span></p>",,
        "<p>\"It is easy to believe we are each waves and forget we are also the ocean.\"<span class='author'>Jon J. Muth</span></p>",
        "<p>\"In the midst of chaos, there is also opportunity.\"<span class='author'>Sun Tzu</span></p>",
        "<p>\"You look at where you’re going and where you are and it never makes sense, but then you look back at where you’ve been and a pattern seems to emerge.\" <span class='author'>Robert M. Pirsig</span></p>",
        "<p>\"There is no need for temples; no need for complicated philosophy. Our own brain, our own heart is our temple; the philosophy is kindness.\"<span class='author'>Dalai Lama</span></p>",
        "<p>\"As a bee gathering nectar does not harm or disturb the color & fragrance of the flower; so do the wise move through the world.\" <span class='author'>Buddha</span></p>",
        "<p>\"The whole moon and the entire sky are reflected in one dewdrop on the grass.\"<span class='author'> Dogen</span></p>",
        "<p>\"If your compassion does not include yourself, it is incomplete.\"<span class='author'>Buddha</span></p>",
        "<p>\"They call it ‘peace of mind’ but maybe it should be called ‘peace from mind.'\"<span class='author'>Naval Ravikant</span></p>",
        "<p>\"If you think you are too small to make a difference, try sleeping with a mosquito.\"<span class='author'>Dalai Lama</span></p>",
        "<p>\"A man is great not because he hasn’t failed; a man is great because failure hasn’t stopped him.\" <span class='author'>Confucius</span></p>",
        "<p>\"Unhappiness and rain just drift by and are gone, they are visitors.\" <span class='author'>John Aske</span></p>",
        "<p>\"When you catch yourself slipping into a pool of negativity, notice how it derives from nothing other than resistance to the current situation.\" <span class='author'>Donna Quesada</span></p>"   
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
        { bgSource: "<img src='./images/tristan-taussac-356484-unsplash.jpg' alt='Snowy mountain peaks at twilight, the moon a fading crescent above. '>" },
        { bgSource: "<img src='./images/vitalis-hirschmann-504920-unsplash.jpg' alt='Dark evergreen forest peaking out from thick fog and clouds.'>" },
        { bgSource: "<img src='./images/bench-accounting-49909-unsplash.jpg' alt='Minimalist, bright office with desk against wall.'>" },
    ]
}

app.init = function() {
    // PAGE LOAD FADE IN....
    $('main').css('display', 'none');
    $('main').fadeIn(2000);

    // ON BUTTON CLICK, execute random quote and bg functions, IF not locked... 
    $("button").on("click", function() {
        console.log("click");
           
        if (app.quoteLocked === false) {
        $(".quote-result").fadeOut(1200, function() {
            app.getRandomQuote();
            $(".quote-result").fadeIn(2000)
        })}

        
        // if (app.bgLocked === false) {
        //     $("main").fadeOut(1200, function() {
        //         app.getRandomBackground();
        //     })
        //     setTimeout(function(){
        //         $("main").fadeIn(1200);
        //     }, 900);
        // }


        if (app.bgLocked === false) {
            $(".background-image").fadeOut(1200, function() {
                console.log("fadeout");
                app.getRandomBackground();
                setTimeout( function() {
                    $(".background-image").fadeIn(2000);
                }, 500);
                // $(".background-image").fadeIn(1200);
                // console.log("fadin");
            })
        }
    }); // END ON CLICK function
} // END INIT FUNCTION  ***********f*****

// if quote not locked, retreive random quote, insert into quote-wrapper div
app.quoteLocked = false;
app.getRandomQuote = function () {
    // if (app.quoteLocked === false) {
        const randomQuote = app.data.quotes[Math.floor(Math.random() * app.data.quotes.length)];
        $(".quote-result").html(randomQuote);
    // }
}

// if background not locked, retreive random bg, update bg-image.
app.bgLocked = false;
app.getRandomBackground = function () {
    console.log("background called");
    if (app.bgLocked === false) {
        app.randomBgSrc = app.data.backgrounds[Math.floor(Math.random() * app.data.backgrounds.length)].bgSource;


        $(".background-image").html(`${app.randomBgSrc}`);
        
        // $(".background-image").css("background-image", `linear-gradient(to top, rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url(${app.randomBgSrc})`);
        console.log(app.randomBgSrc);
    }
}

// on the click of background lock icon. Set the "bgLocked" variable/flag to true.
$(".bg-lock-link").on("click", function () {
    $(this).toggleClass("active");
    app.bgLocked = !app.bgLocked;
    return app.bgLocked;
});

// on the click of quote lock icon. Set the "quoteLocked" variable/flag to true.
$(".quote-lock-link").on("click", function () {
    $(this).toggleClass("active");
    app.quoteLocked = !app.quoteLocked;
    return app.bgLocked;
});  

$(function() {
    app.init();
});





// CODE TO LOOK AT LATER
// STRETCH GOALS OR TRY GOALS


// GET input from color thingy (val)

// $("form").on("submit", function (event) {
//     event.preventDefault();
//     const userColor = $("input[type='color']").val();
//     console.log('heh', userColor);
// });    


// call changeImageAndBg with new default changing gradient
        // GET input from color thingy (val)
        // figure out what bg we are on (WHEN LOCKEEd)
        // IN button.on Click ,call changeImageAndBg with new default Changing Graident


// function changeColorAndBg(linearGradient, imageSource) {
//     console.log("change colour called");
//     $("main").css("background-image", `${linearGradient}, url(${imageSource})`);
// }


// let defaultAndChangingGradient = "linear-gradient(to top, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3))";
// // let changingBackground = "../images/sarah-dorweiler-357715-unsplash.jpg";

// inside get random bg function...
// changeColorAndBg(defaultAndChangingGradient, randomBgSrc);c