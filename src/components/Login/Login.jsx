import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {useDispatch, useSelector} from 'react-redux';
import {required} from './../utilits/validators/validators';
import {Element} from './../FormControls/FormControls'
import s from './Login.module.css';
import { loginTC } from '../../redux/actions/auth';
import { Redirect } from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch()
    const {isAuth} = useSelector(({auth}) => auth);

    const onSubmit = (value) => {
        dispatch(loginTC(value));
    }
    
    return (
        <>{isAuth
        ? <Redirect to={"/prolfile"}/>
        :<div className={s.loginBlock}>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
        }
        </>
    )
}

const LoginForm = (props) => {

    const {handleSubmit} = props

    return (
        <form onSubmit={handleSubmit}>
            <Field validate={[required]} placeholder={'Enter your email'} label={'Email:'} name={'email'} component={Element} type="email"/>
            <Field validate={[required]} placeholder={'Enter your password'} label={'Password:'} name={'password'} component={Element} type="password"/>
            <Field label={'Remember me:'} name={'rememberMe'} component={Element} type="checkbox"/>
            <button className={s.btn}>Login</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

export default Login
