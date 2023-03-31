const spacingAdj = document.querySelector('#spacing');
const blurAdj = document.querySelector('#blur');
const colorAdj = document.querySelector('#base');
const img = document.querySelector('img');
const h1 = document.querySelector('.h1');

spacingAdj.addEventListener('input', () => {
    let desiredSpacing = spacingAdj.value;
    img.style.setProperty('--spacing', `${desiredSpacing}px`)

    
})

blurAdj.addEventListener('input', ()=>{
    let desiredBlur = blurAdj.value;
    img.style.setProperty('--blur', `${desiredBlur}px`)

})

colorAdj.addEventListener('input', ()=>{
    let desiredColor = colorAdj.value;
    console.log(desiredColor)
    img.style.setProperty('--base', `${desiredColor}`)
    h1.style.setProperty('--base', `${desiredColor}`)
})
