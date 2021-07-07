import React from "react";
import { Link } from "react-router-dom";
import { Input } from "reactstrap";
import classes from "./auth.module.scss";
import { Redirect, useHistory } from "react-router";
import qs from "qs";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { postSignIn } from "../../actions/accountAction";

function Register(props) {
  const dispatch = useDispatch();
  const { isComplete, error } = useSelector((state) => state.signIn);
  const history = useHistory();
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
    hoTen: yup.string().required("Vui lòng nhập họ tên"),
    email: yup
      .string()
      .required("Vui lòng nhập email")
      .email("Email không hợp lệ"),
    soDt: yup
      .number()
      .required("Vui lòng nhập số điện thoại")
      .positive("Số điện thoại không hợp lệ")
      .integer("Số điện thoại không hợp lệ"),
    xacNhanMatKhau: yup
      .string()
      .oneOf([yup.ref("matKhau"), null], "Xác thực mật khẩu không đúng"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const linkTo = () => {
    history.push("/login")
  }
  const handleSignIn = (info) => {
    dispatch(postSignIn(info, linkTo));
  };
  return (
    <div className={classes.auth}>
      <form
        className={classes.auth__form}
        autoSave="off"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <h2>Đăng Ký</h2>
        <div className={classes.auth__field}>
          <Input type="text" name="hoTen" {...register("hoTen")} />
          {errors.hoTen && (
            <div className={classes.warn}>{errors.hoTen.message}</div>
          )}
          <label for="hoTen">Họ và tên</label>
        </div>
        <div className="row" style={{ margin: 0 }}>
          <div
            className={classes.auth__field + " col-5"}
            style={{ padding: 0 }}
          >
            <Input
              type="text"
              name="email"
              style={{ margin: 0 }}
              {...register("email")}
            />
            {errors.email && (
              <div className={classes.warn}>{errors.email.message}</div>
            )}
            <label for="email">Email</label>
          </div>
          <div className="col-1" style={{ padding: 0 }}></div>
          <div
            className={classes.auth__field + " col-6"}
            style={{ padding: 0 }}
          >
            <Input
              type="text"
              name="soDt"
              {...register("soDt")}
              style={{ margin: 0 }}
            />
            {errors.soDt && (
              <div className={classes.warn}>{errors.soDt.message}</div>
            )}
            <label for="soDt">Số điện thoại</label>
          </div>
        </div>

        <div className={classes.auth__field}>
          <Input type="text" name="taiKhoan" {...register("taiKhoan")} />
          {errors.taiKhoan && (
            <div className={classes.warn}>{errors.taiKhoan.message}</div>
          )}
          <label for="taiKhoan">Tài khoản</label>
        </div>
        <div className="row" style={{ margin: 0 }}>
          <div
            className={classes.auth__field + " col-5"}
            style={{ padding: 0 }}
          >
            <Input
              type="password"
              name="matKhau"
              style={{ margin: 0 }}
              {...register("matKhau")}
            />
            {errors.matKhau && (
              <div className={classes.warn}>{errors.matKhau.message}</div>
            )}
            <label for="matKhau">Mật khẩu</label>
          </div>
          <div className="col-1" style={{ padding: 0 }}></div>
          <div
            className={classes.auth__field + " col-6"}
            style={{ padding: 0 }}
          >
            <Input
              type="password"
              name="xacNhanMatKhau"
              {...register("xacNhanMatKhau")}
              style={{ margin: 0 }}
            />
            {errors.xacNhanMatKhau && (
              <div className={classes.warn}>
                {errors.xacNhanMatKhau.message}
              </div>
            )}
            <label for="xacNhanMatKhau">Nhập lại pass</label>
          </div>
        </div>

        <input
          type="text"
          autoComplete="ondas"
          value=""
          style={{
            display: "none",
            opacity: 0,
            position: "absolute",
            left: "-100000px",
          }}
          readOnly={true}
        />
        {error && <div className={classes.warn2}>{error}</div>}
        <button style={{ marginTop: "2rem" }}>Đăng Ký</button>
        <div className={classes.bonus}>
          <span>Đã có tài khoản, </span>
          <Link to="/login">Đăng nhập</Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
