import { AppState } from "../../../redux/store/configureStore";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import './login.css';
import { fetchLoginDetails } from "../../../redux/actions";
import { useState, useEffect } from 'react';
import { FetchLogin } from "../../../types/actions";
import { useNavigate } from 'react-router-dom';

type Props = LinkStateProps & LinkDispatchProps;

function Login(props: Props) {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    });
    const [loggedIn, setIsLoggedIn] = useState(false);
    const { username, password } = inputs;

    useEffect(() => {
        props.fetchLoginDetails()
    }, [props])

    const handleSubmit = () => {
        if (props.rootUser.username === username && props.rootUser.password === password) //Root 123
        {
            setIsLoggedIn(false)
            navigate('/products');
        }
        else setIsLoggedIn(true);
    }

    function handleChange(e: any) {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    return (
        <div className="loginContainer">
            <div className="descriptionSection">
                <h1 style={{ fontWeight: 'bold' }}> Login </h1>
                <p> Get access to your Orders, Wishlist and Recommendations </p>
            </div>
            <form name="loginForm"  >
                {loggedIn && <p>Your login credentials could not be verified, Please try again.</p>}

                <label >Username</label>
                <input required type='text' placeholder='Username' name='username' value={username} onChange={(e) => { handleChange(e) }} />
                <label >Password</label>
                <input required type='password' placeholder='Password' name='password' value={password} onChange={(e) => { handleChange(e) }} />
                <button className="submitButton" onClick={handleSubmit} type="button"> Login </button>
            </form>
        </div>
    )
}

interface LinkStateProps {
    rootUser: { username: string, password: string }
}

interface LinkDispatchProps {
    fetchLoginDetails: () => void;
}

const mapStateToProps = (state: AppState): LinkStateProps => ({
    rootUser: state.rootUser
});

const mapDispatchToProps = (dispatch: Dispatch<FetchLogin>): LinkDispatchProps => ({
    fetchLoginDetails: () => dispatch(fetchLoginDetails()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);


