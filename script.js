

/*******************SLIDE COUNTER*******************************/

let slidePreviousCounter=1

let countSlide=1


function slideCounter(){
    console.log('iner');
    setInterval(()=>{
        slideMove(countSlide)
    }, 5000)
}

slideCounter()



function slideMove(k){
    document.querySelector('.counterPin'+slidePreviousCounter).classList.remove('chPin')
    document.documentElement.style.setProperty('--slideOffset', -((k-1)*document.querySelector('.slide').getBoundingClientRect().height)+'px')
    document.querySelector('.counterPin'+k).classList.add('chPin')
    slidePreviousCounter = k
    countSlide=k
    countSlide++
    if(countSlide == 8){
        countSlide=1
    }
}




const promise = new Promise((res, rej)=>{
    

        const brands = [
            'MANGO DOLLY', 
            'BLACK CAT', 
            'CHU MANTER', 
            'KASHMIRI APPLE', 
            'GOVARDHAN VOL 01', 
            'GULDASTA', 
            'HALLA GULLA', 
            'LOVE GURU', 
            'MALAI KOPTA', 
            'MOR PANKH', 
            'MOUSAM VOL 01', 
            'PANEER KOPTA', 
            'PATRANI', 
            'POWER PLAY',
            'RAJ MOTI',
            'SHABNAM',
            'VICTORIA VOL 02',
            'VIJAY LAXMI',
            'BINDIA VOL 5'
            ];



        function brandBar(i, brandName){
            //SPAN
            let brand = document.createElement('span')
            brand.setAttribute('class', 'brand brand'+i)
            brand.setAttribute('onclick', 'scrollControl(this.classList[1])')
            //I
            let iEl = document.createElement('i')
            iEl.setAttribute('class', 'fa-solid fa-bookmark')

            //H4
            let h4 = document.createElement('h4')
            h4.innerHTML = brandName

            brand.append(iEl)
            brand.append(h4)

            document.querySelector('#containerBrands').append(brand)
        }


        for(let i=0;i<brands.length;i++){
            brandBar(i, brands[i])
        }


        function loadImages(i, brand){
            //DIV SECTION
            let div_section = document.createElement('div')
            div_section.setAttribute('class', 'section section'+i)
            div_section.setAttribute('id', brand)

            //H3
            let h3 = document.createElement('h3')
            h3.innerHTML = brand

            //let div_container
            let div_container = document.createElement('div')
            div_container.setAttribute('class', 'collection')

            //IMAGES
            for(let count=1;count<=8;count++){
                let imgs = document.createElement('img')
                imgs.setAttribute('src', brand+'/100'+count+'-min.jpg')
                div_container.append(imgs)
            }

            //APPENDS
            div_section.append(h3)
            div_section.append(div_container)

            document.querySelector('#products').append(div_section)
        }

        for(let i=0;i<brands.length;i++){
            loadImages(i, brands[i])
        }

        res()

});

promise.then(()=>{


    if(window.innerWidth < 1200 && window.innerWidth > 850){
        val = Math.floor(Math.floor(document.getElementById('containerBrands').getBoundingClientRect().width)/4)
            document.documentElement.style.setProperty('--brandWidth', val+'px')
            tempVal = 4
        
    }
    if(window.innerWidth < 850 && window.innerWidth > 600){
        val = Math.floor(Math.floor(document.getElementById('containerBrands').getBoundingClientRect().width)/2)
            document.documentElement.style.setProperty('--brandWidth', val+'px')
        tempVal = 2
    
}else if(window.innerWidth < 600){
    val = Math.floor(Math.floor(document.getElementById('containerBrands').getBoundingClientRect().width)/1)
        document.documentElement.style.setProperty('--brandWidth', val+'px')
        tempVal = 1
    
}
else{
        val = Math.floor(Math.floor(document.getElementById('containerBrands').getBoundingClientRect().width)/5)
        document.documentElement.style.setProperty('--brandWidth', val+'px')
        tempVal = 5
    
}


temp = val
val=0

//SCROLL EFFECT------------------------------------------------------------------------



window.addEventListener('scroll', (e)=>{
   
    if( tempActive < length && document.querySelector('.section'+(tempActive+1)).getBoundingClientRect().y <= 0){
        if(tempActive != 0)
        {
            tempActive++
            moveRight()
            addActive('brand'+tempActive, 0)

        }
        else{
            tempActive++
            addActive('brand'+tempActive, 0)

        }
    }
    else if(tempActive > 0 && document.querySelector('.section'+tempActive).getBoundingClientRect().y >= 0){
        moveLeft()
        addActive('brand'+--tempActive, 0)
 
    }
})


})



    
let temp = 0
let counter=0
let val
let length = document.querySelectorAll('.brand').length
let tempVal=0
let tempActive=0


function moveLeft(){
    if(counter != 0)
    {
        val-=temp
        document.documentElement.style.setProperty('--move', -val+'px')
        counter--
        tempActive = counter+2
    }
    
}

console.log('THEN');

function moveRight(){
    if((length-tempVal) > counter)
    {
        val+=temp
        document.documentElement.style.setProperty('--move', -val+'px')
        if(counter != (length-tempVal))
        counter++
        tempActive = counter+1
    }
}

let classPrevious = 0

function addActive(a, b){
    if(classPrevious)
    document.querySelector('.'+classPrevious).classList.remove('active')    
    document.querySelector('.'+a).classList.add('active')
    classPrevious = a

 }


function scrollControl(a){
    setTimeout(()=>{
        window.scrollTo(0, (window.scrollY+document.querySelector('.section'+parseInt(a.substr(5))).getBoundingClientRect().top+10))    
    }, 100)
   
}




