import ProfileScreen from "./profile-screen";
import BillingScreen from "./billing-screen";
import currentUserReducer from "./current-user";
import tuitsReducer from "./tuits-reducer";
import {createStore, combineReducers} from "redux";
import {Provider} from "react-redux";
import Tuits from "./tuits";

const masterReducer = combineReducers({
  currentUser: currentUserReducer,
  tuits: tuitsReducer
})
const store = createStore(masterReducer)

const ApplicationState = () => {
  return(
    <>
      <Provider store={store}>
        <h3>Application State</h3>
        <Tuits/>
        <ProfileScreen/>
        <BillingScreen/>
      </Provider>
    </>
  )
}
export default ApplicationState;