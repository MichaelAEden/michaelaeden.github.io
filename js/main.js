console.log("COMPILES")

$(document).ready(function() {
	$('div.project').hover(mouseEnterIcon, mouseLeaveIcon)
})

// TODO: do not have element appear so abruptly

function mouseEnterIcon() {
	$(this).children('div.project__info').show()
	$(this).children('div.project__info').animate({ opacity: 1 }, 200)
    $(this).children('img.project__image').animate({ opacity: 0.4 }, 200);
}

function mouseLeaveIcon() {
	$(this).children('div.project__info').animate({ opacity: 0 }, 200)
    $(this).children('img.project__image').animate({ opacity: 1 }, 200);
}
