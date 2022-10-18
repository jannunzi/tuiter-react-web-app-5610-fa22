import {useSelector} from "react-redux";
import BillingScreen from "./billing-screen";

const ProfileScreen = () => {
  const currentUser = useSelector((state) => state.currentUser)
  return(
    <>
      <h4>Profile Screen</h4>
      {currentUser.firstName}
      <pre>
        {JSON.stringify(currentUser)}
      </pre>
      <BillingScreen/>
    </>
  )
}
export default ProfileScreen;