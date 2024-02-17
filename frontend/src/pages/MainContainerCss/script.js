const hamburgerMenu = document.querySelector('.hamburger-menu');
const container = document.querySelector('section');

hamburgerMenu.addEventListener('click', () => {
    container.classList.toggle('active');
    for(let i = 0; i< behind.length;i++){
        behind[i].id='';
    }
})

const behind = document.querySelectorAll('.behind');
const behindLinks = document.querySelectorAll('.behindLink');
for(let i = 0 ; i < behind.length ;i++){
    behindLinks[i].addEventListener('mouseover', () => {
        behind[i].classList.add('hover');
    })
    behindLinks[i].addEventListener('mouseout', () => {
        behind[i].classList.remove('hover');
    })
    behindLinks[i].addEventListener('click', () => {
        for(let j = 0 ; j < behind.length ; j++){
            if(j === i){
                behind[j].id = 'curr';
            } else {
                behind[j].id = '';
            }
        }
        container.classList.toggle('active');
        behind[i].classList.remove('hover');
    })
}