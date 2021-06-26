import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { ErrorMessage, FastField, Formik } from 'formik';
import InputField from '../../../../components/form/InputField';
import * as Yup from 'yup';



const validationSchema = Yup.object().shape({
    filmName: Yup.string()
        .max(255, "Tên phim quá dài")
        .required("Tên phim không được bỏ trống"),
    filmId: Yup.string()
        .required("Mã phim không được để trống"),
    groupId: Yup.string()
        .required("Mã nhóm phim không được để trống"),
    startDate: Yup.string()
        .required("Ngày khởi chiếu không được để trống"),
    description: Yup.string()
        .required("Mô tả phim không được để trống"),
    trailer: Yup.string(),
});

function AddFilm(props) {

    const [thumbnailPreview, setThumbnailPreview] = useState("");
    const [bannerPreview, setBannerPreview] = useState("");

    const initialValues = {
        filmName: "",
        filmId: "",
        groupId: "",
        startDate: "",
        description: "",
        trailer: "",
        thumbnail: null,
        banner: null,
    }
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

                    const handleThumbnailOnChange = (e) => {
                        const file = e.currentTarget.files[0];
                        // if (file) {
                        formikProps.setFieldValue("thumbnail", file);
                        const reader = new FileReader();
                        reader.onloadend = () => {
                            setThumbnailPreview(reader.result);
                        };
                        reader.readAsDataURL(file);
                        // }
                    };
                    const handleBannerOnChange = (e) => {
                        const file = e.currentTarget.files[0];
                        // if (file) {
                        formikProps.setFieldValue("banner", file);
                        const reader = new FileReader();
                        reader.onloadend = () => {
                            setBannerPreview(reader.result);
                        };
                        reader.readAsDataURL(file);
                        // }
                    };


                    return (
                        <Container fluid>
                            <h1 className="mt-4">Thêm phim mới</h1>
                            <ol className="breadcrumb mb-4">
                                <li className="breadcrumb-item active">Dashboard / Add Film</li>
                            </ol>
                            <Form className="form">
                                <FastField
                                    name="filmName"
                                    component={InputField}
                                    type="text"
                                    label="Tên phim :"
                                    placeholder="VD: Thám tử lừng danh Conan - Viên đạn đỏ"
                                />
                                <Row xs={1} sm={2} md={3}>

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
                                            name="groupId"
                                            component={InputField}
                                            type="text"
                                            label="Mã nhóm :"
                                        />
                                    </Col>
                                    <Col>
                                        <FastField
                                            name="startDate"
                                            component={InputField}
                                            type="date"
                                            label="Ngày khởi chiếu :"
                                        />
                                    </Col>
                                </Row>
                                <FastField
                                    name="description"
                                    component={InputField}
                                    type="textarea"
                                    label="Mô tả phim"
                                    rows={5}
                                />


                                <FastField
                                    name="trailer"
                                    component={InputField}
                                    type="text"
                                    label="Trailer :"
                                />


                                <Row xs={1} md={2}>
                                    <Col>
                                        <FastField
                                            name="thumbnail"
                                            component={InputField}
                                            type="file"
                                            label="Thumbnail :"
                                            hidden={true}
                                            onChange={handleThumbnailOnChange}
                                        />

                                        <div>
                                            <label htmlFor="thumbnail">
                                                <div className="preview-img">
                                                    {values.thumbnail ? (
                                                        <img
                                                            alt="preview-image"
                                                            width="100%"
                                                            height="100%"
                                                            src={thumbnailPreview}
                                                        ></img>
                                                    ) : (
                                                        "+"
                                                    )}
                                                </div>
                                            </label>
                                        </div>
                                    </Col>
                                    <Col>
                                        <FastField
                                            name="banner"
                                            component={InputField}
                                            type="file"
                                            label="Banner :"
                                            hidden={true}
                                            onChange={handleBannerOnChange}
                                        />

                                        <div>
                                            <label htmlFor="banner">
                                                <div className="preview-img">
                                                    {values.banner ? (
                                                        <img
                                                            alt="preview-image"
                                                            width="100%"
                                                            height="100%"
                                                            src={bannerPreview}
                                                        ></img>
                                                    ) : (
                                                        "+"
                                                    )}
                                                </div>
                                            </label>
                                        </div>
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

export default AddFilm;