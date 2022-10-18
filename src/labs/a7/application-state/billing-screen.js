import {useSelector} from "react-redux";

const BillingScreen = () => {
  const user = useSelector(data => data.currentUser)
  return(
    <>
      <h4>Billing Screen</h4>
      {user.lastName}
      <pre>
        {JSON.stringify(user)}
      </pre>
    </>
  )
}
export default BillingScreen;