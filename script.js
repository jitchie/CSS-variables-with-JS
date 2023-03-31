// const spacingAdj = document.querySelector('#spacing');
// const blurAdj = document.querySelector('#blur');
// const colorAdj = document.querySelector('#base');
// const img = document.querySelector('img');
// const h1 = document.querySelector('.h1');

// spacingAdj.addEventListener('input', () => {
//     let desiredSpacing = spacingAdj.value;
//     img.style.setProperty('--spacing', `${desiredSpacing}px`)

    
// })

// blurAdj.addEventListener('input', ()=>{
//     let desiredBlur = blurAdj.value;
//     img.style.setProperty('--blur', `${desiredBlur}px`)

// })

// colorAdj.addEventListener('input', ()=>{
//     let desiredColor = colorAdj.value;
//     console.log(desiredColor)
//     img.style.setProperty('--base', `${desiredColor}`)
//     h1.style.setProperty('--base', `${desiredColor}`)
// })

// refactored

//select all inputs

const inputs = document.querySelectorAll('input');

// add event listener to all input to call back handle change
inputs.forEach(input =>{
    input.addEventListener('input', handleChange)
})

function handleChange(){
    //use element data attributes to get suffix if there is one...
    const suffix = this.dataset.sizing || '';
    //gets the :root element and changes the style using the name of element called, value and suffix if available 
   document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}


