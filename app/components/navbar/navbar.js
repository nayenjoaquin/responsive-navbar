'use client';
import style from './navbar.module.css';
import Image from 'next/image';
import logoAlt from './logoAlt.png';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import DesktopMenu from './desktopMenu';
import { useState } from 'react';
import MobileMenu from './mobileMenu';


export default function Navbar(props){

    const { pages, logo} = props

    const img = logo ? logo : logoAlt
    const alt = logo ? 'logo' : 'logoAlt'
    const [desktop, setDesktop] = useState(true)

    const toggleMenu = async (e) =>{
        e.preventDefault()
        setDesktop(!desktop)
    }

    return(
        <header className={style.header}>
            <div className={style.headerContent}>
                <Link href="/">
                    <div className={style.logoContainer}>
                        <Image className={style.logoImg + " " + (logo ? '' : style.logoAlt) } src={img} alt="YOUR LOGO"/>
                    </div>
                </Link>
                <DesktopMenu pages={pages}/>
                <div className={style.navMenuBtn} onClick={toggleMenu}>
                    <FontAwesomeIcon className={style.bars} icon={faBars} />
                </div>
                {
                    desktop ? null : <MobileMenu pages={pages} onclick={toggleMenu}/>
                }
            </div>
        </header>
    )
}
