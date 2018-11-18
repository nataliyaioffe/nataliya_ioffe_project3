const app = {};

app.data = {
    quotes: [
        "<p>\"Insight emerges out of silence.\"<span>B. D. Schiers</span></p>",
        "<p>\"If you let go a little you will have a little happiness. If you let go completely you will be free.\"<span>Ajahn Chah</span></p>",
        "<p>\"The wild geese do not intend to cast their reflections.The water has no mind to receive their images.\"<span>Zen Proverb</span></p>",
        "<p>\"You are exactly where you need to be.\"<span>Unknown</span></p>",
        "<p>\"Knowledge is learning something everyday. Wisdom is letting go of something everyday.\"<span>Zen Proverb</span></p>",
        "<p>\“Our greatest glory is not in never falling, but in rising every time we fall.”\<span>Confucius</span></p>",
        "<p>\“It does not matter how slowly you go as long as you do not stop.”\<span>Confucius</span></p>",
        "<p>\"The true miracle is not walking on water or walking in air, but simply walking on this earth.\" <span>Thích Nhất Hạnh</span></p>",
        // "<p>\"One must be deeply aware of the impermanence of the world.\"<span>Dogen</span></p>",
        // "<p>\"Have good trust in yourself… not in the One that you think you should be, but in the One that you are.\"<span>Maezumi Roshi</span></p>",
        // "<p>\"Who you are is always right.\"<span>Ming-Dao Deng</span></p>",
        // "<p>\"The search for happiness is one of the chief sources of unhappiness.\"<span>Eric Hoffer</span></p>",
        // "<p>\"Everything that happens to you is a form of instruction if you pay attention.\"<span>Robert Greene</span></p>",
        // "<p>\"Relax. Nothing’s missing.\"<span>Maxime Lagacé</span></p>",
        // "<p>\"Life is a balance of holding on and letting go.\"<span>Rumi</span></p>",
        // "<p>\"Wherever you are, be there totally.\"<span>Eckhart Tolle</span></p>",
        // "<p>\"One loses joy and happiness in the attempt to possess them.\"<span>Masanobu Fukuoka</span></p>",
        // "<p>\"Muddy water is best cleared by leaving it alone.\"<span>Alan Watts</span></p>",
        // "<p>\"When you realize nothing is lacking, the whole world belongs to you.\"<span>Lao Tzu</span></p>",
        // "<p>\"Zen is a path of liberation. It liberates you. It is freedom from the first step to the last. You are not required to follow any rules; you are required to find out your own rules and your own life in the light of awareness.\"<span>Osho</span></p>",
        // "<p>\"Treat every moment as your last. It is not preparation for something else.\"<span>Shunryu Suzuki</span></p>",
        // "<p>\"Nature does not hurry, yet everything is accomplished.\"<span>Lao Tzu</span></p>",
        // "<p>\"Be kind whenever possible. It is always possible.\"<span>Dalai Lama</span></p>",
        // "<p>\"Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.\"<span>Buddha</span></p>",
        // "<p>\"To seek is to suffer. To seek nothing is bliss.\"<span>Bodhidharma</span></p>",
        // "<p>\"All things are difficult before they are easy.\"<span>Thomas Fuller</span></p>",
        // "<p>\"Act without expectation.\"<span>Lao Tzu</span></p>",
        // "<p>\"Roads were made for journeys not destinations.\"<span>Confucius</span></p>",
        // "<p>\"Sleep is the best meditation.\"<span>Dalai Lama</span></p>",
        // "<p>\"The personal life deeply lived always expands into truths beyond itself.\"<span>Anais Nin</span></p>",,
        // "<p>\"It is easy to believe we are each waves and forget we are also the ocean.\"<span>Jon J. Muth</span></p>",
        // "<p>\"In the midst of chaos, there is also opportunity.\"<span>Sun Tzu</span></p>",
        // "<p>\"You look at where you’re going and where you are and it never makes sense, but then you look back at where you’ve been and a pattern seems to emerge.\" <span>Robert M. Pirsig</span></p>",
        // "<p>\"There is no need for temples; no need for complicated philosophy. Our own brain, our own heart is our temple; the philosophy is kindness.\"<span>Dalai Lama</span></p>",
        // "<p>\"As a bee gathering nectar does not harm or disturb the color & fragrance of the flower; so do the wise move through the world.\" <span>Buddha</span></p>",
        // "<p>\"The whole moon and the entire sky are reflected in one dewdrop on the grass.\"<span> Dogen</span></p>",
        // "<p>\"If your compassion does not include yourself, it is incomplete.\"<span>Buddha</span></p>",
        // "<p>\"They call it ‘peace of mind’ but maybe it should be called ‘peace from mind.\"<span>Naval Ravikant</span></p>",
        // "<p>\"If you think you are too small to make a difference, try sleeping with a mosquito.\" - Dalai Lama</p>",
        // "<p>\"A man is great not because he hasn’t failed; a man is great because failure hasn’t stopped him.\" <span>Confucius</span></p>",
        // "<p>\"Unhappiness and rain just drift by and are gone, they are visitors.\" <span>John Aske</span></p>",
        // "<p>\"When you catch yourself slipping into a pool of negativity, notice how it derives from nothing other than resistance to the current situation.\" <span>Donna Quesada</span></p>"   
    ],
    backgrounds: [
        { bgSource: "<img src='./images/sarah-dorweiler-357715-unsplash.jpg' alt='RANDOM ALT1 '>"},
        { bgSource: "<img src='./images/igor-son-320878-unsplash.jpg' alt='RANDOM ALT 2'>"},
        { bgSource: "<img src='./images/tristan-taussac-356484-unsplash.jpg' alt='RANDOM ALT' 3>"},
        { bgSource: "<img src='./images/masaaki-komori-603921-unsplash.jpg' alt='RANDOM ALT TEXT 4'>"},
        { bgSource: "<img src='./images/quino-al-103766-unsplash.jpg' alt='RANDOM ALT TEXT 5'>"},
        { bgSource: "<img src='./images/cristina-gottardi-564469-unsplash.jpg' alt='RANDOM ALT TEXT 6'>"},
        { bgSource: "<img src='./images/igor-son-320878-unsplash.jpg'' alt='RANDOM ALT TEXT 7'>"},
        { bgSource: "<img src='./images/darran-shen-589140-unsplash.jpg' alt='RANDOM ALT TEXT 8'>"},
        { bgSource: "<img src='./images/kara-eads-1080482-unsplash.jpg' alt='RANDOM ALT TEXT 9'>"},
        { bgSource: "<img src='./images/max-di-capua-1064162-unsplash.jpg' alt='RANDOM ALT TEXT 10'>"},
        { bgSource: "<img src='./images/elin-tabitha-1092029-unsplash.jpg' alt='RANDOM ALT TEXT 11'>"},
        { bgSource: "<img src='./images/jeremy-bishop-338661-unsplash.jpg' alt='RANDOM ALT TEXT 12'>"}
    ]
}

app.init = function() {
    // PAGE LOAD FADE IN....
    $('main').css('display', 'none');
    $('main').fadeIn(1000);

    // ON BUTTON CLICK, execute random quote and bg functions, IF not locked... 
    $("button").on("click", function() {
        console.log("click");
           
        if (app.quoteLocked === false) {
        $(".quote-result").fadeOut(1200, function() {
            app.getRandomQuote();
            $(".quote-result").fadeIn(1200)
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
                app.getRandomBackground();
                $(".background-image").fadeIn(1200);
            })
        }
    }); // END ON CLICK function
} // END INIT FUNCTION  ****************

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