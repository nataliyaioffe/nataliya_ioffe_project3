const app = {};

app.data = {
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
        { bgSource: "./images/sarah-dorweiler-357715-unsplash.jpg", },
        { bgSource: "./images/igor-son-320878-unsplash.jpg", },
        { bgSource: "./images/tristan-taussac-356484-unsplash.jpg", },
        { bgSource: "./images/masaaki-komori-603921-unsplash.jpg", },
        { bgSource: "./images/quino-al-103766-unsplash.jpg", },
        { bgSource: "./images/max-di-capua-1064162-unsplash.jpg", },
        { bgSource: "./images/cristina-gottardi-564469-unsplash.jpg", },
        { bgSource: "./images/jeremy-bishop-338661-unsplash.jpg", },
        { bgSource: "./images/igor-son-320878-unsplash.jpg", },
        { bgSource: "./images/elin-tabitha-1092029-unsplash.jpg", },
        { bgSource: "./images/darran-shen-589140-unsplash.jpg", }
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
        // const randomBgSrc = app.data.backgrounds[Math.floor(Math.random() * app.data.backgrounds.length)].bgSource;
        app.randomBgSrc = app.data.backgrounds[Math.floor(Math.random() * app.data.backgrounds.length)].bgSource;
        $(".background-image").css("background-image", `url(${app.randomBgSrc})`);
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