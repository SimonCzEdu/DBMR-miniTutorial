document.addEventListener('DOMContentLoaded', function () {
    // sidenav initialisation
    let sidevnav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidevnav);

    // datepicker init.
    let datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
        format: "dd mmmm, yyyy",
        i18n: {done: "Select"}
    });

    // select init.
    var selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);

});