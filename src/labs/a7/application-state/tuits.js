import {useSelector} from "react-redux";

const Tuits = () => {
  const tuits = useSelector(state => state.tuits)
  return(
    <>
      <h3>Tuits</h3>
      <ul className="list-group">
        {
          tuits.map(tuit =>
            <li className="list-group-item">
              {tuit.tuit}
            </li>
          )
        }
      </ul>
    </>
  )
}
export default Tuits