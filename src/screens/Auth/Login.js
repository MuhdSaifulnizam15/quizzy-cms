import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import PropTypes from 'prop-types';

import { useHistory, Link } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Form, Card, Button, FormCheck, Container, InputGroup } from '@themesberg/react-bootstrap';

import { Routes } from "routes";
import BgImage from "assets/images/illustrations/signin.svg";

async function loginUser(credentials) {
    return fetch('http://localhost:3001/v1/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

export default function Login({ setToken }) {
    const { t } = useTranslation();
    const history = useHistory();
    
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            email,
            password
        });

        if(token.tokens){
            setToken(token.tokens);
            history.push(Routes.Dashboard.path);
        }
    }

    return (
        <main>
            <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
                <Container>
                    <Row className="justify-content-center form-bg-image" style={{ backgroundImage: `url(${BgImage})` }}>
                        <Col xs={12} className="d-flex align-items-center justify-content-center">
                        <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                            <div className="text-center text-md-center mb-2 mt-md-0">
                                <h2 className="mb-0">{t("quizzy")}</h2>
                            </div>
                            <div className="text-center text-md-center mb-4 mt-md-0">
                                <h4 className="mb-0">{t("signInToOurPlatform")}</h4>
                            </div>
                            <Form className="mt-4" onSubmit={handleSubmit}>
                                <Form.Group id="email" className="mb-4">
                                    <Form.Label>{t("yourEmail")}</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Text>
                                            <FontAwesomeIcon icon={faEnvelope} />
                                        </InputGroup.Text>
                                        <Form.Control 
                                            autoFocus 
                                            required 
                                            type="email" 
                                            placeholder={t("sampleEmail")} 
                                            onChange={e => setEmail(e.target.value)}
                                        />
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Group id="password" className="mb-4">
                                        <Form.Label>{t("yourPassword")}</Form.Label>
                                        <InputGroup>
                                            <InputGroup.Text>
                                                <FontAwesomeIcon icon={faUnlockAlt} />
                                            </InputGroup.Text>
                                            <Form.Control 
                                                required 
                                                type="password" 
                                                placeholder={t("password")} 
                                                onChange={e => setPassword(e.target.value)}
                                            />
                                        </InputGroup>
                                    </Form.Group>
                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                    <Form.Check type="checkbox">
                                        <FormCheck.Input id="defaultCheck5" className="me-2" />
                                        <FormCheck.Label htmlFor="defaultCheck5" className="mb-0">{t("rememberMe")}</FormCheck.Label>
                                    </Form.Check>
                                    <Card.Link as={Link} to={Routes.ForgotPassword.path} className="small text-end">
                                        {t("forgotPassword")}?
                                    </Card.Link>
                                    </div>
                                </Form.Group>
                                <Button variant="primary" type="submit" className="w-100">
                                    {t("signIn")}
                                </Button>
                            </Form>

                            <div className="d-flex justify-content-center align-items-center mt-4">
                                <span className="fw-normal">
                                    {t("notRegistered")}
                                    <Card.Link as={Link} to={Routes.Register.path} className="fw-bold">
                                        { t("createAccount")}
                                    </Card.Link>
                                </span>
                            </div>
                        </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </main>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}