import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from '../helpers/hooks/useForm';
import { registerAuth } from '../store/slices/auth/Thunks';
import { addUsername } from '../helpers/utils/fireStore';

export const RegisterPage = () => {

  const dispatch = useDispatch();

  const {username, email, password, onInputChange, formState} = useForm({
    username: "",
    email: "",
    password: ""
  });
  
  const onSubmit = async(event) => {
    event.preventDefault();
    if (username == null || username == '') {alert("Revise el campo 'Username'"); return}
    const auth = await dispatch(registerAuth(email, password));
    if (auth) {addUsername(username);}
    console.log(formState);
  };
  

  return (
    <>
    <div className='login_main_div absolute h-login-div w-login-div right-5 top-4 rounded-2xl shadow-xl bg-neutral-100 text-center'>
      <span className="titulo_div relative w-full h-16 text-login-title top-12 text-center font-bold"> Register here </span>
      <div className='campo_username relative h-20 w-8/12 m-auto top-20'>
        <span className="username_title w-64 h-7 font-medium block text-left"> Username </span>
        <input type='text' name='username' onChange={ (event) => onInputChange(event) } className="campo w-full block text-center bg-transparent rounded-2xl border-2 border-black" required></input>
      </div>
      <div className='campo_email relative h-20 w-8/12 m-auto top-20'>
        <span className="email_title w-64 h-7 font-medium block text-left"> Email </span>
        <input type='text' name='email' onChange={ (event) => onInputChange(event) } className="campo w-full block text-center bg-transparent rounded-2xl border-2 border-black" required></input>
      </div>
      <div className='campo_contraseña relative h-20 w-8/12 m-auto top-20'>
        <span className="password_title w-64 h-7 font-medium block text-left" > Password </span>
        <input type='password' name='password' onChange={ (event) => onInputChange(event) } className="campo w-full block text-center bg-transparent rounded-2xl border-2 border-black" required></input>
      </div>
      <button onClick={ (event) => onSubmit(event) } className='login_button relative w-72 block m-auto top-28 h-10 bg-cyan-500 rounded-3xl'>
        <span className="login_text text-neutral-100 font-bold text-2xl"> REGISTER </span>
      </button>
      <Link to='/'>
        <span className='register_link relative font-medium top-40 text-base underline'> Do you already have an account? </span>
      </Link>
      <div className='titulo_aplicacion relative block top-48'>
        <div className="imagen_icono relative h-16 w-16 inline-block bg-message-icon bg-contain top-4"></div>
        <span className="nombre_aplicacion relative font-bold text-5xl"> FastLook </span>
      </div>
    </div>
    <div className='advise_application absolute text-center w-1/2 h-3/4 left-20 top-16'>
        <h1 className='title relative w-full h-auto text-7xl font-bold text-white'> The next #1 social media application </h1>
        <span className='advise_area relative w-full h-auto top-12 text-5xl text-white'> What are you waiting for to register and connect with other users? Chat, posts, friendships, all in one, built with React.  </span>
        <div className='cloud_icon relative w-64 h-64 m-auto top-16 bg-cloud-icon bg-cover'/>
        <div className='notification_icon relative w-14 h-14 bg-contain m-auto bottom-20 bg-notification-icon'/>
    </div>
    </> 
  )
}
