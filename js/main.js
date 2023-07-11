let elBox1 = document.querySelector('.box1')
let elBox2 = document.querySelector('.box2')
let elBox3 = document.querySelector('.box3')
let elBoxP1 = document.querySelector('.box1__p')
let elBoxP2 = document.querySelector('.box2__p')


// car
let counter = 0
setInterval(()=>{
    counter = counter +1
    console.log(counter);
},1000)

setInterval(()=>{
    if(counter>=1 && counter<=10){
        elBox1.classList.add('red')
        elBoxP1.classList.remove('red__p')
        elBoxP2.classList.add('green__p')
    }
    else{
        elBox1.classList.remove('red')
    }
    if(counter>=11 && counter<=13 || counter>=25 && counter<=28){
        elBox2.classList.add('yellow')
    }
    else{
        elBox2.classList.remove('yellow')
    }
    if(counter>=14 && counter<=24){
        elBoxP1.classList.add('red__p')
        elBox3.classList.add('green')
        elBoxP2.classList.remove('green__p')
    }
    else{
        elBox3.classList.remove('green')
        elBoxP2.classList.add('green__p')
    }
    if(counter>=25 && counter<=28){
        elBoxP2.classList.remove('green__p')
    }
    if(counter == 28){
        counter = 1
    }
    console.log(counter);
},1000)
