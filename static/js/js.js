(function () {
    let shows = $$('ul#shows li');

    let show_limit = new Date(new Date() - 24 * 60 * 60 * 1000);
    show_limit.setHours(0, 0, 0, 0);
    console.log(show_limit);
    for (let show of shows) {
        if (new Date(show.dataset.date) < show_limit) {
            console.log(show);
        }
    }
})();
