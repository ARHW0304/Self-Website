const target = document.getElementById('target');
let yes= document.getElementById('yes');
yes.addEventListener('click',() => {
    alert('Hmm mjhe pta tha baby😘😘 tum YES hi press krogi accha haso mat😁😁 ab chalo ready ho jaao ab fingring hogi -Your Hubby- Mr. Ayush Yadav 😘😘');
})
function movetarget(){
    const maxWidth = 400;
    const maxHeight =400;
    const ranomX = Math.floor(Math.random()*maxWidth);
    const ranomY = Math.floor(Math.random()*maxHeight); 
    target.style.left = ranomX + 'px';
    target.style.top = ranomY + 'px';


}
target.addEventListener('mouseenter',function(){
    movetarget();
}
)
