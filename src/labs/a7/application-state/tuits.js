import {useDispatch, useSelector} from "react-redux";
import {deleteTuit, addTuit, likeTuit, unlikeTuit, updateTuit} from "./tuits-reducer";
import {useState} from "react";

const Tuits = () => {
  const [tuitBeingEdited, setTuitBeingEdited] = useState()
  const [tuitEditingString, setTuitEditingString] = useState('')
  const [tuitString, setTuitString] = useState('')
  const tuits = useSelector(state => state.tuits)
  const dispatch = useDispatch();

  const deleteTuitHandler = (tuit) => {
    dispatch(deleteTuit(tuit))
  }

  const addTuitHandler = () => {
    dispatch(addTuit(tuitString))
    setTuitString('')
  }

  const likeTuitHandler = (tuit) => {
    dispatch(likeTuit(tuit))
  }

  const unlikeTuitHandler = (tuit) => {
    dispatch(unlikeTuit(tuit))
  }

  const updateTuitHandler = (tuit, newTuitText) => {
  }

  const startEditingTuit = (tuit) => {
    setTuitBeingEdited(tuit)
    setTuitEditingString(tuit.tuit)
  }

  const doneEditingTuit = (tuit) => {
    setTuitBeingEdited(null)
    dispatch(updateTuit({...tuit, tuit: tuitEditingString}))
  }

  return(
    <>
      <h3>Tuits</h3>
      <ul className="list-group">
        <li className="list-group-item">
          <button
            onClick={addTuitHandler}
            className="btn btn-primary rounded-pill float-end">
            Tuit
          </button>
          <input
            className="form-control w-50"
            placeholder="What's happening?"
            onChange={(e) => setTuitString(e.target.value)}
            value={tuitString}/>
        </li>
        {
          tuits.map((tuit) =>
            <li key={tuit._id} className="list-group-item">
              {
                tuit !== tuitBeingEdited &&
                <button
                  onClick={() => startEditingTuit(tuit)}
                  className="btn btn-success float-end ms-2">
                  Edit
                </button>
              }
              {
                tuit === tuitBeingEdited &&
                <button
                  onClick={() => doneEditingTuit(tuit)}
                  className="btn btn-primary float-end ms-2">
                  Done
                </button>
              }
              <button
                onClick={() => deleteTuitHandler(tuit)}
                className="btn btn-danger float-end ms-2">
                Delete</button>
              {
                !tuit.liked &&
                <button
                  onClick={() => likeTuitHandler(tuit)}
                  className="btn btn-outline-danger float-end">
                  Like ({tuit.likes})
                </button>
              }
              {
                tuit.liked &&
                <button
                  onClick={() => unlikeTuitHandler(tuit)}
                  className="btn btn-danger float-end">
                  Liked ({tuit.likes})
                </button>
              }
              {
                tuit !== tuitBeingEdited &&
                <span
                  onClick={() => startEditingTuit(tuit)}>{tuit.tuit}</span>
              }
              {
                tuit === tuitBeingEdited &&
                <input
                  className="form-control w-50"
                  onChange={(e) => setTuitEditingString(e.target.value)}
                  value={tuitEditingString}/>
              }
            </li>
          )
        }
      </ul>
    </>
  )
}
export default Tuits