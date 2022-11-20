import Link from "next/link"
import style from './navbar.module.css'

export default function DesktopMenu(props){
    
    const { pages } = props
    
    return(
        <nav>
            <ul className={style.navList}>
                {pages.map((page, index) => {
                    return(
                        <li key={index} className={style.navItem}>
                            <Link className={style.navItemLink} href={page['ref']}>{page['title'].toUpperCase()}</Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}