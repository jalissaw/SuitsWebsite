const tailoring = document.querySelector('.tailoring');
const suits = document.querySelector('.suits');
const jackets = document.querySelector('.jackets');
const shoes = document.querySelector('.shoes');


// move the tailoring div

window.addEventListener('scroll', function(){
    if(scrollY >= 200) {
        tailoring.style.opacity = 1;
        tailoring.style.transform = 'translateX(0px)';
        tailoring.style.transition = '0.4s ease-in-out';
    }
    else {
        
        tailoring.style.opacity = 0;
        tailoring.style.transform = 'translateX(-50px)';
        }
})

// move the suits div

window.addEventListener('scroll', function(){
    if(scrollY >= 200) {
        suits.style.opacity = 1;
        suits.style.transform = 'translateX(0px)';
        suits.style.transition = '0.5s ease-in-out';
    }
    else {
        
        suits.style.opacity = 0;
        suits.style.transform = 'translateX(50px)';
        }
})

// move the jackets div

window.addEventListener('scroll', function(){
    if(scrollY >= 425) {
        jackets.style.opacity = 1;
        jackets.style.transform = 'translateY(0px)';
        jackets.style.transition = '0.7s ease-in-out';
    }
    else {
        
        jackets.style.opacity = 0;
        jackets.style.transform = 'translateY( 50px)';
        }
})

window.addEventListener('scroll', function(){
    if(scrollY >= 425) {
        shoes.style.opacity = 1;
        shoes.style.transform = 'translateY(0px)';
        shoes.style.transition = '0.7s ease-in-out';
    }
    else {
        
        shoes.style.opacity = 0;
        shoes.style.transform = 'translateY( 50px)';
        }
})