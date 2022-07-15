$(document).ready(function () {
    //jQuery function for creating accordian
    $('.accordian').click(function () {

        //toggle indicator from + to - & from - to +
        $(this).closest('.accordian').find('.indicator').text($(this).find('.indicator').text() == '+' ? '-' : '+');
        //toggle content in accordian
        //toggle happens with annimation at 0.3 sec.
        $(this).find('.content').toggle(300);

    });
   
});