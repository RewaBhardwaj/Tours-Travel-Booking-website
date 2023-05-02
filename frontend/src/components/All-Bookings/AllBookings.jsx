import { useContext } from "react"
import { AuthContext } from "../../Context/AuthContext"

const AllBookings = () => {

    const user = useContext(AuthContext).user;

  return (
    <>
        {
            user.role === 'admin'
            ?
            'All Bookings'
            :
            'You are Not Authorized'
        }
    </>
  )
}

export default AllBookings
