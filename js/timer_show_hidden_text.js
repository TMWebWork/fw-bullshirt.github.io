export {showPromoText as default}

const showPromoText = promosText => {
    $("#promo_text").html(promosText[0]);
    $("#more_about_promo").click(function() {
        $("#promo_text").html(promosText[1]);
        $("#less_about_promo").show();
        $(this).hide();
    })
    $("#less_about_promo").click(function () {
        $("#promo_text").html(promosText[0]);
        $("#more_about_promo").show();
        $(this).hide();
    })
}