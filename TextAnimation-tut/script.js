const heading = document.querySelector('.heading');

const textSplitting = ()=>{
    const text = heading.textContent;
    heading.innerHTML = '';
    // spliting each text from the heading and adding span tag to each character
    text.split('').forEach((char, index)=>{
        const span = document.createElement('span');
        span.textContent = char;
        heading.appendChild(span);
    });

}
textSplitting();
console.log(heading.textContent);

// Now the text has broken so we will add animation to it using gsap

const textAnimation = ()=>{
    gsap.from("h1 span",{
        y:50,
        opacity:0,
        duration:0.8,
        stagger:0.2,
    })
}

textAnimation();
