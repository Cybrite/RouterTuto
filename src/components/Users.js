import { Outlet, Link, useSearchParams } from "react-router-dom";

const User = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get("filter") === "active";

  return (
    <>
      <div>
        <Link to="/UserDetails">
          <h1>User 1</h1>
        </Link>
        <Link to="/UserDetails">
          <h1>User 2</h1>
        </Link>
        <Link to="/UserDetails">
          <h1>User 3</h1>
        </Link>
      </div>
      <Outlet />
      <div>
        <button onClick={() => setSearchParams({ filter: "active" })}>
          Active users
        </button>
        <button onClick={() => setSearchParams({})}>Reset filter</button>
      </div>
      {showActiveUsers ? (
        <h1>Showing active users</h1>
      ) : (
        <h1>Showing all users</h1>
      )}
    </>
  );
};

export default User;
