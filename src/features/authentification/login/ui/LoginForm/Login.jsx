import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {Redirect} from 'react-router-dom';
import {required} from "../../../../../shared/lib/validators/validators";
import styleFormControls from '../../../../../shared/ui/FormControls/FormControls.module.css'
import {Button, Element} from "../../../../../shared/ui";
import {loginTC} from "../../model/login";
import styles from './LoginForm.module.scss';

export const Login = () => {
    const dispatch = useDispatch()
    const {isAuth, captcha} = useSelector(({auth}) => auth);

    const onSubmit = (value) => {
        dispatch(loginTC(value));
    }

    return (
        <>
            {isAuth
                ? <Redirect to={"/profile"}/>
                : <div className={styles.loginBlock}>
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
            <div className={styles.rememberMe}>
                <label>Remember me:</label>
                <Field label={'Remember me:'} name={'rememberMe'} component={Element} type="checkbox"/>
            </div>

            {error && <div className={styleFormControls.errorBlock}>{error}</div>}

            {captcha &&
                <div className={styles.captchaBlock}>
                    <img src={captcha} alt="captcha"/>
                    <Field placeholder={'Enter captcha'} name={'captcha'} component={Element} type="text"/>
                </div>
            }
            <Button
                className={styles['login-button']}
                buttonType="primary"
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
