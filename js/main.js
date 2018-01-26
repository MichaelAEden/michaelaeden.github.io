/* - - - - - - - - -
 *  GENERAL
- - - - - - - - - - */

$(document).ready(function() {
    // Handle mouse hover of project.
    $('#projects .project').hover(mouseEnterProject, mouseLeaveProject);

    // Initialize lightslider.
	$('#projects__slider').lightSlider({
		 item: 3,
		 galleryMargin: 50,
         currentPagerPosition: 'middle'
	});
})

$(document).on('click', '.project', function() {
    // Get project object from clicked element ID.
    var projectId = $(this).attr('id');
    var project = projects[projectId]

    // Get project information.
    var name = project['name']
    var link = project['link']
    var date = project['date']
    var language = project['language']
    var tools = project['tools']
    var description = project['description']

    // Populate modal.
    $('#project-title').text(name);
    $('#project-link').attr('href', link);
    $('#project-date').text(date);
    $('#project-language').text(language);
    $('#project-tools').text(tools);
    $('#project-description').text(description);
})

/* - - - - - - - - -
 *  PROJECTS
- - - - - - - - - - */

function mouseEnterProject() {
    // Upon hover, make project icon appear lighter.
    $(this).children('.project__image').animate({ opacity: 0.7 }, 200);
}

function mouseLeaveProject() {
    // Upon mouse leave, reset project icon.
    $(this).children('.project__image').animate({ opacity: 1 }, 200);
}

var projects = {
    'pyfractals': {
        'name': 'PyFractals',
        'link': 'https://github.com/MichaelAEden/PyFractals',
        'date': '2018',
        'language': 'Python',
        'tools': 'Qt, NumPy',
        'description':
            'Generate fractals using an intuitive interface, and ' +
            'navigate your own creations.'
    },
    'game-of-life': {
        'name': 'Game of Life',
        'link': 'https://github.com/MichaelAEden/GameOfLife',
        'date': '2017',
        'language': 'Java',
        'tools': 'Graphics',
        'description':
            "Conway's classic Game of Life, but with a twist. Watch cells " + 
            "with unique behaviours interact with each other as they compete " + 
            "for space, and generate intricate, complex patterns."
    },
    'game-of-life-3d': {
        'name': 'Game of Life 3D',
        'link': 'https://github.com/MichaelAEden/GameOfLife3D',
        'date': '2017',
        'language': 'Java',
        'tools': 'OpenGL',
        'description':
            "Conway's Game of Life, now in 3D! Simulate cells with unique " +
            "behaviours in three dimensions, and watch them compete for space."
    },
    'studybot': {
        'name': 'StudyBot',
        'link': 'https://github.com/MichaelAEden/Study-Bot',
        'date': '2017',
        'language': 'Python',
        'tools': 'Flask, Text-Processing',
        'description':
            "Quiz yourself with your own notes, through the use of " +  
            "text-processing APIs to generate content-related " +
            "questions."
    },
    'pong': {
        'name': 'Pong',
        'link': 'https://github.com/MichaelAEden/Pong',
        'date': '2016',
        'language': 'Python',
        'tools': 'Text-Processing',
        'description': "The classic game of Pong."
    },
    'tic-tac-toe': {
        'name': 'Tic-Tac-Toe',
        'link': 'https://github.com/MichaelAEden/TicTacToe',
        'date': '2016',
        'language': 'Python',
        'tools': 'Text-Processing',
        'description':
            "The classic game of Tic-Tac-Toe, including opponent AI."
    },
    'arduino': {
        'name': 'Secure-Safe',
        'link': 'https://github.com/MichaelAEden/Secure-Safe',
        'date': '2017',
        'language': 'C++',
        'tools': null,
        'description':
            "Secure your items in a password-protected, button-operated " +
            "safe. The safe includes an LED matrix to display current " + 
            "item inventory, but to additionally create some flashy displays."
    }
};
