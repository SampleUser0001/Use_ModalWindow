'use strict'
$(() => {
    $("#modal-show").click(() => {
        $('.modal-window').fadeIn()
    })
    $("#modal-hide").click(() => {
        $('.modal-window').fadeOut();
    })
});