import {useHistory} from "react-router-dom";
import {useEffect, useState} from "react";
import {auth, firebaseReset} from "../firebase/reactfire";
import {useAuthState} from "react-firebase-hooks/auth";

const Reset = () => {
    const [user, loading, error] = useAuthState(auth);

    const history = useHistory();

    const [email, setEmail] = useState([]);

    useEffect(() => {
        if (loading) return;
        if (user) history.push('/');
    }, [user, loading]);

    return (
        <div className='py-5 px-5'>
            <div className='row'>
                <div className='col-md-4'>
                    <div className='m-1'>
                        <div className='p-4 shadow-3-strong'>
                            <h4 className='text-center'>دریافت رمز عبور</h4>
                            <br/>
                            <div>
                                <label className='form-label' htmlFor='email'>شماره همراه یا ایمیل</label>
                                <input className='form-control form-control-lg' id='email' placeholder='amir@email.com' onChange={e => setEmail(e.target.value)}/>
                                <br/>
                                <button onClick={() => firebaseReset(email)} type='type' className='btn btn-lg btn-primary w-100'>دریافت رمز عبور</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-8'>
                    <div className='m-1 text-center'>
                        <img src='https://faradars.org/theme/display/ilishop/media/login-main.svg' className='py-5' alt='Image'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reset;
