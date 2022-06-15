import { useState } from "react"

const Tour = ({ tour, notInterested }) => {
    const [showMore, setShowMore] = useState(false)
    const {id, image, info, name, price } = tour
    return <div className="single-tour">
        <img src={image} alt={image} />
        <footer>
            <div className="tour-info">
                <h4>{name}</h4>
                <h4 className="tour-price">${price}</h4>
            </div>
            <p>
                {showMore ? info : `${info.substring(0, 200)}...`} 
                <button onClick={()=>setShowMore(!showMore)}>
                    {showMore ? "show less" :"Read more" }
                </button>
            </p>
            <button 
            className="delete-btn"
                onClick={()=>notInterested(id)}>
                Not Interested
            </button>
        </footer>
    </div>
}
export default Tour