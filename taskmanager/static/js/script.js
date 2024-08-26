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
    let selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);

    // collapsible init.
    let collapsible = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapsible);

});