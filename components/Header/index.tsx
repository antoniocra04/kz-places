import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { BurgerMenu } from './BurgerMenu'
import { Search } from './Search'

export const Header: React.FC = () => {
    const router = useRouter()

    return (
        <header className="header">
            <section className="header__section">
                <p className="header__logo-text">Сокральные Места Казахстана</p>
            </section>
            <section className="header__section">
                <nav className="header__links">
                    <Link href="/">
                        <a
                            className={`header__link ${
                                router.route === '/' ? 'header__link-on' : ''
                            }`}
                        >
                            О Казахстане
                        </a>
                    </Link>
                    <Link href="/places">
                        <a
                            className={`header__link ${
                                router.route === '/places'
                                    ? 'header__link-on'
                                    : ''
                            }`}
                        >
                            Места
                        </a>
                    </Link>
                </nav>
                <Search />
                <BurgerMenu />
            </section>
        </header>
    )
}
