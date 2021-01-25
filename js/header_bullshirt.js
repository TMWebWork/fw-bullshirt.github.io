    export { mobileNav as default }
    const mobileNav = (button, menu) => {
        let t = false;
        const m = menu;
        const b = button;
        const W = `brightness(100%) saturate(100%)`;
        const R = `invert(87%) sepia(91%) saturate(4083%)
        hue-rotate(356deg) brightness(103%) contrast(104%)`
        const paint = c => b.css('filter', c);
        const t_menu = () => {
            t = !t;
            if (!t) paint(W);
            else paint(R);
            $(m).slideToggle("slow");
        }
        $(b).hover(() => paint(R), () => { if (!t) paint(W) }).click(t_menu);
        $(document).click(e => { if (t && e.target.className != 't396__elem menu-button') t_menu() })
    }