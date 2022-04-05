import {Link, useHistory} from "react-router-dom";
import {FaGoogle, FaLinkedin} from "react-icons/fa";
import {auth, firebaseGoogle, firebaseRegister} from "../firebase/reactfire";
import {useEffect, useState} from "react";
import {useAuthState} from "react-firebase-hooks/auth";

const Register = () => {
    const [user, loading, error] = useAuthState(auth);

    const history = useHistory();

    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);
    const [repeatPassword, setRepeatPassword] = useState([]);

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
                            <h4 className='text-center'>ثبت نام</h4>
                            <br/>
                            <div className='p-4 rounded-5' style={{'background': '#ddd', 'border': 'solid 1px #aaa'}}>
                                <span>
                                    لطفا شماره موبایل یا ایمیل خود را با دقت وارد کنید. زیرا به عنوان نام کاربری شما استفاده خواهد شد.
                                </span>
                            </div>
                            <br/>
                            <div>
                                <label className='form-label' htmlFor='email'>شماره همراه یا ایمیل</label>
                                <input className='form-control form-control-lg' id='email' placeholder='amir@email.com' onChange={e => setEmail(e.target.value)}/>
                                <br/>
                                <label className='form-label' htmlFor='pass'>رمز عبور</label>
                                <input className='form-control form-control-lg' id='pass' type="password" placeholder='********' onChange={e => setPassword(e.target.value)}/>
                                <br/>
                                <label className='form-label' htmlFor='rpass'>تکرار رمز عبور</label>
                                <input className='form-control form-control-lg' id='rpass' type="password" placeholder='********' onChange={e => setRepeatPassword(e.target.value)}/>
                                <br/>
                                <p className={password.length >= 6 ? 'text-success' : 'text-danger'}>حداقل 6 کارکتر داشته باشد</p>
                                <p className={password !== '' && repeatPassword !== '' && password === repeatPassword ? 'text-success' : 'text-danger'}>رمز عبور یکسان باشد</p>
                                <br/>
                                <button onClick={() => firebaseRegister(email, password)} type='button' className='btn btn-lg btn-primary w-100'>ثبت نام</button>
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
                                قبلا ثبت نام کرده اید؟
                                &nbsp;
                                <Link to='/login' className='text-primary'>وارد شوید</Link>
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

export default Register;
