
const cursor = document.querySelector('#cursor');
const main = document.querySelector('#main');
const imageDiv = document.querySelector('#image');

main.addEventListener('mousemove', function(dets){
    // console.log(dets)
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
    })
})

imageDiv.addEventListener('mouseenter',(e)=>{
    cursor.innerHTML = "View More"
    cursor.style.background = "blue";
    cursor.style.color = "white";
    cursor.style.outline = "none";
    
    gsap.to(cursor,{
        scale:2,
    })
})

