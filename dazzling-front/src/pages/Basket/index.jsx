import React, { useContext } from 'react'
import { BasketContext } from '../../context/BasketContext'

const Basket = () => {
    const { basket, removeBasket, increaseCount,decreaseCount, } = useContext(BasketContext)
    return (
        <>
            <div className='blogs_cards'>
                {basket && basket
                    .map((x) => (
                        <div className='blogs_card'>
                            <h2>{x.title}</h2>
                            <p>{x.category}</p>
                            <div className='blogs_card_content'>
                                <img src={x.img} alt="" />
                                <div className='blogs_card_content_text'>
                                    <p>{x.description}</p>
                                    <button onClick={() => removeBasket(x)}>delete basket</button>
                                    <button onClick={()=>increaseCount()}>+</button>
                                    <p>{x.count}</p>
                                    <button onClick={()=>decreaseCount}>-</button>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </>
    )
}

export default Basket