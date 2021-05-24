export default class Slider {
    constructor(page, btns) {
        this.page = document.querySelector(page);
        this.slides = this.page.children;
        this.btns = document.querySelectorAll(btns);
        this.SlideIndex = 1;
    }

    showSlides(n) {
        if (n > this.slides.length) {
            this.SlideIndex = 1;
        }

        if (n < 1) {
            this.SlideIndex = this.slides.length;
        }

        this.slides.forEach(slide => {
            slide.style.display = 'none';
        });

        this.slides[this.SlideIndex - 1].style.display = 'block';
    }

    plusSlides(n) {
        this.showSlides(this.SlideIndex += n);
    }

    render() {
        this.btns.forEach(item => {
            item.addEventListener('click', () => {
                this.plusSlides(1);
            });

            item.parentNode.previousElementSibling.addEventListener('click', (e) => {
                e.preventDefault();
                this.SlideIndex = 1;
                this.showSlides(this.SlideIndex);
            });
        });

        this.showSlides(this.SlideIndex);
    }
}