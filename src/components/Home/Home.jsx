import React from 'react'
import MenuItem from '../MenuItem/MenuItem'
import projects from '../../assets/projects.svg'
import resume from '../../assets/resume.svg'
import avatar from '../../assets/avatar.svg'
import phone from '../../assets/phone.svg'

export default function Home(props) {
    return (
        <>
            <div className="main__text">
                <p className="main__slogan">
                  Every project is a passion project. 
                </p>
                <h1 className="main__name">Christopher <br/> Fotos </h1>
            </div>
            <div className="main__circle-border">
            <div className="main__circle">
                Developer
            </div>
            </div>
        </>
    )
}
