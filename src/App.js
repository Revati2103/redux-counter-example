import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  reset,
  login,
  logout
} from "./redux/actions/index";

export default function App() {
  const counter = useSelector((state) => state.counter);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Redux counter example</h1>
      <h3>Counter</h3>
      <h3>{counter}</h3>

      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <h2>For Logged in users only</h2>
      <p>Log in</p>
      <button onClick={() => dispatch(login())}>Login</button>
      <button onClick={() => dispatch(logout())}>Logout</button>
      {auth ? (
        <div>
          <p>Hi there! You are successfully logged in.</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
