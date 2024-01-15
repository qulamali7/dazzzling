import React, { useContext, useEffect, useState } from 'react'
import "./index.scss";
import { SearchContext } from '../../context/SearchContext';
import { WishlistContext } from '../../context/WishlistContext';
import { BasketContext } from '../../context/BasketContext';
const BlogsCards = () => {
    const {handleWishlist} = useContext(WishlistContext)
    const {addBasket} = useContext(BasketContext)
    const {search,handleSearch} = useContext(SearchContext)
    const [data, setData] = useState([])
    async function GetFetch() {
        try {
            await fetch("http://localhost:3100/blogs")
                .then(res => res.json())
                .then(data => setData(data))
        } catch (error) {
            console.log(error.message);
        }
    }
    useEffect(() => {
        GetFetch()
    }, [])


    return (
        <>
            <div className='search'>
                <input type="text" onChange={handleSearch} />
            </div>
            <div className='blogs_cards'>
                {data && data
                .filter((x)=>x.title.toLowerCase().includes(search.toLowerCase()))
                .map((x) => (
                    <div className='blogs_card'>
                        <h2>{x.title}</h2>
                        <p>{x.category}</p>
                        <div className='blogs_card_content'>
                            <img src={x.img} alt="" />
                            <div className='blogs_card_content_text'>
                                <p>{x.description}</p>
                                <button onClick={()=>addBasket(x)}>add basket</button>
                                <button onClick={()=>handleWishlist(x)}>add wishlist</button>
                                <button>delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default BlogsCards