
import bootstrap from "bootstrap";
require('fancybox')($);

$(window).on('load', function() {
    $('.loader').css('display', 'none');
});

$(document).ready(function(){
    $(".fancybox").fancybox({
        prevEffect: 'none',
        nextEffect: 'none',
        openEffect: 'fade',
        closeEffect: 'fade',
        closeBtn: false,
        margin: 0,
        minWidth: 280,
        helpers		: {
            title	: { type : 'inside' },
            buttons	: {}
        }
    });
});

