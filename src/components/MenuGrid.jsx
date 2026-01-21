import { useState } from 'react';
import OrderModal from './OrderModal';
import './MenuGrid.css';

const MENU_ITEMS = [
    {
        id: 1,
        title: '幕の内弁当',
        description: '焼き魚、卵焼き、煮物などが入った伝統的なお弁当。',
        price: '¥3,500',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 2,
        title: '唐揚げ弁当',
        description: 'サクサクの唐揚げとご飯、サラダのセット。',
        price: '¥2,800',
        image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 3,
        title: 'サーモン照り焼き弁当',
        description: '特製照り焼きソースで仕上げたサーモン。',
        price: '¥4,200',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 4,
        title: '天ぷらデラックス',
        description: '海老と野菜の天ぷら盛り合わせ。',
        price: '¥3,800',
        image: 'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 5,
        title: '野菜弁当',
        description: '季節の野菜と豆腐、玄米のヘルシー弁当。',
        price: '¥2,500',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },

    {
        id: 7,
        title: '特選寿司盛り合わせ',
        description: '新鮮なネタを贅沢に使った寿司盛り合わせ。',
        price: '¥9,000',
        image: '/menu-images/Typical_japanese_sushi_set.jpg',
    },
    {
        id: 8,
        title: '季節の特製弁当',
        description: '季節の食材をふんだんに使用した豪華なお弁当。',
        price: '¥10,000',
        image: '/menu-images/Oseti.jpg',
    },
    {
        id: 9,
        title: '洋風デラックス',
        description: 'ローストビーフやテリーヌなど、洋風の味わいを楽しめる一品。',
        price: '¥7,500',
        image: '/menu-images/western-osechi.jpg',
    },
    {
        id: 10,
        title: 'きらめき御膳',
        description: '彩り豊かで上品な味わいの御膳。',
        price: '¥6,500',
        image: '/menu-images/kirameki.jpg',
    },
    {
        id: 11,
        title: 'スタミナ弁当',
        description: 'ボリューム満点！お肉たっぷりのスタミナ弁当。',
        price: '¥5,500',
        image: '/menu-images/3333.webp',
    },
    {
        id: 12,
        title: '彩りランチ',
        description: '少しずつ色々な味が楽しめる、女性に人気のランチ。',
        price: '¥3,000',
        image: '/menu-images/images.jpg',
    },
];

const MenuGrid = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleOrderClick = (item) => {
        setSelectedItem(item);
    };

    const handleCloseModal = () => {
        setSelectedItem(null);
    };

    return (
        <div className='menu-container' id="menu">
            <h1 className='menu-heading'>メニュー</h1>
            <div className='menu-wrapper'>
                {MENU_ITEMS.map((item) => (
                    <div className='menu-card' key={item.id}>
                        <div className='menu-img-container'>
                            <img src={item.image} alt={item.title} className='menu-img' />
                        </div>
                        <div className='menu-info'>
                            <h3 className='menu-title'>{item.title}</h3>
                            <p className='menu-desc'>{item.description}</p>
                            <p className='menu-price'>{item.price}</p>
                            <button
                                className='btn btn-primary'
                                onClick={() => handleOrderClick(item)}
                            >
                                注文する
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            {selectedItem && (
                <OrderModal
                    item={selectedItem}
                    onClose={handleCloseModal}
                />
            )}
        </div>
    );
};

export default MenuGrid;
