import Slider from './slider';

export default class MiniSlider extends Slider {
    constructor(container, next, prev) {
        super(container, next, prev);
    }

    init() {
        console.log(this.prev, this.next, this.container);
    }
}