
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
        scrolling: 'no',
        margin: 0,
        minWidth: 280,
        helpers		: {
            title	: { type : 'inside' },
            buttons	: {}
        }
    });

    function testAnim(x) {
        $('.modal .modal-dialog').attr('class', 'modal-dialog  modal-dialog-centered ' + x + '  animated');
    };
    $('#modal-contact-form').on('show.bs.modal', function (e) {
        testAnim("fadeIn");
    });
    $('#modal-contact-form').on('hide.bs.modal', function (e) {
        testAnim("fadeOut");
    })

});

