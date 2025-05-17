import React, { useState, useContext, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '@mui/material';
import imgs from './nav-imgs';
import './nav.css'
import { Link } from 'react-router-dom';
import useSound from 'use-sound';
import switchOn from '../../sounds/switch-on.mp3'
import disableS from '../../sounds/disable-sound.mp3'
import enableS from '../../sounds/enable-sound.mp3'
import { SoundContext } from '../../Provider';
const Nav = ()=>{
    const [isSound, setIsSound] = useContext(SoundContext);
    const [list, setList] = useState([
        {
            id: 0,
            img: imgs.Book,
            text: "Обучение",
            active: false,
            link: '/learning',
        },
        {
            id: 1,
            img: imgs.Dictinary,
            text: "Словарь",
            active: false,
            link: '/dictionary',
        },
        {
            id: 2,
            img: imgs.Rating,
            text: "Рейтинг",
            active: false,
            link: '/Rating',
        },
        {
            id: 3,
            img: imgs.Tasks,
            text: "Старт", //Задания
            active: false,
            link: '/',
        },
        {
            id: 4,
            img: imgs.Profile,
            text: "Профиль",
            active: false,
            link: '/Profile',
        },
        {
            id: 5,
            img: imgs.Support,
            text: "Помощь",
            active: false,
            link: '/Support',
        },
        {
            id: 6,
            img: imgs.Shop,
            text: "Login",
            active: false,
            link: '/Login',
        },
        
    ])
    const setActive = (id)=>{
        setList(list.map((e)=>{
            if(e.id != id){
                e.active = false;
                return e;
            }
            else{
                e.active = true;
                return e;
            }
        }))
    }
    const [play,{stop}] = useSound(switchOn, {soundEnabled: isSound});
    const [disableSound] = useSound(disableS);
    const [enableSound] = useSound(enableS);
    const [volumeActive, setVolumeActive] = useState(true);
    const clickVolume = (e)=>{
        setVolumeActive(!volumeActive);
        isSound ? disableSound(): enableSound();
        setIsSound(!isSound)
        /*
        const root = document.querySelector(':root')
        root.classList.add("dark")
        */
    }
    const [isMobile, setIsMobile] = useState( window.innerWidth <= 760)
    useEffect(()=>setIsMobile(window.innerWidth <= 760), [])
    console.log(isMobile)
    return(
        isMobile ?
        (
            <nav className=' nav-mobile'>

            <div className = "nav-tools nav-section">
                <ul>
                    <li>
                        <Button onClick={(e)=>clickVolume(e.target)} variant='text'>
                            <img src={imgs.Volume} width={24}></img>
                            <div className={volumeActive ? "nav-volume": "nav-volume nav-volumeNull"}></div>
                        </Button>
                        <Button variant='text'>
                            <img src={imgs.nightMode} width={24}></img>
                        </Button>
                        <Button variant='text'>
                            <img src={imgs.About} width={24}></img>
                        </Button>
                    </li>
                </ul>
            </div>
            <div className='nav-list nav-list-mobile nav-section'>
                <ul>
                    {list.map((element)=>{
                        return(
                            <li>
                                <Link to={element.link}>
                                    <Button onMouseEnter = { ( )  =>  play ( ) }  onMouseLeave = { ( )  =>  stop ( ) } className={element.active && 'active'} onClick={()=>setActive(element.id)} variant = "text">
                                        <img src={element.img} width={32}/>
                                    </Button>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
        ):
        (
        <nav className='nav'>
            <div className='nav-logo nav-section'>
                <img src={imgs.logoEng} width={240} alt='Enginity'></img>
            </div>
            <div className = "nav-tools nav-section">
                <ul>
                    <li>
                        <Button onClick={(e)=>clickVolume(e.target)} variant='text'>
                            <img src={imgs.Volume} width={24}></img>
                            <div className={volumeActive ? "nav-volume": "nav-volume nav-volumeNull"}></div>
                        </Button>
                        <Button variant='text'>
                            <img src={imgs.nightMode} width={24}></img>
                        </Button>
                        <Button variant='text'>
                            <img src={imgs.About} width={24}></img>
                        </Button>
                    </li>
                </ul>
            </div>
            <div className='nav-list nav-section'>
                <ul>
                    {list.map((element)=>{
                        return(
                            <li>
                                <Link to={element.link}>
                                    <Button onMouseEnter = { ( )  =>  play ( ) }  onMouseLeave = { ( )  =>  stop ( ) } className={element.active && 'active'} onClick={()=>setActive(element.id)} variant = "text">
                                        <img src={element.img} width={32}/><h3>{element.text}</h3>
                                    </Button>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
        )
    )
}
export default Nav