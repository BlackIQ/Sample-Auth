import {Link, useHistory} from "react-router-dom";
import {FaGoogle, FaLinkedin} from "react-icons/fa";
import {useEffect, useState} from "react";
import {firebaseLogin, auth, firebaseGoogle} from "../firebase/reactfire";
import {useAuthState} from "react-firebase-hooks/auth";

const Login = () => {
    const [user, loading, error] = useAuthState(auth);

    const history = useHistory();

    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);

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
                            <h4 className='text-center'>ورود به حساب کاربری</h4>
                            <br/>
                            <div>
                                <label className='form-label' htmlFor='email'>شماره همراه یا ایمیل</label>
                                <input className='form-control form-control-lg' id='email' placeholder='amir@email.com' onChange={e => setEmail(e.target.value)}/>
                                <br/>
                                <label className='form-label' htmlFor='pass'>رمز عبور</label>
                                <input className='form-control form-control-lg' id='pass' type="password" placeholder='********' onChange={e => setPassword(e.target.value)}/>
                                <br/>
                                <p className='pointer text-primary'><Link to='/reset'>رمز خود را فراموش کرده اید؟</Link></p>
                                <button onClick={() => firebaseLogin(email, password)} type='type' className='btn btn-lg btn-primary w-100'>ورود</button>
                            </div>
                            <br/>
                            <button onClick={() => firebaseGoogle()} className='btn btn-lg btn-outline-primary w-100 rounded-3'>
                                ورود با حساب گوگل
                                &nbsp;
                                <FaGoogle className='text-primary'/>
                            </button>
                            <br/>
                            <br/>
                            <button className='btn btn-lg btn-outline-primary w-100 rounded-3'>
                                ورود با حساب لینکدین
                                &nbsp;
                                <FaLinkedin className='text-primary'/>
                            </button>
                            <br/>
                            <br/>
                            <div className='text-center'>
                                هنوز عضو نشده اید؟
                                &nbsp;
                                <Link to='/register' className='text-primary'>ثبت نام کنید</Link>
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

export default Login;
