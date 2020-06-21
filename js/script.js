$(document).ready(function(){
    $('.box').on('click',function(){
        var classNames=$(this).attr("class").split(" ");
        $("."+classNames[1]).css("background-color", "red");
    });
});

$('p').click(function(){
    $(this).slideToggle('slow');
});

$('.btn').mouseenter(function(){
    $(this).removeClass('makeRed').addClass('makeBlue');
})
$('.btn').mouseleave(function(){
    $(this).removeClass('makeBlue').addClass('makeRed');
})

