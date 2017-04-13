$(document).ready(function() {
	$('.carousel').carousel({ interval: false });
	$('div.project').hover(mouseEnterProject, mouseLeaveProject);
})

$('.multi-item-carousel .item').each(function() {
	conjoinSlides($(this), $(this), 3)
})

// Recursively adds slides to each other to create a multi-item carousel
function conjoinSlides(slide, slide_added, slides) {
	if (slides <= 1) {
		return;
	}

	// Get the next sibling, and check if it exists
	slide_added = slide_added.next('.item');
	if (!slide_added.length) {
		slide_added = slide.siblings('.item:first');
	}
	slide_added.children(':first-child').clone().appendTo(slide);
	conjoinSlides(slide, slide_added, slides - 1);
}

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
