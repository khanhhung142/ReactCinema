import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  InputGroupAddon,
} from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  getFlims,
  deleteFilm,
  getFilmInfo,
} from "../../../../actions/filmActions.js";
import Swal from "sweetalert2/dist/sweetalert2.js";
function FilmList(props) {
  const [modalChiTiet, setModalChiTiet] = useState(false);
  const toggleChiTiet = () => setModalChiTiet(!modalChiTiet);
  const [modalSua, setModalSua] = useState(false);
  const toggleSua = () => setModalSua(!modalSua);
  const dispatch = useDispatch();
  const filmList = useSelector((state) => state.filmList.data);
  const { data, error } = useSelector((state) => state.deleteFilm);
  const filmInfo = useSelector((state) => state.filmInfo.data);
  useEffect(() => {
    dispatch(getFlims());
  }, []);
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
  const handleDelete = (id) => {
    dispatch(deleteFilm(id, inform));
  };
  const handleDetail = (id) => {
    dispatch(getFilmInfo(id, toggleChiTiet));
  };
  const handleUpdate = (id) => {
    dispatch(getFilmInfo(id, toggleSua));
  };
  return (
    <Container fluid>
      <h1 className="mt-4">Danh sách phim</h1>
      <ol className="breadcrumb mb-4">
        <li className="breadcrumb-item active">Dashboard / Film List</li>
      </ol>

      <div className="card mb-4">
        <div className="card-header">
          <i className="fas fa-table mr-1"></i>
          Các phim đang chiếu
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>Tên phim</th>
                  <th>Mã phim</th>
                  <th>Mã nhóm</th>
                  <th>Ngày khởi chiếu</th>
                  <th>Đánh giá</th>
                  <th>Hành động</th>
                </tr>
              </thead>

              <tbody>
                {filmList.length > 0
                  ? filmList.map((film, index) => (
                      <tr>
                        <td>{film.tenPhim}</td>
                        <td>{film.maPhim}</td>
                        <td>{film.maNhom}</td>
                        <td>{film.ngayKhoiChieu}</td>
                        <td>{film.danhGia}</td>
                        <td>
                          {
                            <div>
                              <Button
                                color="info"
                                className="btn-tb"
                                onClick={() => handleDetail(film.maPhim)}
                              >
                                Chi tiết
                              </Button>
                              <Button
                                color="success"
                                className="btn-tb"
                                onClick={() => handleUpdate(film.maPhim)}
                              >
                                Sửa
                              </Button>
                              <Button
                                color="danger"
                                className="btn-tb"
                                onClick={() => handleDelete(film.maPhim)}
                              >
                                Ngừng chiếu
                              </Button>
                            </div>
                          }
                        </td>
                      </tr>
                    ))
                  : null}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalChiTiet}
        toggle={toggleChiTiet}
        className={"modalTix"}
        size="lg"
      >
        <ModalHeader toggle={toggleChiTiet} className="modalTix__header">
          Xem chi tiết phim
        </ModalHeader>
        <ModalBody className="modalTix__body">
          <div className="row">
            <div className="col-12 col-lg-5">
              <img src={filmInfo.hinhAnh} alt="" className="banner" />
            </div>
            <div className="col-12 col-lg-7">
              <label for="tenPhim">Tên phim</label>
              <Input disabled value={filmInfo.tenPhim} name="tenPhim" />
              <label for="trailer">Trailer</label>
              {/* <InputGroup> */}
              <InputGroupAddon
                addonType="append"
                className="row"
                style={{ marginRight: 0 }}
              >
                <Input
                  disabled
                  value={filmInfo.trailer}
                  name="trailer"
                  className="col-9"
                />
                <Button
                  href={filmInfo.trailer}
                  className="input--btnTrailer col-3"
                >
                  Xem trailer
                </Button>
              </InputGroupAddon>
              {/* </InputGroup> */}
              <div className="row">
                <div className="col-6">
                  <label for="maNhom">Mã nhóm</label>
                  <Input disabled value={filmInfo.maNhom} name="maNhom" />
                </div>
                <div className="col-6">
                  <label for="maPhim">Mã phim</label>
                  <Input disabled value={filmInfo.maPhim} name="maPhim" />
                </div>
              </div>
              <div className="row">
                <div className="col-8">
                  <label for="ngayKhoiChieu">Ngày khởi chiếu</label>
                  <Input
                    disabled
                    value={filmInfo.ngayKhoiChieu}
                    name="ngayKhoiChieu"
                  />
                </div>
                <div className="col-4">
                  <label for="danhGia">Đánh giá</label>
                  <Input disabled value={filmInfo.danhGia} name="danhGia" />
                </div>
              </div>
              <label for="moTa">Mô tả</label>
              <Input
                type="textarea"
                disabled
                value={filmInfo.moTa}
                name="moTa"
                className="input--mota"
                style={{ height: "170px" }}
              />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleChiTiet}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>

      <Modal
        isOpen={modalSua}
        toggle={toggleSua}
        className={"modalTix"}
        size="lg"
      >
        <ModalHeader toggle={modalSua} className="modalTix__header">
          Chỉnh sửa phim
        </ModalHeader>
        <ModalBody className="modalTix__body">
          <form className="form-group">
            {/* //onSubmit={handleSubmit(handleAddFilm)}> */}
            <div className="row">
              <div className="col-12 col-lg-5">
                <img src={filmInfo.hinhAnh} alt="" className="banner" />
              </div>
              <div className="col-12 col-lg-7">
                <label for="tenPhim">Tên phim</label>
                <input  value={filmInfo.tenPhim} name="tenPhim" />
                <label for="trailer">Trailer</label>
                {/* <InputGroup> */}
                <InputGroupAddon
                  addonType="append"
                  className="row"
                  style={{ marginRight: 0 }}
                >
                  <Input
                    disabled
                    value={filmInfo.trailer}
                    name="trailer"
                    className="col-9"
                  />
                  <Button
                    href={filmInfo.trailer}
                    className="input--btnTrailer col-3"
                  >
                    Xem trailer
                  </Button>
                </InputGroupAddon>
                {/* </InputGroup> */}
                <div className="row">
                  <div className="col-6">
                    <label for="maNhom">Mã nhóm</label>
                    <Input disabled value={filmInfo.maNhom} name="maNhom" />
                  </div>
                  <div className="col-6">
                    <label for="maPhim">Mã phim</label>
                    <Input disabled value={filmInfo.maPhim} name="maPhim" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <label for="ngayKhoiChieu">Ngày khởi chiếu</label>
                    <Input
                      disabled
                      value={filmInfo.ngayKhoiChieu}
                      name="ngayKhoiChieu"
                    />
                  </div>
                  <div className="col-4">
                    <label for="danhGia">Đánh giá</label>
                    <Input disabled value={filmInfo.danhGia} name="danhGia" />
                  </div>
                </div>
                <label for="moTa">Mô tả</label>
                <Input
                  type="textarea"
                  disabled
                  value={filmInfo.moTa}
                  name="moTa"
                  className="input--mota"
                  style={{ height: "170px" }}
                />
              </div>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggleSua}>
            OK
          </Button>
          <Button color="secondary" onClick={toggleSua}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
}

export default FilmList;
