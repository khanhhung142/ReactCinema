import React from "react";
import { Link } from "react-router-dom";
import { Input } from "reactstrap";
import classes from "./auth.module.scss";
import { Redirect, useLocation } from "react-router";
import qs from "qs";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { postLogin } from "../../actions/accountAction";
function Login(props) {
  const dispatch = useDispatch();
  const { userInfo, error } = useSelector((state) => state.account);
  const location = useLocation();
  const schema = yup.object().shape({
    taiKhoan: yup
      .string()
      .required("Vui lòng nhập tài khoản")
      .min(2, "Tài khoản phải dài hơn 2 ký tự")
      .max(20, "Tài khoản phải ngắn hơn 20 ký tự"),
    matKhau: yup
      .string()
      .required("Vui lòng nhập mật khẩu")
      .min(2, "Mật khẩu phải dài hơn 2 ký tự")
      .max(20, "Mật khẩu phải ngắn hơn 20 ký tự"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const handleLogin = (info) => {
    dispatch(postLogin(info));
  };
  if (userInfo) {
    const redirectTo = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    }).redirectTo;
    console.log(redirectTo)
    if (redirectTo) {
      return <Redirect to={redirectTo} />;
    }
    return <Redirect to="/" />;
  }

  return (
    <div className={classes.auth}>
      <form
        className={classes.auth__form}
        autoSave="off"
        onSubmit={handleSubmit(handleLogin)}
      >
        <h2>Đăng Nhập</h2>
        <div className={classes.auth__field}>
          <Input
            type="text"
            name="taiKhoan"
            {...register("taiKhoan")}
          />
          {errors.taiKhoan && (
            <div className={classes.warn}>{errors.taiKhoan.message}</div>
          )}
          <label for="taiKhoan">Tài khoản</label>
        </div>
        <div className={classes.auth__field}>
          <Input
            type="password"
            name="matKhau"
            {...register("matKhau")}
          />
          {errors.matKhau && (
            <div className={classes.warn}>{errors.matKhau.message}</div>
          )}
          <label for="matKhau">Mật khẩu</label>
        </div>
        <input
          type="text"
          autoComplete="ondasd"
          value=""
          style={{
            display: "none",
            opacity: 0,
            position: "absolute",
            left: "-100000px",
          }}
          readOnly={true}
        />
          {error && (
            <div className={classes.warn2}>{error}</div>
          )}
        <button>Đăng Nhập</button>

        <div className={classes.bonus}>
          <span>Chưa có tài khoản, </span>
          <Link to="/register">Đăng ký</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
