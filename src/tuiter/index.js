import TuitList from "./tuit-list";
import TuitListQuick from "./tuit-list-quick";
import {configureStore} from "@reduxjs/toolkit";
import tuitsReducer from "./tuits-reducer";
import {Provider} from "react-redux";

const store = configureStore({
    reducer: {
        tuitsData: tuitsReducer
    }
})

function Tuiter() {
    return (
        <Provider store={store}>
            <div>
                <h1>Tuiter</h1>
                <TuitList/>
                <TuitListQuick/>
                <h2>Navigation Bar</h2>
                <h2>Home Screen</h2>
                <h2>Explore Screen</h2>
            </div>
        </Provider>
    )
}

export default Tuiter;