// sass
import './speakers.sass'

// assets
import headphonesNav from '../../assets/headphonesNav.png'
import chevron from '../../assets/chevron.png'
import speakersNav from '../../assets/speakersNav.png'
import earphonesNav from '../../assets/earphonesNav.png'

// hooks
import { useNavigate } from 'react-router-dom'

const Speakers = () => {

// navigation
    const navigate = useNavigate()

    const handleClick = (page) => {
        navigate(page)
        window.scrollTo(0, 0)
    }

    return (
        <div className='speakers'>
            <header className='title'>
                <h3>speakers</h3>
            </header>

            <section className='group1'>
                <div className='zx9-img'>
                    
                </div>
                <div className='group1-text'>
                    <p className='overline'>new product</p>
                    <h2>ZX9 <br></br>SPEAKER </h2>
                    <p className='body first'>
                        Upgrade your sound system with the all new ZX9 active speaker. 
                        It’s a bookshelf speaker system that offers truly wireless connectivity -- 
                        creating new possibilities for more pleasing and practical audio setups.
                    </p>
                    <button onClick={() => handleClick('/product/zx9')} className='btn-1'>see product</button>
                </div>
            </section>

            <section className='group2'>
                <div className='group1-text-left'>
                    <h2>ZX7 <br></br>SPEAKER</h2>
                    <p className='body'>
                        Stream high quality sound wirelessly with minimal loss. 
                        The ZX7 bookshelf speaker uses high-end audiophile components that 
                        represents the top of the line powered speakers for home or studio use.
                    </p>
                    <button onClick={() => handleClick('/product/zx7')} className='btn-1'>see product</button>
                </div>
                <div className='zx7-img'>
                    
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
                    <button className='btn-3'>SHOP <img src={chevron} alt="chevron" /> </button>
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

export default Speakers