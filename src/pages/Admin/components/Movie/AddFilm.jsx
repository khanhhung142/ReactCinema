import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Col,
  Container,
  Row,
} from "reactstrap";
import InputField from "../../../../components/form/InputField";
import * as Yup from "yup";
import { useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {addFilm} from '../../../../actions/filmActions'
import Swal from "sweetalert2/dist/sweetalert2.js";
import { useSelector, useDispatch } from "react-redux";
function AddFilm(props) {
  const {data, error} = useSelector(state => state.addFilm);
  const dispatch = useDispatch();
  const schema = Yup.object().shape({
    tenPhim: Yup.string()
      .max(255, "Tên phim quá dài")
      .required("Tên phim không được bỏ trống"),
    maPhim: Yup.string().required("Mã phim không được để trống"),
    ngayKhoiChieu: Yup.string().required("Ngày khởi chiếu không được để trống"),
    moTa: Yup.string().required("Mô tả phim không được để trống"),
    trailer: Yup.string()
      .url("Trailer không hợp lệ")
      .required("Trailer không được để trống"),
    danhGia: Yup.number()
      .nullable(true)
      .typeError("Đánh giá phải là số")
      .required("Đánh giá không được để trống")
      .min(0, "Vui lòng nhập số lớn hơn 0")
      .max(10, "Vui lòng nhập số dưới 10"),
    hinhAnh: Yup.mixed().required("Hình ảnh không được để trống")
    .test("20mb", "File quá lớn", (value) => {
      return value && value[0].size <= 20000000; 
    })
    // .test("gif, png, jpg", "Sai định dạng file", (value) => {
    //   return (
    //     value &&
    //     (value[0].type === "image/gif" ||
    //       value[0].type === "image/jpg" ||
    //       value[0].type === "image/png")
    //   );
    // }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const inform = () => {
    if (data) {
      Swal.fire({
        title: "Xóa phim thành công",
        icon: "success",
        confirmButtonText: "OK",
      });
    }
    if (error) {
      Swal.fire({
        title: error,
        icon: "warning",
        confirmButtonText: "OK",
      });
    }
  };
  const handleAddFilm = (values) => {
    let biDanh = values.tenPhim.toLowerCase().replace(/\s/g, '-');
    const input = {...values, maNhom: "GP01", biDanh: biDanh}
    let form_data = new FormData();
    for (let key in input) {
      form_data.append(key, input[key])
    }
    dispatch(addFilm(form_data,inform))
  };
  return (
    <div className="add-flim">
      <Container fluid>
        <h1 className="mt-4">Thêm phim mới</h1>
        <ol className="breadcrumb mb-4">
          <li className="breadcrumb-item active">Dashboard / Add Film</li>
        </ol>
        <form className="form-group" onSubmit={handleSubmit(handleAddFilm)}>
          <Row>
            <Col md={9}>
              <div style={{ position: "relative", marginTop: 0 }}>
                <label for="tenPhim" className="labelCommon">
                  Tên phim
                </label>
                <input
                  name="tenPhim"
                  type="text"
                  {...register("tenPhim")}
                  placeholder="VD: Thám tử lừng danh Conan - Viên đạn đỏ"
                  className="form-control"
                  style={{ marginBottom: 40 }}
                />
                {errors.tenPhim && (
                  <div className="warnCommon">{errors.tenPhim.message}</div>
                )}
              </div>
            </Col>
            <Col md={3}>
              <div style={{ position: "relative", marginTop: 0 }}>
                <label for="danhGia" className="labelCommon">
                  Đánh giá
                </label>
                <input
                  name="danhGia"
                  type="text"
                  {...register("danhGia")}
                  placeholder="Đánh giá trên thang điểm 10"
                  className="form-control"
                  style={{ marginBottom: 40 }}
                />
                {errors.danhGia && (
                  <div className="warnCommon">{errors.danhGia.message}</div>
                )}
              </div>
            </Col>
          </Row>

          <Row xs={1} sm={2} md={3}>
            <Col>
              <div style={{ position: "relative", marginTop: 0 }}>
                <label for="maPhim" className="labelCommon">
                  Mã phim
                </label>
                <input
                  name="maPhim"
                  type="text"
                  {...register("maPhim")}
                  placeholder="VD: 1456"
                  className="form-control"
                  style={{ marginBottom: 40 }}
                />
                {errors.maPhim && (
                  <div className="warnCommon">{errors.maPhim.message}</div>
                )}
              </div>
            </Col>
            <Col>
              <div style={{ position: "relative", marginTop: 0 }}>
                <label for="maNhom" className="labelCommon">
                  Mã nhóm
                </label>
                <input
                  name="maNhom"
                  type="text"
                  value="GP01"
                  placeholder="GP01"
                  className="form-control"
                  style={{ marginBottom: 40 }}
                  readonly
                  disabled
                />
              </div>
            </Col>
            <Col>
              <div style={{ position: "relative", marginTop: 0 }}>
                <label for="ngayKhoiChieu" className="labelCommon">
                  Ngày khởi chiếu
                </label>
                <input
                  name="ngayKhoiChieu"
                  type="date"
                  className="form-control"
                  {...register("ngayKhoiChieu")}
                  style={{ marginBottom: 40 }}
                />
                {errors.ngayKhoiChieu && (
                  <div className="warnCommon">
                    {errors.ngayKhoiChieu.message}
                  </div>
                )}
              </div>
            </Col>
          </Row>
          <div style={{ position: "relative", marginTop: 0 }}>
            <label for="moTa" className="labelCommon">
              Mô tả
            </label>
            <textarea
              name="moTa"
              type="textarea"
              {...register("moTa")}
              rows="4"
              className="form-control"
              style={{ marginBottom: 40 }}
            />
            {errors.moTa && (
              <div className="warnCommon">{errors.moTa.message}</div>
            )}
          </div>

          <Row xs={1} md={2}>
            <Col>
              <div style={{ position: "relative", marginTop: 0 }}>
                <label for="trailer" className="labelCommon">
                  Trailer
                </label>
                <input
                  name="trailer"
                  type="text"
                  {...register("trailer")}
                  className="form-control"
                  style={{ marginBottom: 40 }}
                />
                {errors.trailer && (
                  <div className="warnCommon">{errors.trailer.message}</div>
                )}
              </div>
            </Col>
            <Col>
              <div style={{ position: "relative", marginTop: 0 }}>
                <label for="hinhAnh" className="labelCommon">
                  Hình ảnh
                </label>
                <input
                  name="hinhAnh"
                  type="file"
                  className="form-control-file"
                  {...register("hinhAnh")}
                  style={{ marginBottom: 40 }}
                />
                {errors.hinhAnh && (
                  <div className="warnCommon">{errors.hinhAnh.message}</div>
                )}
              </div>
            </Col>
          </Row>

          <Button
            className="btn my-2 ml-auto d-block"
            color="success"

            // disabled={isSubmitting}
          >
            Thêm
          </Button>
        </form>
      </Container>
    </div>
  );
}

export default AddFilm;
