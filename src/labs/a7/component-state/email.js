const Email = (
  {
    setEditingEmail,
    editingEmail,
    email,
    changeEmail
  }) => {
  return(
    <>
      <h4>Email</h4>
      <input
        type="checkbox"
        onChange={(e) => setEditingEmail(e.target.checked)}
        checked={editingEmail}/>
      {
        editingEmail &&
        <input value={email} onChange={changeEmail}/>
      }
      {
        !editingEmail &&
        <span>{email}</span>
      }
    </>
  )
}
export default Email;