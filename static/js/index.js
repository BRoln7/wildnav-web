window.HELP_IMPROVE_VIDEOJS = false;


$(document).ready(function() {
    // Check for click events on the navbar burger icon

    var options = {
			slidesToScroll: 1,
			slidesToShow: 1,
			loop: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 5000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);
	
    bulmaSlider.attach();

    document.querySelectorAll('.simulation-picker').forEach(function(picker) {
        var video = document.getElementById(picker.querySelector('button').getAttribute('aria-controls'));
        var source = video.querySelector('source');

        picker.addEventListener('click', function(event) {
            var button = event.target.closest('button[data-video]');
            if (!button || !picker.contains(button)) return;

            if (button.getAttribute('aria-pressed') !== 'true') {
                video.pause();
                source.src = button.dataset.video;
                video.poster = button.dataset.poster;
                video.load();
                picker.querySelectorAll('button').forEach(function(item) {
                    item.setAttribute('aria-pressed', item === button ? 'true' : 'false');
                });
            }

            video.play().catch(function() {});
        });
    });

    document.querySelectorAll('.simulation-video').forEach(function(video) {
        video.addEventListener('play', function() {
            document.querySelectorAll('.simulation-video').forEach(function(other) {
                if (other !== video) other.pause();
            });
        });
    });

})
