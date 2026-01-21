import './AboutSection.css';

const AboutSection = () => {
    return (
        <div className='about-container' id="about">
            <div className='about-wrapper'>
                <div className='about-text'>
                    <h2>Miyoshinoについて</h2>
                    <p>
                        みよしのでは、日本の豊かな四季を五感で楽しんでいただけるよう、その時々に最も美味しい<strong>「旬の食材」</strong>を厳選して使用しております。季節ごとに表情を変える献立で、皆様の大切なひとときを彩ります。
                    </p>

                    <div className='about-services'>
                        <div className='service-item'>
                            <h3>長寿・慶事のお祝い</h3>
                            <p>ご家族の大切な節目や長寿のお祝いに、季節の恵みを活かした体に優しく華やかなお料理をご用意いたします。</p>
                        </div>
                        <div className='service-item'>
                            <h3>法事・ご法要</h3>
                            <p>故人を偲ぶひとときを、四季の彩りを添えた真心込めたお料理でお手伝いさせていただきます。</p>
                        </div>
                        <div className='service-item'>
                            <h3>お座敷でのご宴会</h3>
                            <p>四季折々の味覚を囲みながら、店内の宴会場でゆったりとした時間をお過ごしください。</p>
                        </div>
                    </div>

                    <p className='about-closing'>
                        一期一会の心を大切に、旬の味覚とおもてなしでお待ち申し上げております。
                    </p>
                </div>
                <div className='about-img'>
                    <img
                        src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                        alt="Chef preparing bento"
                    />
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
