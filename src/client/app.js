import Dog from '../shared/dog';

const browserShadow = new Dog('Browser Shadow');

document.querySelector('.app').innerText = browserShadow.bark();
