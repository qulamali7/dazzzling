import React, { useContext } from 'react'
import { WishlistContext } from '../../context/WishlistContext'

const Wishlist = () => {
    const { wishlist, handleWishlist } = useContext(WishlistContext)
    return (
        <>
            <div className='blogs_cards'>
                {wishlist && wishlist
                    .map((x) => (
                        <div className='blogs_card'>
                            <h2>{x.title}</h2>
                            <p>{x.category}</p>
                            <div className='blogs_card_content'>
                                <img src={x.img} alt="" />
                                <div className='blogs_card_content_text'>
                                    <p>{x.description}</p>
                                    <button>add basket</button>
                                    <button onClick={() => handleWishlist(x)} >delete wishlist</button>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </>
    )
}

export default Wishlist