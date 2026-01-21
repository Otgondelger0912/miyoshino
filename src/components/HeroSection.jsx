import './HeroSection.css';

const HeroSection = () => {
    return (
        <div className='hero-container' id="home">
            <h1>本格的な日本のお弁当</h1>
            <p>一箱に込められた伝統の味</p>
            <div className='hero-btns'>
                <a href="#menu" className='btn btn-primary'>
                    メニューを見る
                </a>
            </div>
        </div>
    );
};

export default HeroSection;
