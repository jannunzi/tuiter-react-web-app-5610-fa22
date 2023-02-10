import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {createTuitThunk, deleteTuitThunk, findAllTuitsThunk} from "./tuits-thunks";

const TuitList = () => {
    const [tuitText, setTuitText] = useState('')
    const {tuits, loading} = useSelector((state) => state.tuitsData)
    const dispatch = useDispatch()
    const likeTuit = (tuit) => {
        tuit.liked = true
        tuit.likes = typeof tuit.likes === 'undefined' ? 1: tuit.likes + 1

    }
    useEffect(() => {
        dispatch(findAllTuitsThunk())
    }, [])
    return(
        <>
            <h3>Tuit List</h3>
            <ul className="list-group">
                {
                    loading &&
                    <li className="list-group-item">
                        Loading ...
                    </li>
                }
                <li className="list-group-item">
                    <button
                        onClick={() =>
                            dispatch(createTuitThunk(tuitText))}
                        className="btn btn-primary float-end">
                        Tuit
                    </button>
                    <input
                        value={tuitText}
                        onChange={(e) => setTuitText(e.target.value)}
                        placeholder="What's happening?" className="form-control w-75"/>
                </li>
                {
                    tuits.map((tuit) =>
                        <li className="list-group-item"
                            key={tuit._id}>
                            {
                                !tuit.liked &&
                                <button
                                    onClick={() => likeTuit(tuit)}
                                    className="btn-success btn float-end">
                                    Like
                                </button>
                            }
                            <button
                                onClick={() => {
                                    dispatch(deleteTuitThunk(tuit._id))
                                }}
                                className="float-end btn btn-danger">
                                Delete
                            </button>
                            {tuit.tuit}
                        </li>
                    )
                }
            </ul>
        </>
    )
}

export default TuitList;