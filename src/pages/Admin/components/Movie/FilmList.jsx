import React from 'react';
import { Button, Container } from 'reactstrap';



function FilmList(props) {
    let listFilm = [];
    for (let i = 0; i < 20; i++) {
        listFilm.push({
            name: "Thám tử lừng danh Conan : Viên đạn đỏ",
            filmId: "id001",
            groupId: "GP016",
            startDate: "15/05/2021",
            cost: "500.000.000",
        })
    }
    console.log(listFilm)

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
                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Tên phim</th>
                                    <th>Mã phim</th>
                                    <th>Mã nhóm</th>
                                    <th>Ngày khởi chiếu</th>
                                    <th>Doanh thu (VNĐ)</th>
                                    <th>Hành động</th>
                                </tr>
                            </thead>

                            <tbody>
                                {listFilm.length > 0 ? (
                                    listFilm.map((film, index) => (
                                        <tr>
                                            <td>{film.name}</td>
                                            <td>{film.filmId}</td>
                                            <td>{film.groupId}</td>
                                            <td>{film.startDate}</td>
                                            <td>{film.cost}</td>
                                            <td>{(<div>
                                                <Button color="info" className="btn-tb">Chi tiết</Button>
                                                <Button color="success" className="btn-tb">Sửa</Button>
                                                <Button color="danger" className="btn-tb">Ngừng chiếu</Button>
                                            </div>)}</td>
                                        </tr>
                                    ))
                                ) : (
                                    null
                                )}
                                

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Container>

    );
}

export default FilmList;