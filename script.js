$(".secondpage").hide();
$(".error").hide();
$(".succes").hide();
$(".reset").fadeOut();


$(".to").click(function() {
    $(".secondpage").show();
    $(".firstpage").hide();
});

$(".submit").click(function() {
    $(".secondpage").hide();
    let thename = $(".name").val();
    let thesteps = $(".steps").val();
    let total = (thesteps * 365) * 29;

    $(".reset").click(function() {
        location.reload();
    });

    if (thename === "" || thesteps < 0 || NaN) {

        $(".final").text("You did it wrong. Try Again.");
        $(".error").show();
        $("body").css("background", "red");
        $(".reset").show();

    } else {
        $(".final").text("By the year 2050, you, " + thename + ", will have taken " + total + " steps");
        $(".succes").show();
        $(".reset").show();
        let imageUrl = "https://ak.picdn.net/shutterstock/videos/7440292/thumb/10.jpg";
        $("body").css("background-image", "url(" + imageUrl + ")");
    }
});