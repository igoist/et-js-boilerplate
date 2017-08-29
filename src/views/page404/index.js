import './index.scss';

let tmpP = document.createElement('p');
tmpP.innerText = '非常抱歉，你要找的页面不见啦';

let wrap404 = document.createElement('div');
wrap404.classList.add('wrap');
wrap404.appendChild(tmpP);

let root = document.getElementById('root');
root.appendChild(wrap404);

console.log('s2');