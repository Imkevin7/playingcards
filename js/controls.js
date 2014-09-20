function ups(a, b) {
    var upss = '-63px';
    $(a).animate({
        top: upss
    }, 'fast');
    $(b).animate({
        top: upss
    }, 'fast');
}

function downs(a, b) {
    $(a).animate({
        top: '0px'
    }, 'slow');
    $(b).animate({
        top: '0px'
    }, 'slow');
}

$(".button").mouseenter(function () {
    var ids = $(this).attr('id');
    switch (ids) {
        case 'fo':
            var f = '.first';
            var s = '.second';
            ups(f, s);
            break;
        case 'so':
            var t = '.three';
            var f = '.four';
            ups(t, f);
            break;
        case 'to':
            var f = '.five';
            var s = '.six';
            ups(f, s);
            break;
        case 'fto':
            var a = '.seven';
            var b = '.eight';
            ups(a, b);
            break;
    }

}).mouseleave(function () {
    var ids = $(this).attr('id');
    switch (ids) {
        case 'fo':
            var f = '.first';
            var s = '.second';
            downs(f, s);
            break;
        case 'so':
            var t = '.three';
            var f = '.four';
            downs(t, f);
            break;
        case 'to':
            var f = '.five';
            var s = '.six';
            downs(f, s);
            break;
        case 'fto':
            var a = '.seven';
            var b = '.eight';
            downs(a, b);
            break;
    }
});

function bCard() {
    var card = $(this).find('span').text();
    $('.hidden').html("<p class='cc'>" + card + "</p>");
}
$('.button').on('click', bCard);