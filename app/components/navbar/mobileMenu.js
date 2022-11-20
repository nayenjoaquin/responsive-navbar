import style from './navbar.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export default function MobileMenu(props){
    const { pages, onclick } = props
    return(
        <div>
            <div className={style.mobileBluryBackground} onClick={onclick}/>
            <nav>
                <ul className={style.mobileMenu}>
                    <FontAwesomeIcon onClick={onclick} className={style.mobileMenuCloseBtn} icon={faXmark}/>
                    {
                        pages.map((page, index) => {
                            return(
                                <li key={index} className={style.mobileMenuItem}>
                                    <Link className={style.mobileMenuLink} href={page['ref']}>{page['title']}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </div>
    )
}