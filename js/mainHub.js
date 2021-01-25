import showPromoText from './timer_show_hidden_text.js'
import mobileNav from './header_bullshirt.js'
import placeStars from './Arrow_Star.js'
import startTimer from './Timer.js'
$(() => {
    showPromoText([`Мы оформим вам бесплатную<br>доставку в любую точку Украины...`,
        `Мы оформим Вам бесплатную доставку в любую точку Украины,
        при  условии приобретения 3 любых рубашек на выбор,
        от нашей компании BullShirt! Акция действует 
        только при оформлении покупки через наш сайт!
    `
    ]);
    mobileNav($('.menu-button'), $('.burger_menu'))
    placeStars();
    startTimer();
})