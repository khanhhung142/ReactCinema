import React from 'react';
import { Button, Container } from 'reactstrap';



function TheaterList(props) {
    let listTheater = [];
    for (let i = 0; i < 20; i++) {
        listTheater.push({
            theaterName: "CNS Nhà văn hóa sinh viên",
            theaterId: "th001",
            address: "Nhà văn hóa sinh viên - ĐHQG",
            soldTickets: "10.000",
            doanhThu: "300.000.000",
        })
    }

    return (
        <Container fluid>
            <h1 className="mt-4">Danh sách rạp</h1>
            <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item active">Dashboard / Theater List</li>
            </ol>

            <div className="card mb-4">
                <div className="card-header">
                    <i className="fas fa-table mr-1"></i>
                                Các rạp đối tác
                            </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Mã rạp</th>
                                    <th>Tên rạp</th>
                                    <th>Địa chỉ</th>
                                    <th>Đã bán ( Vé )</th>
                                    <th>Tổng doanh thu từ rạp (VNĐ)</th>
                                    <th>Hành động</th>
                                </tr>
                            </thead>

                            <tbody>
                                {listTheater.length > 0 ? (
                                    listTheater.map((theater, index) => (
                                        <tr>
                                            <td>{theater.theaterId}</td>
                                            <td>{theater.theaterName}</td>
                                            <td>{theater.address}</td>
                                            <td>{theater.soldTickets}</td>
                                            <td>{theater.doanhThu}</td>
                                            <td>{(<div>
                                                <Button color="info" className="btn-tb">Chi tiết</Button>
                                                <Button color="success" className="btn-tb">Sửa</Button>
                                                <Button color="danger" className="btn-tb">Xóa</Button>
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

export default TheaterList;