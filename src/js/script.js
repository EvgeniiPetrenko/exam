(function () {
    var me = {};
    var form = document.querySelector('.form-container')


    me.open = function () {
        form.classList.remove('is-heden');

    };

    me.close = function () {
        form.classList.add('is-heden');
    };
    window.frorm = me;
}());



(function () {
var openForbotton = document.querySelector('.arrow_down');

if(openForbotton){
    openForbotton.addEventListener('click', function () {
        form.open();

    })
}




}());

jQuery(document).ready(function() {
    jQuery('.about').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated lightSpeedIn', // Class to add to the elements when they are visible
        offset: 100
    });
    jQuery('.container').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInLeftBig', // Class to add to the elements when they are visible
        offset: 100
    });
});