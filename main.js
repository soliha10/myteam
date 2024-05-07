const elMenuBtn = document.querySelector(".hamburg");
const elMenuWrapper = document.querySelector(".nav-wrapper");

elMenuBtn.addEventListener("click", function () {
    elMenuWrapper.classList.toggle("open");
    elMenuBtn.classList.toggle("close-btn");
});

const directorBtn = document.querySelectorAll(".director-btn");
directorBtn.forEach(button => {
    button.addEventListener('click', () => {
        const hiddenContent = button.nextElementSibling;
        hiddenContent.classList.toggle('hidden-content');
        const defaultContent = button.parentNode.querySelector('.director-default-info');
        defaultContent.classList.toggle('hidden-content');
        button.classList.toggle("btn-active");
    });
});

