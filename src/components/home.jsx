import {useAuthState} from "react-firebase-hooks/auth";
import {auth, firebaseLogout} from '../firebase/reactfire';
import {useEffect} from "react";
import {useHistory} from "react-router-dom";

const Home = () => {
    const [user, loading, error] = useAuthState(auth);

    const history = useHistory();

    useEffect(() => {
        if (loading) return;
        if (!user) history.push('/login');
    }, [user, loading])

    return (
        <div>
            <h1>خانه</h1>
            <br/>
            <span className='pointer' onClick={() => firebaseLogout()}>
                خروج
            </span>
        </div>
    );
}

export default Home;
