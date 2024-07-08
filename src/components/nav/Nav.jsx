import React from 'react'
import { useTranslation } from 'react-i18next'
import i18n from '../../locales/i18next';
import logo from '../../assets/Logo.png';
import hireMe from '../../assets/Hire Me.png'
import './Nav.css'

const Nav = () => {
    const data = useTranslation();

    const handleChangeLanguage = (e) => {
      i18n.changeLanguage(e.target.value);
      localStorage.setItem('lang', e.target.value);
    }
    return (
        <nav className='nav'>
            <div className="logos">
                <img src={logo} alt='logo' />
                <img src={hireMe} alt="hire me" />
            </div>
            <ul className='nav-list'>
                <li>
                <select defaultValue={localStorage.getItem('lang')} onChange={handleChangeLanguage}>
                    <option value="uz"> 🇺🇿 UZ</option>
                    <option value="ru"> 🇷🇺 Ru</option>
                    <option value="en"> 🇺🇸 Eng</option>
                </select>
                </li>
                <li><a href="#">{data.t('portfolio')}</a></li>
                <li><a href="#">{data.t('blog')}</a></li>
                <li><a href="#">{data.t('cv')}</a></li>
                <li><a href="#">{data.t('store')}</a></li>
                <li><a href="#">{data.t('freelance')}</a></li>
                <li><a href="#">{data.t('about')}</a></li>
                <li><a href="#">{data.t('contact')}</a></li>
            </ul>
        </nav>

    )
}

export default Nav