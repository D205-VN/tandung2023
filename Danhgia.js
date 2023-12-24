const stars = document.querySelectorAll('.star');
let selectedStar = null;
let isPaused = false;

function highlightStar(star) {
    if (!isPaused) {
        resetStars();
        star.classList.add('highlighted');
        star.previousAll().forEach(prevStar => {
            prevStar.classList.add('highlighted');
        });
    }
}

function resetStars() {
    stars.forEach(star => {
        star.classList.remove('highlighted');
    });
}

function selectStar(star) {
    if (star === selectedStar) {
        if (isPaused) {
            resetStars();
            selectedStar = null;
            isPaused = false;
        } else {
            isPaused = true;
        }
    } else {
        selectedStar = star;
        resetStars();
        star.classList.add('selected');
        star.previousAll().forEach(prevStar => {
            prevStar.classList.add('selected');
        });
        isPaused = false;
    }
}



Element.prototype.previousAll = function () {
    let prevAll = [];
    let prevSibling = this.previousElementSibling;
    while (prevSibling) {
        prevAll.push(prevSibling);
        prevSibling = prevSibling.previousElementSibling;
    }
    return prevAll;
};