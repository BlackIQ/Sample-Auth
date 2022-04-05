import {Link} from "react-router-dom";
import {FaGoogle, FaLinkedin} from "react-icons/fa";

const Login = () => {
    return (
        <div className='py-5 px-5'>
            <div className='row'>
                <div className='col-md-4'>
                    <div className='m-1'>
                        <div className='p-4 shadow-3-strong'>
                            <h4 className='text-center'>ورود به حساب کاربری</h4>
                            <br/>
                            <form>
                                <label className='form-label' htmlFor='email'>شماره همراه یا ایمیل</label>
                                <input className='form-control form-control-lg' id='email' placeholder='amir@email.con'/>
                                <br/>
                                <label className='form-label' htmlFor='email'>شماره همراه یا ایمیل</label>
                                <input className='form-control form-control-lg' id='email' placeholder='amir@email.con'/>
                                <br/>
                                <p className='pointer text-primary'>رمز خود را فراموش کرده اید؟</p>
                                <button className='btn btn-lg btn-primary w-100'>ورود</button>
                            </form>
                            <br/>
                            <button className='btn btn-lg btn-outline-primary w-100 rounded-3'>
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
                                <Link>ثبت نام کنید</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-8'>
                    <div className='m-1 text-center'>
                        <img src='https://faradars.org/theme/display/ilishop/media/login-main.svg' className='py-5'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
