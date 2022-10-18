const Counter = ({ count, email, up, down }) => {
  return(
    <>
      <h4>Counter</h4>
      count = {count}
      <button onClick={up}>Up</button>
      <button onClick={down}>Down</button>
      <h1>Email = {email} {count}</h1>
    </>
  )
}
export default Counter;