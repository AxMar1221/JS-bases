function hideContent(){
    const hideContent = document.querySelectorAll('.card')
    hideContent.forEach( elem => {
        elem.style.display = 'none';
    })
}

document.querySelector('.btnHideAll').addEventListener('click', () => {
    hideContent()
});

function showContent(){
    const showContent = document.querySelectorAll('.card')
    showContent.forEach( elem => {
        elem.style.display = 'block';
    })
}

document.querySelector('.btnShowAll').addEventListener('click', () => {
    showContent()
});
