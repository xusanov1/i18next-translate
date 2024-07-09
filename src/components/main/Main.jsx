import React from 'react'
import { useTranslation } from 'react-i18next'
import { RxTwitterLogo } from "react-icons/rx";
import { SlSocialLinkedin } from "react-icons/sl";
import { PiMediumLogoLight } from "react-icons/pi";
import mainImg from '../../assets/mainImage.png'
import card1 from '../../assets/card1.png'
import card2 from '../../assets/card2.png'



import './Main.css'

const Main = () => {
    const data = useTranslation();

  return (
    <div className="container">
    <section className='intro-section'>

            <div className="intro-wrapper">
                <div className="intro-wrapper-left">
                    <h1>{data.t('main.title')}</h1>
                    <h2>{data.t('main.subtitle')}</h2>
                    <p>{data.t('main.description')}</p>
                    <div className="buttons">
                        <button className='twitter-btn'><RxTwitterLogo /> Twitter</button>
                        <button className='linkedin-btn'><SlSocialLinkedin /> Linkedin</button>
                        <button className='medium-btn'><PiMediumLogoLight /> Medium</button>
                    </div>
                </div>
                <div className="intro-wrapper-right">
                    <img src={mainImg} alt='image' />
                </div>
            </div>

    </section>

    <section className='all-section'>
        <ul className='all-ul'>
            <li><a href="#">{data.t('all.all')}</a></li>
            <li><a href="#">{data.t('all.ui')}</a></li>
            <li><a href="#">{data.t('all.ux')}</a></li>
            <li><a href="#">{data.t('all.product')}</a></li>
            <li><a href="#">{data.t('all.articles')}</a></li>
            <li><a href="#">{data.t('all.tutorial')}</a></li>
            <li><a href="#">{data.t('all.news')}</a></li>
        </ul>
    </section>

    <section className='cards-section'>
        <div className="cards">

            <div className="card">
                <img src={card1} alt="card image" />
                <h3>{data.t('card.title')}</h3>
                <p>{data.t('card.description')}</p>
                <a href="#">{data.t('card.read')}</a>
            </div>

            <div className="card">
                <img src={card2} alt="card image" />
                <h3>{data.t('card.title')}</h3>
                <p>{data.t('card.description')}</p>
                <a href="#">{data.t('card.read')}</a>
            </div>

            <div className="card">
                <img src={card1} alt="card image" />
                <h3>{data.t('card.title')}</h3>
                <p>{data.t('card.description')}</p>
                <a href="#">{data.t('card.read')}</a>
            </div>

            <div className="card">
                <img src={card2} alt="card image" />
                <h3>{data.t('card.title')}</h3>
                <p>{data.t('card.description')}</p>
                <a href="#">{data.t('card.read')}</a>
            </div>

            <div className="card">
                <img src={card1} alt="card image" />
                <h3>{data.t('card.title')}</h3>
                <p>{data.t('card.description')}</p>
                <a href="#">{data.t('card.read')}</a>
            </div>

            <div className="card">
                <img src={card2} alt="card image" />
                <h3>{data.t('card.title')}</h3>
                <p>{data.t('card.description')}</p>
                <a href="#">{data.t('card.read')}</a>
            </div>

        </div>
    </section>
    </div>


  )
}

export default Main