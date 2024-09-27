// Getting scrollIndicator element by ID

//! scrollIndicator
if (!/iPad|iPhone|iPod/.test(navigator.userAgent)) {
    const scrollIndicator = document.getElementById("scrollIndicator");

    // Функция для обновления индикатора прокрутки
    const updateIndicator = () => {
        const winScroll = document.documentElement.scrollTop;
        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;

        // Обновляем ширину индикатора
        scrollIndicator.style.width = scrolled + "%";
    };

    // Throttle для уменьшения частоты вызовов функции
    let isScrolling = false;

    document.addEventListener("scroll", () => {
        if (!isScrolling) {
            window.requestAnimationFrame(() => {
                updateIndicator();
                isScrolling = false; // Сбрасываем флаг
            });
            isScrolling = true; // Устанавливаем флаг
        }
    });
}

console.log(navigator.userAgent);

//! Accordion menu

const accordionTitles = document.querySelectorAll(".accordion-title");

accordionTitles.forEach((accordionTitle) => {
    accordionTitle.addEventListener("click", () => {
        const height = accordionTitle.nextElementSibling.scrollHeight;
        accordionTitle.classList.toggle("active-header");
        if (accordionTitle.classList.contains("active-header")) {
            accordionTitle.nextElementSibling.style.maxHeight = `${height}px`;
        } else {
            accordionTitle.nextElementSibling.style.maxHeight = "0px";
        }
    });
});

//* Animations

document.querySelectorAll(".accordion-title").forEach((item) => {
    item.addEventListener("click", function () {
        this.parentNode.classList.toggle("active");
    });
});
