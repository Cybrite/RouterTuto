import { useNavigate } from "react-router-dom"

const Sumarry = () => {
    const navigate = useNavigate();

  return (
    <div>
      <h1>Confirmed!</h1>
      <button onClick={() => navigate(-1) }>Order Again</button>
    </div>
  )
}

export default Sumarry
