// Your code goes here
const containerHeader = document.querySelector(".main-navigation");
const containerMain = document.querySelector(".container-home");
const containerFooter = document.querySelector(".footer");

const allImgs = document.querySelectorAll("img");
const navA = document.querySelectorAll("nav a");
const allText = document.querySelectorAll('a , p , h1, h2, h3, h4');

// 1) Double click an image to open in new window

allImgs.forEach(function(item){
    item.addEventListener('dblclick', function(){
        window.open(item.src);
    });
});

// 2 & 3) Mouse over to make text red / mouseleave to stop

navA.forEach(function(item){
    item.addEventListener('mouseenter', function(){
        item.style.color = 'red';    
    });
    item.addEventListener('mouseleave', function(){
        item.style.color = '';  
    });
  });

// 4) esc Key changes background to black and text to pink
let color = 0;

function escKey(event){
    if(event.key === 'Escape'){
        if(color === 0){
        allText.forEach(function(item){
            item.style.color = 'pink';
            color = 1;    
        })
    }
    else if(color != 0){
        allText.forEach(function(item){
            item.style.color = 'black';
            color = 0;
        })
    }
    
}
}
document.addEventListener('keydown', escKey);

// 5 & 6) notify when resizing the window & scrolling

window.addEventListener('resize', function(event) {
    console.log("resizing");
    
});

window.addEventListener('scroll', function(event) {
    console.log("scrolling");
    
});

//7) Click button & propagation
const buttons = document.querySelectorAll('.btn');
buttons.forEach(function(item, index){
    item.addEventListener('click', function(event){
        console.log(`Button ${index+1} Clicked`);
        console.log('stopping propagation!');
        event.stopPropagation();
    })
});


// 8)Check for copying text

document.addEventListener('copy', function(){
    console.log("stuff copied");
})

// 9) Check for pasting
document.addEventListener('paste', function(){
    console.log("stuff pasted");
})
//10) Track pointer moving
document.addEventListener('pointermove', function(event){
    console.log('Pointer is moving');
})


