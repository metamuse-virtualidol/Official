// トップへ戻る
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("backToTopBtn").style.display = "block";
    } else {
        document.getElementById("backToTopBtn").style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// 音楽再生
document.addEventListener('DOMContentLoaded', function () {
    var audioElements = document.querySelectorAll('audio');
    audioElements.forEach(function(audio) {
        audio.addEventListener('play', function() {
            audioElements.forEach(function(otherAudio) {
                if (otherAudio !== audio) {
                    otherAudio.pause();
                    otherAudio.currentTime = 0;
                }
            });
        });
    });
});

// 訪問数カウンター
function updateVisitCounter() {
    const visitCounter = document.getElementById('visitCounter');
    let visits = localStorage.getItem('visits');
    if (!visits) {
        visits = 0;
    }
    visits++;
    localStorage.setItem('visits', visits);
    visitCounter.textContent = `Visits: ${visits}`;
}
updateVisitCounter();