// sass
import './earphones.sass'

// assets
import headphonesNav from '../../assets/headphonesNav.png'
import chevron from '../../assets/chevron.png'
import speakersNav from '../../assets/speakersNav.png'
import earphonesNav from '../../assets/earphonesNav.png'

// hooks
import { useNavigate } from 'react-router-dom'


const Earphones = () => {

// navigation
    const navigate = useNavigate()

    const handleClick = (page) => {
        navigate(page)
        window.scrollTo(0, 0)
    }

    return (
        <div className='earphones'>
            <header className='title'>
                <h3>earphones</h3>
            </header>

            <section className='group1'>
                <div className='yx1-img'>
                    
                </div>
                <div className='group1-text'>
                    <p className='overline'>new product</p>
                    <h2>YX1 WIRELESS <br></br>EARPHONES</h2>
                    <p className='body first'>
                        Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones.
                        Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.
                    </p>
                    <button onClick={() => handleClick('/product/yx1')} className='btn-1'>see product</button>
                </div>
            </section>

            <section className='cards-container'>
                <div onClick={() => handleClick('/headphones')} className='card1-container'>
                    <img src={headphonesNav} alt="" />
                    <div className='box-shadow'></div>
                    <h6>headphones</h6>
                    <button className='btn-3'>SHOP <img src={chevron} alt="chevron" /> </button>
                </div>

                <div onClick={() => handleClick('/speakers')} className='card1-container'>
                    <img src={speakersNav} alt="" />
                    <div className='box-shadow'></div>
                    <h6>speakers</h6>
                    <button className='btn-3'>SHOP <img src={chevron} alt="chevron" />  </button>
                </div>

                <div onClick={() => handleClick('/earphones')} className='card1-container'>
                    <img src={earphonesNav} alt="" />
                    <div className='box-shadow'></div>
                    <h6>earphones</h6>
                    <button className='btn-3' >SHOP <img src={chevron} alt="chevron" /> </button>
                </div>
            </section>

            <section className='group4'>
                <div className='group4-text'>
                    <h2>bringing you the <span>best</span> audio gear</h2>
                    <p className='body'>Located at the heart of New York City, Audiophile is the premier store for high end headphones,
                        earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you
                        to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make
                        Audiophile the best place to buy your portable audio equipment.</p>
                </div>
                <div className='group4-img'>
                    
                </div>
            </section>
        </div>
    )
}

export default Earphones