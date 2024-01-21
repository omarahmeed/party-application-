$(".openNav").click(function () {
    $(".side-bar").animate({ width: '250px' }, 50)
    $(".openNav").animate({ marginLeft: '250px' }, 50)
})

$(".colse-btn").click(function () {

    $(".side-bar").animate({ width: '0' }, 50)
    $(".openNav").animate({ marginLeft: '0' }, 50)


})




















$(".firsth").click(function () {
    $(".first").slideToggle(500);
    $(".second, .third, .four").slideUp(500);

})
$(".secondh").click(function () {
    $(".second").slideToggle(500);
    $(".first, .third, .four").slideUp(500);

})
$(".thirdh").click(function () {
    $(".third").slideToggle(500);
    $(".second, .first, .four").slideUp(500);

})
$(".fourh").click(function () {
    $(".four").slideToggle(500);
    $(".second, .third, .first").slideUp(500);

})






let maxlength = 100;

$('textarea').keyup(function () {
    let length = $(this).val().length;
    let AmountLeft = maxlength - length
    if (AmountLeft <= 0) {

        $("#remainingchars").text("u can't write more");
    } else {

        $("#remainingchars").text(AmountLeft)
    }

});


let eventTime = new Date("2025-06-30T00:00:00");

function updateCountdown() {
    let currentTime = new Date();
    let timeDifference = eventTime - currentTime;

    if (timeDifference <= 0) {

        clearInterval(interval);
        console.log("Event has occurred!");
        return;
    }

    let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Update the HTML with the new values
    $(".div span:eq(0)").text(days);
    $(".div span:eq(1)").text(hours);
    $(".div span:eq(2)").text(minutes);
    $(".div span:eq(3)").text(seconds);
}
let interval = setInterval(updateCountdown, 1000);

