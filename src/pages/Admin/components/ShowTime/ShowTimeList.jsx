import React from 'react';
import PropTypes from 'prop-types';
import { Button, Container } from 'reactstrap';

ShowTimeList.propTypes = {

};

function ShowTimeList(props) {
    let listShow = [];

    for(let i = 0; i < 20; i++) {
        listShow.push({
            showId: "sh001",
            filmName: "Thám tử lừng danh Conan : Viên đạn đỏ",
            filmId: "id001",
            theaterName: "CNS - Hai Bà Trưng",
            theaterId: "th001",
            time: "15/5/2021 18:00",
            soldTickets: 80,
            sumTickets: 100,
        })
    }
    return (
        <Container fluid>
            <h1 className="mt-4">Danh sách suất chiếu</h1>
            <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item active">Dashboard / Show Time List</li>
            </ol>

            <div className="card mb-4">
                <div className="card-header">
                    <i className="fas fa-table mr-1"></i>
                    Danh sách suất chiếu
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Mã suất</th>
                                    <th>Tên phim</th>
                                    <th>Mã phim</th>
                                    <th>Rạp</th>
                                    <th>Mã rạp</th>
                                    <th>Thời gian</th>
                                    <th>Số vé đã bán</th>
                                    <th>Hành động</th>
                                </tr>
                            </thead>

                            <tbody>
                                {listShow.length > 0 ? (
                                    listShow.map((show, index) => (
                                        <tr>
                                            <td>{show.showId}</td>
                                            <td>{show.filmName}</td>
                                            <td>{show.filmId}</td>
                                            <td>{show.theaterName}</td>
                                            <td>{show.theaterId}</td>
                                            <td>{show.time}</td>
                                            <td>{show.soldTickets}/{show.sumTickets}</td>
                                            <td>{(<div>
                                                <Button color="info" className="btn-tb">Chi tiết</Button>
                                                <Button color="danger" className="btn-tb">Hủy suất chiếu</Button>
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

export default ShowTimeList;