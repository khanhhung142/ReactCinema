import React from 'react';
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { ErrorMessage, FastField, Formik } from 'formik';
import InputField from '../../../../components/form/InputField';
import * as Yup from 'yup';



const validationSchema = Yup.object().shape({
    filmId: Yup.string()
        .required("Mã phim không được để trống"),
    theaterId: Yup.string()
        .required("Mã rạp không được để trống"),
    time: Yup.string()
        .required("Thời gian của suất chiếu không được để trống"),
    price: Yup.string()
        .required("Giá vé không được để trống") 
});

function AddShowTime(props) {
    const initialValues = {
        filmId: "",
        theaterId: "",
        time: "",
        price: "",
    };
    return (
        <div className="add-flim">
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
            >
                {(formikProps) => {
                    const {
                        values,
                        errors,
                        touched,
                        isSubmitting,
                        handleSubmit,
                    } = formikProps;

                    return (
                        <Container fluid>
                            <h1 className="mt-4">Tạo lịch chiếu</h1>
                            <ol className="breadcrumb mb-4">
                                <li className="breadcrumb-item active">Dashboard / Add Show TIme</li>
                            </ol>

                            <Form className="form">
                                <Row xs={1} md={2}>
                                    <Col>
                                        <FastField
                                            name="filmId"
                                            component={InputField}
                                            type="text"
                                            label="Mã phim :"
                                        />
                                    </Col>
                                    <Col>
                                        <FastField
                                            name="theaterId"
                                            component={InputField}
                                            type="text"
                                            label="Mã rạp :"
                                        />
                                    </Col>
                                </Row>

                                <Row xs={1} md={2}>
                                    <Col>
                                        <FastField
                                            name="time"
                                            component={InputField}
                                            type="datetime-local"
                                            label="Thời gian :"
                                        />
                                    </Col>
                                    <Col>
                                        <FastField
                                            name="price"
                                            component={InputField}
                                            type="number"
                                            label="Giá vé"
                                            placeholder="VNĐ"

                                        />
                                    </Col>
                                </Row>



                                <Button
                                    className="btn my-2 ml-auto d-block"
                                    color="success"
                                    type="submit"
                                    disabled={isSubmitting}
                                >
                                    Thêm
                                </Button>
                            </Form>
                        </Container>
                    );
                }}
            </Formik>
        </div>
    );
}

export default AddShowTime;