let main = document.getElementsByClassName('main')[0]
let mainTop = document.getElementsByClassName('main__top')[0]
let mainNav = document.getElementsByClassName('main__nav')[0]
let cover   = document.getElementsByClassName('main__nav-cover')[0]
let right = document.getElementById('right')
let left = document.getElementById('left')

let leftTransition = 0.5

left.style.transitionDuration = `${leftTransition}s`
right.style.transitionDuration = `${leftTransition}s`


// this can just be done with react onClick
function addListeners () {
    let items = Array.from(document.getElementsByClassName('main__nav-item'))
    items.forEach(i => {
        i.addEventListener('click', slide)
    })
}

/* Initial line growth on page load */
function grow(){
    let navBox   =  mainNav.getBoundingClientRect()
    let leftBox  =  left.getBoundingClientRect()
    let rightBox =  right.getBoundingClientRect()
    let topBox   =  mainTop.getBoundingClientRect()

    let leftDistance   = navBox.bottom - leftBox.bottom
    let rightDistance  = rightBox.top - topBox.top 

    left.style.height = `${leftDistance}px`
    right.style.height = `${rightDistance}px`
}


/* content change animation */
function slide(e){
    let distanceLeft = right.getBoundingClientRect().right - window.innerWidth / 2 
    let distanceRight = window.innerWidth / 2 - right.getBoundingClientRect().right


    left.style.width = `${distanceLeft - 8}px`
    left.style.height = '75vh'
    left.style.position = 'absolute'

    right.style.right    = `0`
    right.style.width    = '50vw'
    // right.style.height   = '99vh'
    right.style.bottom   = '0'
    right.style.position = 'absolute'
    

    setTimeout(()=>{
        main.style.opacity = '0'
        main.innerHTML = components[e.target.dataset.item]
        
        addListeners() 

        let children = Array.from(main.children).map(c=> c.getBoundingClientRect())
        let lowest = children[0]

        children.forEach(c => {
            if(c.bottom > lowest.bottom) lowest = c
        })

        // left.style.transitionDuration = `0.00001s`
        left.style.height = `${lowest.bottom}px`
        // right.style.height = `${mainNav.getBoundingClientRect().top}px`

        console.log(mainTop.getBoundingClientRect())

        setTimeout(()=>{
            
            left.style.transitionDuration = `${leftTransition}s`
            right.style.width= '2px'
            right.style.right= '28vw'
            left.style.width = '2px'
        },100)

        main.style.opacity = 1
 
    }, leftTransition * 1000)
}

/* initial reveal animation */
function reveal() {
    let topBox   = this.mainTop.getBoundingClientRect()
    let coverBox = this.cover.getBoundingClientRect()
    let leftBox  = this.left.getBoundingClientRect()
    let rightBox = this.right.getBoundingClientRect()


    let width  =  coverBox.left - rightBox.left
    this.cover.style.top = `0px`
    this.cover.style.width  = `${width}px`

    setTimeout(()=>{
        this.cover.style.width  = `0px`
    },700)

}

grow()
reveal()
addListeners()