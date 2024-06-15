import { useNavigate } from "react-router-dom";

export default function Home() {
  const Navigate = useNavigate();

  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => Navigate("/summary", { replace: true })}>
        Order
      </button>
    </div>
  );
}
