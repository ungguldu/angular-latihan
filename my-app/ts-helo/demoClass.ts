// definisi class
class Point {
    x: number;
    y: number;
    draw() {
        console.log('X:' + this.x + ', Y:' + this.y);
    }
    getDistance() {
        //do something here
    }
}

//membuat object
let point = new Point();
point.x = 1;
point.y = 2;
point.draw();

//modifikasi class point
class Point {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    draw() {
        console.log('X:' + this.x + ', Y:' + this.y);
    }
    getDistance() {
        //do something here
    }
}
let point = new Point(1, 2);
point.draw();

//ubah konstruktor sehingga memiliki parameter opsional
class Point {
    x: number;
    y: number;
    constructor(x?: number, y?: number) {
        if (x !== undefined) this.x = x;
        if (y !== undefined) this.y = y;
    }
    draw() {
        console.log('X:' + this.x + ', Y:' + this.y);
    }
    getDistance() {
        //do something here
    }
}
let point = new Point();
point.draw();

class Point {
    constructor(private x?: number, private y?: number) {
        if (x !== undefined) this.x = x;
        if (y !== undefined) this.y = y;
    }
    draw() {
        console.log('X:' + this.x + ', Y:' + this.y);
    }
    getDistance() {
        //do something here
    }
}
let point = new Point();
point.draw();