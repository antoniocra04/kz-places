import React from 'react'
import Link from 'next/link'

import { BurgerMenuIcon } from '../icons/BurgerMenu'

export const BurgerMenu: React.FC = () => {
    const screenRef = React.useRef<HTMLDivElement>()

    const [isOpen, setIsOpen] = React.useState(false)

    const handleClick = () => {
        if (!isOpen) {
            screenRef.current.style.visibility = 'visible'
            screenRef.current.style.opacity = '1'
        } else {
            screenRef.current.style.opacity = '0'
            screenRef.current.style.visibility = 'hidden'
        }

        setIsOpen(!isOpen)
    }

    return (
        <div className="header__burger-menu">
            <div className="header__burger-menu-icon" onClick={handleClick}>
                <BurgerMenuIcon />
            </div>
            <nav
                onClick={handleClick}
                ref={screenRef}
                className="header__burger-menu-screen"
            >
                <Link href="/">
                    <a className="header__burger-menu-link">О Казахстане</a>
                </Link>
                <Link href="/places">
                    <a className="header__burger-menu-link">Места</a>
                </Link>
            </nav>
        </div>
    )
}
