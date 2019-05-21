$(document).ready(function () {

    /* Allow the User to Set Font Style
     *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  */

    var font_style = getQueryVariable('style');
    if (font_style) {
        selectFontStyle(font_style);
    }
    $('.font-styles li').click(function () {
        var font_style = $(this).attr('class');
        selectFontStyle(font_style);
        setQueryVariable('style', font_style);
    });
    function selectFontStyle(font_style) {
        $('#custom-name-text').attr({ 'class': font_style });
        $('.font-styles li.' + font_style).siblings().removeClass('selected');
        $('.font-styles li.' + font_style).addClass('selected');
    }


    /* Allow the User to Set Font Size
     *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  */

    var font_size = getQueryVariable('style');
    if (font_size) {
        selectFontStyle(font_size);
    }
    $('#font-size-range').on("input", function () {
        var font_size = $(this).val() + 'em';
        selectFontSize(font_size);
        setQueryVariable('size', font_size);
    });
    function selectFontSize(font_size) {
        $('.custom-name-wrapper').css('font-size', font_size);
    }

    $('.label-text:first-child .margin-control i').click(function () {
        var margin_bottom = parseInt($(this).parents('.label-text').css('margin-bottom'));
        if ($(this).hasClass('move-down')) {
            margin_bottom--;
        } else {
            margin_bottom++;
        }
        $(this).parents('.label-text').css('margin-bottom', margin_bottom + 'px');
    });
    $('.label-text:last-child .margin-control i').click(function () {
        var margin_top = parseInt($(this).parents('.label-text').css('margin-top'));
        if ($(this).hasClass('move-down')) {
            margin_top--;
        } else {
            margin_top++;
        }
        $(this).parents('.label-text').css('margin-top', margin_top + 'px');
    });
});

function setQueryVariable(variable, value) {

    var query = window.location.search.substring(1);
    var vars = query.split("&");
    var replaced = false;
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            pair[1] == value;
            vars[i] = pair.join("=");
            replaced = true;
        }
    }
    query = vars.join("&");

    if (!replaced) {
        query += variable + '=' + value;
    }
    history.pushState(null, null, query);
}
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return (false);
}

