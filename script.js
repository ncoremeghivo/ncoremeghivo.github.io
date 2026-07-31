document.addEventListener('DOMContentLoaded', function () {

    var stars;
    var submitBtn;
    var selectedRating;
    var lastScrollTop;
    var navbar;
    var i, j, val, sVal, ratingBox;

    stars = document.querySelectorAll('.select-stars i');
    submitBtn = document.querySelector('.submit-rating');
    navbar = document.getElementById('navbar');
    selectedRating = 0;
    lastScrollTop = 0;

    // Updated copy to clipboard functionality
    var copyBtn = document.getElementById('copyEmailBtn');
    
    if (copyBtn) {
        copyBtn.addEventListener('click', function() {
            navigator.clipboard.writeText("info@ncoremeghivo.org")
            .then(() => {
                alert("E-mail cím másolva!");
            })
            .catch(err => {
                console.error("Failed to copy:", err);
            });
        });
    }
    
    function updateStars(limit) {
        for (j = 0; j < stars.length; j++) {
            sVal = parseInt(stars[j].getAttribute('data-value'), 10);
            stars[j].classList.toggle('bi-star-fill', sVal <= limit);
            stars[j].classList.toggle('bi-star', sVal > limit);
        }
    }

    function onStarHover() {
        val = parseInt(this.getAttribute('data-value'), 10);
        updateStars(val);
    }

    function onStarClick() {
        selectedRating = parseInt(this.getAttribute('data-value'), 10);
        updateStars(selectedRating);
    }

    function onStarOut() {
        updateStars(selectedRating);
    }

    for (i = 0; i < stars.length; i++) {
        stars[i].addEventListener('mouseover', onStarHover);
        stars[i].addEventListener('click', onStarClick);
        stars[i].addEventListener('mouseout', onStarOut);
    }

    if (submitBtn) {
        submitBtn.addEventListener('click', function () {
            if (selectedRating === 0) {
                return;
            }

            ratingBox = document.querySelector('.user-rating');
            if (ratingBox) {
                ratingBox.classList.add('disabled');
            }

            submitBtn.textContent = 'Köszönjük az értékelést!';
        });
    }

    window.addEventListener('scroll', function () {
        var scrollTop;
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (navbar) {
            navbar.style.top = scrollTop > lastScrollTop ? '-100px' : '0';
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });

});
