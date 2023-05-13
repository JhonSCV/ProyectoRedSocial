import { useDispatch } from 'react-redux';
import { useForm } from '../helpers/hooks/useForm';
import { loginAuth } from '../store/slices/auth/Thunks';
import { Link, useNavigate } from 'react-router-dom';

export const LoginPage = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {email, password, onInputChange, formState} = useForm({
    email: "",
    password: ""
  });
  
  const onSubmit = async (event) => {
    event.preventDefault();
    const auth = await dispatch(loginAuth(email, password));
    console.log(formState);
    if (auth) {navigate("/logged");}
  };

  return (
    <>
    <div className='login_main_div absolute h-login-div w-login-div left-5 top-4 rounded-2xl shadow-xl bg-neutral-100 text-center'>
      <span className="titulo_div relative w-full h-16 text-login-title top-24 text-center font-bold"> Login to your account </span>
      <div className='campo_email relative h-20 w-8/12 m-auto top-36'>
        <span className="email_title w-64 h-7 font-medium block text-left"> Email </span>
        <input type='text' name='email' onChange={ (event) => onInputChange(event) } className="campo focus:border-cyan-500 focus:translate-y-0.5 outline-none focus:border-b-3 transition-all w-full block text-center bg-transparent border-b-2 border-black" ></input>
      </div>
      <div className='campo_contraseña relative h-20 w-8/12 m-auto top-36'>
        <span className="password_title w-64 h-7 font-medium block text-left" > Password </span>
        <input type='password' name='password' onChange={ (event) => onInputChange(event) } className="campo focus:border-cyan-500 focus:translate-y-0.5 outline-none focus:border-b-3 transition-all w-full block text-center bg-transparent border-b-2 border-black" ></input>
      </div>
      <button onClick={ (event) => onSubmit(event) } className='login_button hover:bg-slate-800 hover:shadow-md hover:shadow-cyan-500 hover:translate-y-px transition-all relative w-72 block m-auto top-40 h-10 bg-cyan-500 rounded-3xl'>
        <span className="login_text text-neutral-100 font-bold text-2xl"> LOG IN </span>
      </button>
      <Link to='/register'>
        <span className='register_link hover:text-cyan-500 hover:text-lg transition-all relative font-medium top-52 text-base underline'> New here? create an account. </span>
      </Link>
      <div className='titulo_aplicacion relative block top-64'>
        <div className="imagen_icono relative h-16 w-16 inline-block bg-message-icon bg-contain top-4"></div>
        <span className="nombre_aplicacion relative font-bold text-5xl"> FastLook </span>
      </div>
    </div>
    <div className='imagen_logo absolute w-96 h-96 left-icon-login top-52 bg-mini-logo bg-center bg-contain' />
    </>
  )
}
