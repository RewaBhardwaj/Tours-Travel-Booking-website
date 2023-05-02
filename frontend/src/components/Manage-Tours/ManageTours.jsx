import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

const ManageTours = () => {
    const user = useContext(AuthContext).user;

  return (
    <>
    {
        user.role === 'admin'
        ?
        'Manage Tours'
        :
        'You are Not Authorized'
    }
    </>
  )
}

export default ManageTours
