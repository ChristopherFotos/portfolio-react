import './style.scss'
import avatar from './assets/avatar.svg'
import phone from './assets/phone.svg'
import MenuItem from './components/MenuItem/MenuItem'
import projects from './assets/projects.svg'
import resume from './assets/resume.svg'
import Animator from './animations/animations'
import map from './componentMap'
import { useRef, useEffect, useState} from 'react'

function App() {
  const [content, setContent] = useState('home')

  const refs = {
    main: useRef(),
    mainTop: useRef(),
    mainNav: useRef(),
    cover: useRef(),
    right: useRef(),
    left: useRef()
  }

  let animator = useRef(
    new Animator()
  ).current

  const setContentTimed = (e)=> {
    setTimeout(()=> setContent(e.target.dataset.item), animator.leftTransition * 1000)
    
  }

  useEffect(() => {

    animator.main = refs.main.current;
    animator.mainTop = refs.mainTop.current;
    animator.mainNav = refs.mainNav.current;
    animator.cover = refs.cover.current;
    animator.right = refs.right.current;
    animator.left = refs.left.current

    animator.grow()
    animator.reveal()

    console.log('MAINTOP',animator) 

  }, [])

  return (
    <section className="app">

    <div ref={refs.left} className="app__left" id='left'></div> 
      <div ref = { refs.main } className='main'>

        <div ref={refs.mainTop} className='main__top'>
          {map[content](animator, refs)}
        </div> 

        <div ref={refs.mainNav} className="main__nav">
            <div ref={refs.cover} className="main__nav-cover" />
            <MenuItem slide={(e)=>{animator.slide(); setContentTimed(e)}} data='projects' img={projects} text='projects'/> 
            <MenuItem slide={(e)=>{animator.slide(); setContentTimed(e)}} data='contact' img={phone} text='contact'/>
            <MenuItem slide={(e)=>{animator.slide(); setContentTimed(e)}} data='resume' img={resume} text='resume'/>
            <MenuItem slide={(e)=>{animator.slide(); setContentTimed(e)}} data='about' img={avatar} text='about me'/> 
        </div>   
      </div>

    <div ref={refs.right} className="app__right" id='right'></div>

    </section>


  );
}

export default App;
