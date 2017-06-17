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

    $$('a#open-past-shows').addEventListener('click', function () {
        if (toggle_class(past_shows_ul, 'open')) {
            this.text = 'Hide past shows';
        }
        else {
            this.text = 'Show past shows';
        }
    });

    let past_releases_div = $$('div#past-releases')[0];
    $$('a#open-past-releases').addEventListener('click', function () {
        if (toggle_class(past_releases_div, 'open')) {
            this.text = 'Hide past releases';

            // Activate the iframes.
            let iframes = $$('iframe.player', past_releases_div);
            for (let iframe of iframes) {
                if (iframe.src === '') {
                    iframe.src = iframe.dataset.src;
                }
            }
        }
        else {
            this.text = 'Show past releases';
        }
    });

    // Toggle class.
    // Returns true if added, false if removed.
    function toggle_class(el, cls) {
        let clss = el.className.split(' ');
        let cls_idx = clss.indexOf(cls);
        let cls_add = cls_idx === -1;

        if (cls_add) {
            clss.push(cls);
        }
        else {
            clss.splice(cls_idx, 1);
        }
        el.className = clss.join(' ');

        return cls_add;
    }
})();
