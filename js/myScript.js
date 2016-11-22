$(document).ready(function() {

    var elt = $(this);

    // vert
    $('section article fieldset div div.green').click(function() {
        $('#reception').val($(this)).css('background-image','radial-gradient(darkgreen, white)');
        $('header h1').val($(this)).css('color','darkgreen');
        $('section article h2').val($(this)).html('Vert sélectionné');
    });

    // bleu
    $('section article fieldset div div.blue').click(function() {
        $('#reception').val($(this)).css('background-image','radial-gradient(lightblue , white)');
        $('header h1').val($(this)).css('color','darkblue');
        $('section article h2').val($(this)).html('Bleu sélectionné');
    });

    // rouge
    $('section article fieldset div div.red').click(function() {
        $('#reception').val($(this)).css('background-image','radial-gradient(darkred, white)');
        $('header h1').val($(this)).css('color','darkred');
        $('section article h2').val($(this)).html('Rouge sélectionné');
    });

    // jaune
    $('section article fieldset div div.yellow').click(function() {
        $('#reception').val($(this)).css('background-image','radial-gradient(gold, white)');
        $('header h1').val($(this)).css('color','yellow');
        $('section article h2').val($(this)).html('Jaune sélectionné');
    });

    // orange
    $('section article fieldset div div.orange').click(function() {
        $('#reception').val($(this)).css('background-image','radial-gradient(orange, white)');
        $('header h1').val($(this)).css('color','orange');
        $('section article h2').val($(this)).html('Orange sélectionné');
    });

    // rose
    $('section article fieldset div div.pink').click(function() {
        $('#reception').val($(this)).css('background-image','radial-gradient(hotpink, white)');
        $('header h1').val($(this)).css('color','hotpink');
        $('section article h2').val($(this)).html('Rose sélectionné');
    });

    // violet
    $('section article fieldset div div.purple').click(function() {
        $('#reception').val($(this)).css('background-image','radial-gradient(purple, white)');
        $('header h1').val($(this)).css('color','purple');
        $('section article h2').val($(this)).html('Violet sélectionné');
    });

    // bleu ciel
    $('section article fieldset div div.cyan').click(function() {
        $('#reception').val($(this)).css('background-image','radial-gradient(cyan, white)');
        $('header h1').val($(this)).css('color','cyan');
        $('section article h2').val($(this)).html('Cyan sélectionné');
    });

    // blanc
    $('section article fieldset div div.white').click(function() {
        $('#reception').val($(this)).css('background-image','radial-gradient(ghostwhite, white)');
        $('header h1').val($(this)).css('color','ghostwhite');
        $('section article h2').val($(this)).html('Blanc sélectionné');
    });

    // gris
    $('section article fieldset div div.grey').click(function() {
        $('#reception').val($(this)).css('background-image','radial-gradient(darkgrey, white)');
        $('header h1').val($(this)).css('color','darkgrey');
        $('section article h2').val($(this)).html('Gris sélectionné');
    });
   

}); // Fin JQuery