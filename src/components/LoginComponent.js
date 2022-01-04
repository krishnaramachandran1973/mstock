import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import store from "../AppStore";

const LoginComponent = ({ dispatch }) => {
  const navigate = useNavigate();

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "LOGGED_IN" }); // firing an action to the store
    navigate("/companies", { replace: true });
  };
  return (
    <div className="container border rounded m-5 p-5">
      <h2>Login</h2>
      <button type="button" className="btn btn-primary" onClick={loginHandler}>
        Login
      </button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {};
};
export default connect(mapStateToProps)(LoginComponent);
