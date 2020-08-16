class Card {

    constructor(name, img, r, c) {
        this.name = name;
        this.img = img;
        this.r = r;
        this.c = c;
    }

    getName() {
        return this.name;
    }

    getImage() {
        return this.img;
    }

    getRow() {
        return this.r;
    }

    getColumn() {
        return this.c;
    }

}
