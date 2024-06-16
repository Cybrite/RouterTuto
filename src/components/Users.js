import { Outlet , Link} from "react-router-dom"

const User = () => {
  return (
    <>
    <div>
      <Link to="/UserDetails"><h1>User 1</h1></Link>
      <Link to="/UserDetails"><h1>User 2</h1></Link>
      <Link to="/UserDetails"><h1>User 3</h1></Link>
    </div>
    <Outlet/>
    </>
  )
}

export default User
