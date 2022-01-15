function elemOff() {
    let elem = document.querySelector('.main__title_hover');
    if (getComputedStyle(elem).opacity == '1') {
        elem.style.opacity = '0';
    }
    else {
        elem.style.opacity = '1';
    };
}

function itemOff() {
    let elem = document.querySelector('.main__subtitle_hover');
    if (getComputedStyle(elem).opacity == '1') {
        elem.style.opacity = '0';
    }
    else {
        elem.style.opacity = '1';
    };
}

document.addEventListener('keyup', () => {
    let text = document.querySelector('.main__titles');
    if (event.keyCode == '32') {
        if (getComputedStyle(text).display == 'flex') {
            text.style.display = 'none'
        }
        else {
            text.style.display = 'flex'
        }
    }
})