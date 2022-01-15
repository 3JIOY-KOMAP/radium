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