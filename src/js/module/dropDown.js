const chooseItem = document.querySelector('.selected');
const optionContainer = document.querySelector('.options-container');

const optionsList = document.querySelectorAll('.item');

chooseItem.addEventListener('click', () => {
    optionContainer.classList.toggle('active');
    if (optionContainer.classList.contains('active')) {
        chooseItem.classList.add('hover');
    } else {
        chooseItem.classList.remove('hover');
    }
});

chooseItem.addEventListener('click', () => {
    optionsList.forEach(item => {
        if (item.querySelector('label').innerHTML == chooseItem.innerHTML) {
            item.classList.add('chooseElem');
        } else {
            item.classList.remove('chooseElem');
        }
    })
});

optionsList.forEach(item => {
    item.addEventListener('click', () => {
        chooseItem.innerHTML = item.querySelector('label').innerHTML;
        optionContainer.classList.remove('active');
        chooseItem.classList.remove('hover');
    })
});

chooseItem.addEventListener('click', () => {
    const array = [];
    optionsList.forEach(o => {
        array.push(o);
    });
    if (array.length < 5) {
        optionContainer.classList.add('hideScroll');
        optionContainer.classList.remove('showScroll');
    } else {
        optionContainer.classList.remove('hideScroll');
        optionContainer.classList.add('showScroll');
    }
});