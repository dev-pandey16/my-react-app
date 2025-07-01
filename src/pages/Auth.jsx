import { useSelector , useDispatch } from "react-redux";
import { login , logout} from '../Redux/features/slices/authSlice';

const Auth = () => {
    const isLoggedIn = useSelector((state)=> state.auth.isLoggedIn);
    const dispatch = useDispatch();

     return (
    <div className="text-center mt-10 space-y-4">
      <h1 className="text-2xl font-semibold">
        {isLoggedIn ? "Welcome, Dev!" : "Please log in"}
      </h1>
      <button
        onClick={() => dispatch(isLoggedIn ? logout() : login())}
        className="bg-indigo-600 text-black px-6 py-2 rounded shadow-md"
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
};


export default Auth;
