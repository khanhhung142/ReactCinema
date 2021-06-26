import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "reactstrap";
import classes from './auth.module.scss';

function Register(props) {

    const [values, setValues] = useState({
        username: "",
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
                autoComplete={3123123}
                autoSave="off"
            >
                <h2>Đăng Ký</h2>
                <div className={classes.auth__field}>
                    <Input
                        type="text"
                        name="username"
                        value={values.username}
                        onChange={handleOnChange}
                        autoComplete="off"
                        required
                    />
                    <label for="username">Họ và tên</label>
                </div>
                <div className={classes.auth__field}>
                    <Input
                        type="text"
                        name="email"
                        value={values.email}
                        onChange={handleOnChange}
                        autoComplete="newsdasdasd"
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
                        autoComplete="dasdasdas"
                        required
                    />
                    <label for="password">Password</label>
                </div>
                <input
                    type="text"
                    autoComplete="ondas"
                    value=""
                    style={{ display: 'none', opacity: 0, position: 'absolute', left: '-100000px' }}
                    readOnly={true}
                />
                <button type="submit">Đăng Ký</button>
                <div className={classes.bonus}><span>Nếu đã có tài khoản, </span><Link to="/login">Đăng nhập</Link></div>
            </form>
        </div>
    );
}

export default Register;