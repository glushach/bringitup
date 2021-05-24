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

        try {
            this.hanson.style.opacity = '0';

            if (n === 3) {
                this.hanson.classList.add('animated');
                setTimeout(() => {
                    this.hanson.style.opacity = '1';
                    this.hanson.classList.classList.add('slideInUp');
                }, 3000);
            } else {
                this.hanson.classList.classList.remove('slideInUp');
            }
        } catch(e) {}

        

        this.slides.forEach(slide => {
            slide.style.display = 'none';
        });

        this.slides[this.SlideIndex - 1].style.display = 'block';
    }

    plusSlides(n) {
        this.showSlides(this.SlideIndex += n);
    }

    render() {
        try {
            this.hanson = document.querySelector('.hanson');
        } catch(e) {}
        
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