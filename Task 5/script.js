var btn = document.querySelector('button')
var h1 = document.querySelector('#bottom h1')
var inside = document.querySelector('#inside')
var count

btn.addEventListener('click',function(){
    btn.style.pointerEvents ='none'
    count = 0
    
    var int = setInterval(() => {
        count++
        h1.innerHTML = count+"%"
        inside.style.width = count+"%"
    }, 30);

    setTimeout(() => {
        btn.style.opacity = 0.7
        clearInterval(int)
        btn.innerHTML ="Downloaded"

    },3000);

})
