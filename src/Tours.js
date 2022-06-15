import Tour from "./Tour"

const Tours = ({ tours, notInterested }) => {

    return <>
        {
            tours.map(tour => {
                return (
                    <Tour
                        tour={tour}
                        notInterested={notInterested}
                        key={tour.id}>
                    </Tour>
                )
            })
        }
    </>
}
export default Tours