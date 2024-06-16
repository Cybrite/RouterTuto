import { Outlet } from "react-router-dom"

const User = () => {
  return (
    <>
    <div>
      <h1>User 1</h1>
      <h1>User 2</h1>
      <h1>User 3</h1>
    </div>
    <Outlet/>
    </>
  )
}

export default User
