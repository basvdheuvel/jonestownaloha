(function () {
    // Hide shows that took place before yesterday.
    let show_limit = new Date(new Date() - 24 * 60 * 60 * 1000);
    show_limit.setHours(0, 0, 0, 0);

    // Filter the li elements.
    let past_shows = $$('ul#shows li').filter(function (li) {
        return (new Date(li.dataset.date) < show_limit);
    });

    // Remove them from the DOM.
    past_shows.remove();

    let past_shows_ul = $$('ul#past-shows')[0];
    // Add the shows to a past shows list in reverse order.
    let last_show = null;
    for (let show of past_shows) {
        past_shows_ul.insertBefore(show, last_show);
        last_show = show;
    }


    $$('a#openen').addEventListener('click', function () {
        let clss = past_shows_ul.className.split(' ');
        let open_cls_idx = clss.indexOf('open');
        if (open_cls_idx === -1) {
            clss.push('open');
        }
        else {
            clss.splice(open_cls_idx, 1);
        }
        past_shows_ul.className = clss.join(' ');
    });
})();
