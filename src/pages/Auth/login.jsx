import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "reactstrap";
import classes from './auth.module.scss';

function Login(props) {

    const [values, setValues] = useState({
        email: "",
        password: ""
    })

    const handleOnChange = (event) => {
        const target = event.target;
        const name = target.name;

        setValues({
            ...values,
            [name]: target.value,
        });
    };

    


    return (
        <div className={classes.auth}>
            <form
                className={classes.auth__form}
                autoSave="off"
            >
                <h2>Đăng Nhập</h2>
                <div className={classes.auth__field}>
                    <Input
                        type="text"
                        name="email"
                        value={values.email}
                        onChange={handleOnChange}
                        autoComplete="new-dapassworddasdasd"
                        required
                    />
                    <label for="username">Email</label>
                </div>
                <div className={classes.auth__field}>
                    <Input
                        type="password"
                        name="password"
                        value={values.password}
                        onChange={handleOnChange}
                        autoComplete="new-passworddasdasd"
                        required
                    />
                    <label for="password">Password</label>
                </div>
                <input
                    type="text"
                    autoComplete="ondasd"
                    value=""
                    style={{ display: 'none', opacity: 0, position: 'absolute', left: '-100000px' }}
                    readOnly={true}
                />
                <button type="submit">Đăng Nhập</button>
                <div className={classes.bonus}><span>Nếu chưa có tài khoản, </span><Link to="/register">Đăng ký</Link></div>
            </form>
        </div>
    );
}

export default Login;