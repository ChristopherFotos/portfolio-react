export default class Animator {
    constructor( main, mainTop, mainNav, cover, right, left ){
        this.main = main
        this.mainTop = mainTop 
        this.mainNav = mainNav
        this.cover = cover
        this.right = right
        this.left = left

        this.leftTransition = 0.5
    }

    setTransition(val){
        this.left.style.transitionDuration = `${val}s`
        this.right.style.transitionDuration = `${val}s`
    }

    // initial growth on page

    grow(){
        this.setTransition(this.leftTransition)

        let navBox   =  this.mainNav.getBoundingClientRect()
        let leftBox  =  this.left.getBoundingClientRect()
        let rightBox =  this.right.getBoundingClientRect()
        let topBox   =  this.mainTop.getBoundingClientRect()
        
        let leftDistance   = navBox.bottom - leftBox.bottom
        let rightDistance  = rightBox.top - topBox.top 
    
        this.left.style.height = `${leftDistance}px`
        this.right.style.height = `${rightDistance}px`
    }

    reveal(){
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
    
    slide(e){

        let distanceLeft = this.right.getBoundingClientRect().right - window.innerWidth / 2 
        let distanceRight = window.innerWidth / 2 - this.right.getBoundingClientRect().right
        
    
        this.left.style.width = `${distanceLeft - 8}px`
        this.left.style.height = '75vh'
        this.left.style.position = 'absolute'
    
        this.right.style.right    = `0`
        this.right.style.width    = '50vw'
        this.right.style.bottom   = '0'
        this.right.style.position = 'absolute'
        
    
        setTimeout(()=>{
            let clg = Array.from(this.main.children)
            console.log('CLG:', ...clg )

            let children = Array.from(this.main.children).map(c=> c.getBoundingClientRect())
            let lowest = children[0]

            
    
            children.forEach(c => {
                if(c.bottom > lowest.bottom) lowest = c
            })

            console.log('LOWEST BOTTOM',lowest.bottom, 'lowest', children)
            this.left.style.height = `${lowest.bottom}px`
    
            setTimeout(()=>{
                
                this.left.style.transitionDuration = `${this.leftTransition}s`
                this.right.style.width= '2px'
                this.right.style.right= '28vw'
                this.left.style.width = '2px'
            },100)

        }, (this.leftTransition * 1000) + 10)
    } 
}





