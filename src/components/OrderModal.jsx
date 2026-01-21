import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import './OrderModal.css';

const OrderModal = ({ item, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        lineId: '',
        address: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the data to a server
        console.log('Order submitted:', { item, ...formData });
        setIsSubmitted(true);
    };

    if (!item) return null;

    return (
        <div className='modal-overlay'>
            <div className='modal-container'>
                <div className='modal-header'>
                    <h2>{item.title} を注文する</h2>
                    <button className='close-btn' onClick={onClose}>
                        <FaTimes />
                    </button>
                </div>

                {isSubmitted ? (
                    <div className='success-message'>
                        <h3>ご注文ありがとうございます！</h3>
                        <p>リクエストを受け付けました。まもなくご連絡いたします。</p>
                        <button className='btn btn-primary' onClick={onClose}>閉じる</button>
                    </div>
                ) : (
                    <form className='order-form' onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <label htmlFor='name'>お名前</label>
                            <input
                                type='text'
                                id='name'
                                name='name'
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='phone'>電話番号</label>
                            <input
                                type='tel'
                                id='phone'
                                name='phone'
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='lineId'>Line ID</label>
                            <input
                                type='text'
                                id='lineId'
                                name='lineId'
                                value={formData.lineId}
                                onChange={handleChange}
                                placeholder="任意"
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='address'>お届け先住所</label>
                            <textarea
                                id='address'
                                name='address'
                                value={formData.address}
                                onChange={handleChange}
                                required
                                rows='3'
                            ></textarea>
                        </div>
                        <div className='modal-footer'>
                            <p className='total-price'>合計: {item.price}</p>
                            <button type='submit' className='btn btn-primary'>
                                注文を確定する
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default OrderModal;
