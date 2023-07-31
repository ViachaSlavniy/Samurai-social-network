import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {useDispatch, useSelector} from 'react-redux';
import {required} from '../../shared/utilits/validators/validators';
import {Element} from '../FormControls/FormControls'
import s from './Login.module.scss';
import styleFormControls from './../FormControls/FormControls.module.css'
import {loginTC} from '../../entities/model/actions/auth';
import {Redirect} from 'react-router-dom';
import {Button} from "../../shared/ui";

const Login = () => {
    const dispatch = useDispatch()
    const {isAuth, captcha} = useSelector(({auth}) => auth);

    const onSubmit = (value) => {
        dispatch(loginTC(value));
    }

    return (
        <>{isAuth
            ? <Redirect to={"/profile"}/>
            : <div className={s.loginBlock}>
                <LoginReduxForm onSubmit={onSubmit} captcha={captcha}/>
            </div>
        }
        </>
    )
}

const LoginForm = ({captcha, error, ...props}) => {
    const {handleSubmit} = props
    return (
        <form onSubmit={handleSubmit} autoComplete="off">
            <div>
                <label>Email: </label>
                <Field validate={[required]} placeholder={'Enter your email'} name={'email'} component={Element}
                       type="email"/>
            </div>
            <div>
                <label>Password: </label>
                <Field validate={[required]} placeholder={'Enter your password'} name={'password'} component={Element}
                       type="password"/>
            </div>
            <div className={s.rememberMe}>
                <label>Remember me:</label>
                <Field label={'Remember me:'} name={'rememberMe'} component={Element} type="checkbox"/>
            </div>

            {error && <div className={styleFormControls.errorBlock}>{error}</div>}

            {captcha &&
                <div className={s.captchaBlock}>
                    <img src={captcha} alt="captcha"/>
                    <Field placeholder={'Enter captcha'} name={'captcha'} component={Element} type="text"/>
                </div>
            }
            <Button
                className={s['login-button']}
                buttonType="approve"
                type="submit"
            >
                Login
            </Button>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

export default Login
