import Slider from './slider';

export default class MainSlider extends Slider {
    constructor(btns) {
        super(btns);
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
                    this.hanson.classList.add('slideInUp');
                }, 3000);
            } else {
                this.hanson.classList.remove('slideInUp');
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

    bindTriggers() {
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

        this.handleButtons('.prevmodule', -1);
        this.handleButtons('.nextmodule', 1);
    }

    handleButtons(selector, index) {
        document.querySelectorAll(selector).forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                this.plusSlides(index);
            });
        })
    }

    render() {
       if (this.container) {
            try {
                this.hanson = document.querySelector('.hanson');
            } catch(e) {}

            this.showSlides(this.SlideIndex);
            this.bindTriggers();
       }
    }
}