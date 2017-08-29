// import A from './a';
// import {B, C} from './b';

// A();

// console.log(A);
// console.log(B);
// console.log(C);

// console.log('There is index.js');

let div = document.createElement('div');
div.style.width = '200px';
div.style.height = '200px';
// div.style.background = '#333';
document.body.appendChild(div);


/* global R */
/**
 * Ramda exercise
 */
// let greet = R.replace('{name}', R.__, 'Hello, {name}!');
// let res = greet('Alice');
// console.log(res);


// let add = (x) => {
//     return (y) => {
//         return x + y;
//     };
// };
// // let add = function(...args) {
// //     console.log(arguments[0]);
// //     console.log(arguments[1]);
// //     console.log(arguments[2]);
// //     return arguments;
// // };

// console.log(add(2)(3));

// let equalsx = R.equals('x');
// R.all(equalsx)(['x', 'x', 'x']);
// R.all(equalsx)(['x', 'x', 'x', 'd']);

let x = (x) => {
    return (y) => {
        return x + y;
    };
};
R.all(x(3))(-3, 2, 3, 4, 5);

let AutoType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

AutoType.prototype.tick = function() {
    let i = this.loopNum % this.toRotate.length;
    let fullTxt = this.toRotate[i];
    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    let that = this;
    let delta = 300 - Math.random() * 100; // this.period;

    if (this.isDeleting) {
        delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = this.period;
    }

    setTimeout(() => {
        that.tick();
    }, delta);
};

const links = {
    '404': 'page404.html',
    'DragAndDrop': 'dragAndDrop.html'
};

window.onload = () => {
    let el = document.createElement('div');
    el.classList.add('.txt-rotate');

    Object.keys(links).map((key, index) => {
        let aTag = document.createElement('a');
        aTag.text = key;
        aTag.href = links[key];
        aTag.style.height = '20px';
        aTag.style.lineHeight = '20px';
        document.getElementById('root').appendChild(aTag);
    });

    document.getElementById('root').appendChild(el);

    for (let i = 0; i < 1; i++) {
        let toRotate = ['nerdy.', 'simple.', 'pure JS.', 'pretty.', 'fun!'];
        let period = 500;
        new AutoType(el, toRotate, period);
    }

    var css = document.createElement('style');
    css.type = 'text/css';
    css.innerHTML = '.txt-rotate > .wrap { border-right: 0.08em solid #666 }';
    document.body.appendChild(css);
};