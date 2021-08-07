export default class DownLoad {
    constructor(triggers) {
        this.btns = document.querySelectorAll(triggers);
        this.path = 'assets/img/mainbg.jpg';
    }

    downloadItem(path) {
        try {
            const element = document.createElement('a');

            element.setAttribute('href', path);
            element.setAttribute('download', 'nice_picture');
    
            element.style.display = 'none';
            document.body.appendChild(element);
    
            element.click();
    
            document.body.removeChild(element);
        } catch(e) {}
    }

    init() {
        this.btns.forEach(item => {
            item.addEventListener('click', () => {
                this.downloadItem(this.path);
            });
        });
    }
}
