$(document).ready(function() {
    var selecting = false;
    var select;

    var name = '';
    var gender = '';
    $('input[name="name"]').val(name);
    $('.select[name="gender"]').val(gender);

    $('.select').click(function(event) {
        event.preventDefault();
        if (!selecting) {
            select = $(this).attr('name');
            selecting = true;

            $(this).addClass('active');
            $(this).siblings('div.div').show();
        }
    });

    $('.cell').click(function(event) {
        event.preventDefault();
        $(this).parent('div.div').hide();
        var tmp = $(this).attr('name');

        console.log(tmp);

        $('.select').removeClass('active');
        $('.select[name="gender"]').val(tmp);
        
        selecting = false;
    });
});