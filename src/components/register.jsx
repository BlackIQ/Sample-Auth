import {Link} from "react-router-dom";
import {FaGoogle, FaLinkedin} from "react-icons/fa";

const Register = () => {
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
                            <form>
                                <label className='form-label' htmlFor='email'>شماره همراه یا ایمیل</label>
                                <input className='form-control form-control-lg' id='email' placeholder='amir@email.com'/>
                                <br/>
                                <label className='form-label' htmlFor='pass'>رمز عبور</label>
                                <input className='form-control form-control-lg' id='pass' type="password" placeholder='********'/>
                                <br/>
                                <label className='form-label' htmlFor='rpass'>تکرار رمز عبور</label>
                                <input className='form-control form-control-lg' id='rpass' type="password" placeholder='********'/>
                                <br/>
                                <button className='btn btn-lg btn-primary w-100'>ثبت نام</button>
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
