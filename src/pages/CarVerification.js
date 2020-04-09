import React from 'react';
import { Button, Navbar, Form } from 'react-bootstrap'
import '../css/car-verification.css'


class VerificationForm extends React.Component {

    render() {
        return <body>
            <Navbar className="navbar navbar-light bg-light">
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src='../logo-hamroh.jpg'
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
      Hamroh
    </Navbar.Brand>
            </Navbar>
            <h4 id="title" className="container"> Добро пожаловать в документ подтверждения драйвера.</h4>
            <hr />
            <Form className="container">

                <Form.Group controlId="fullnameinput">
                    <Form.Label>Полное имя</Form.Label>
                    <Form.Control type="text" placeholder="Например: Said Vali" required />
                </Form.Group>
                <Form.Group controlId="phonenumber">
                    <Form.Label>Номер телефона</Form.Label>
                    <Form.Control type="tel" placeholder="Например: 933020202" required />
                </Form.Group>
                <Form.Group controlId="passportId">
                    <Form.Label>Серийный номер паспорта</Form.Label>
                    <Form.Control type="text" placeholder="Например: AB32231" required />
                </Form.Group>
                <Form.Group controlId="passportId">
                    <Form.Label>Серийный номер паспорта</Form.Label>
                    <Form.Control type="file" required />
                </Form.Group>
                <hr />
                <h4>О машине</h4>
                <Form.Group controlId="passportId">
                    <Form.Label>Серийный номер паспорта</Form.Label>
                    <Form.Control type="date" placeholder="Например: AB32231" required />
                </Form.Group>
                <Form.Group controlId="passportId">
                    <Form.Label>VIN (необязательный) </Form.Label>
                    <Form.Control type="text" placeholder="Например: 1HGCM82633A004352" />
                </Form.Group>
                <Form.Group controlId="passportId">
                    <Form.Label>Выберите автомобиль изображения</Form.Label>
                    <Form.Control type="file" required />
                </Form.Group>

                <Button type="submit" className="btn btn-primary btn btn-primary container-fluid">Отправить</Button>

            </Form>
        </body>
    }
}

export default VerificationForm;