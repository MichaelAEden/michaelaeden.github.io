$(document).ready(function() {
	$('li.project').hover(mouseEnterProject, mouseLeaveProject);
	$('#projects__slider').lightSlider({
		 item: 3,
		 galleryMargin: 50,
         currentPagerPosition: 'middle'
	});
})

// TODO: do not have element appear so abruptly

function mouseEnterProject() {
	$(this).children('div.project__info').show()
	$(this).children('div.project__info').animate({ opacity: 1 }, 200)
    $(this).children('img.project__image').animate({ opacity: 0.4 }, 200);
}

function mouseLeaveProject() {
	$(this).children('div.project__info').animate({ opacity: 0 }, 200)
    $(this).children('img.project__image').animate({ opacity: 1 }, 200);
}
