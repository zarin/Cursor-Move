let h2 = document.querySelector('h2');
window.addEventListener('mousemove',function(move){
    // console.log('clientX =',move.clientX);
    // console.log('clientY =',move.clientY);

    // h2.style.top = '260px';
    h2.style.left = `${move.clientX/3}px`;
    h2.style.top = `${move.clientY/3}px`;
})
