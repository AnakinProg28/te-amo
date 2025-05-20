document.addEventListener('DOMContentLoaded', () => {
    const pages = document.querySelectorAll('.page');
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');
    const page3 = document.getElementById('page3');
    const audio = document.getElementById('musica');

    pages.forEach((page, idx) => {
        page.style.zIndex = pages.length - idx;

        page.addEventListener('click', () => {
            // Solo gira si no está girada
            if (!page.classList.contains('turned')) {
                page.classList.add('turned');
                // Baja el z-index para que la página girada quede detrás
                page.style.zIndex = 0;
            }
        });
    });

    page1.addEventListener('click', () => {
        page1.classList.add('triptico');
        page2.classList.add('triptico');
        page3.classList.add('triptico');
        audio.play();
    });
});
