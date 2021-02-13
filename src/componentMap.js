import Projects from './components/Projects/Projects'
import Home from './components/Home/Home'

 const map = {
    projects: (anim) => {
        return (<Projects 
            animator = {anim} 
        />)
    },
    home: (anim) => {
        return (<Home 
            animator = {anim} 
        />)
    }
}

export default map