function color() {
    return 'rgb(' + (Math.round(Math.random() * 255)).toString(10) + ',' + (Math.round(Math.random() * 255)).toString(10) + ',' + (Math.round(Math.random() * 255)).toString(10) + ')';
}

const textArea = document.querySelector('.textarea')
const result = document.querySelector('.text')

let current = 0

textArea.addEventListener('keyup', (e) => {
    const length = e.target.value.length;
    console.log(e);

    if (current < length) {
        const value = e.key;
        const el = createElement(value === 'Enter' ? 'br' : 'span', value === 'Enter' ? '' : value);
        result.append(el);
    } else {
        const lastElement = result.lastChild;
        lastElement.remove();
    }

    current = length

})


function createElement(elName, text = '') {
    const el = document.createElement(elName);
    if (text) {
        el.textContent = text
        el.style.color = color();
    }

    return el;
}
