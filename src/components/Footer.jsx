import './Footer.css';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='footer-container' id="contact">
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Miyoshinoのニュースレターに登録して、お得な情報を受け取りましょう
                </p>
                <p className='footer-subscription-text'>
                    いつでも登録解除できます。
                </p>
                <div className='input-areas'>
                    <form>
                        <input
                            className='footer-input'
                            name='email'
                            type='email'
                            placeholder='メールアドレス'
                        />
                        <button className='btn btn-outline'>登録する</button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>当店について</h2>
                        <a href='/'>ご利用方法</a>
                        <a href='/'>お客様の声</a>
                        <a href='/'>採用情報</a>
                        <a href='/'>利用規約</a>
                    </div>
                    <div className='footer-link-items'>
                        <h2>お問い合わせ</h2>
                        <a href='/'>コンタクト</a>
                        <a href='/'>サポート</a>
                        <a href='/'>店舗情報</a>
                        <a href='/'>スポンサー</a>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>ソーシャルメディア</h2>
                        <a href='/'>Instagram</a>
                        <a href='/'>Facebook</a>
                        <a href='/'>Youtube</a>
                        <a href='/'>Twitter</a>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <a href='/' className='social-logo'>
                            MIYOSHINO
                        </a>
                    </div>
                    <small className='website-rights'>MIYOSHINO © 2024</small>
                    <div className='social-icons'>
                        <a
                            className='social-icon-link facebook'
                            href='/'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <FaFacebook />
                        </a>
                        <a
                            className='social-icon-link instagram'
                            href='/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <FaInstagram />
                        </a>
                        <a
                            className='social-icon-link twitter'
                            href='/'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <FaTwitter />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Footer;
