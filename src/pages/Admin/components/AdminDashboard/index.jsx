import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
import { Bar } from "react-chartjs-2";



AdminDashboard.propTypes = {

};

function AdminDashboard(props) {
    return (
        <Container fluid>
            <h1 className="mt-4">Dashboard</h1>
            <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item active">Dashboard</li>
            </ol>
            
            <Bar
                data={{
                    labels: [
                        "January",
                        "February",
                        "March",
                        "April",
                        "May"
                    ],
                    datasets: [
                        {
                            label: "Doanh thu bán vé ( triệu VNĐ )",
                            backgroundColor: [
                                "#3e95cd",
                                "#8e5ea2",
                                "#3cba9f",
                                "#e8c3b9",
                                "#c45850"
                            ],
                            data: [2478, 5267, 734, 784, 433]
                        }
                    ]
                }}
                options={{
                    legend: { display: false },
                    title: {
                        display: true,
                        text: "Predicted world population (millions) in 2050"
                    }
                }}
            />


        </Container>
    )
}

export default AdminDashboard;