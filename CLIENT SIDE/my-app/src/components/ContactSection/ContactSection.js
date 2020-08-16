import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";
import Loading from "../Loading/Loading";
import WentWrong from "../WentWrong/WentWrong";

class ContactSection extends Component {



    constructor() {
        super();
        this.state={

            address:'',
            email:'',
            phone:'',
            loading:true,
            error:false



        }
    }
    componentDidMount() {

        RestClient.GetRequest(AppUrl.footer).then( result=> {
            if (result == null) {
                this.setState({error:true,loading:false})

            } else {

                this.setState({
                    address: result[0].address,
                    email: result[0].email,
                    phone: result[0].phone,
                    loading: false
                })
            }
            }).catch(error=>{
            this.setState({error:true})
        })

    }

    sendContact = () => {

        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let msg = document.getElementById('msg').value;

        let JsonObj={name:name,email:email,msg:msg}

        RestClient.PostRequest(AppUrl.ContactSend,JSON.stringify(JsonObj)).then(result=>{
            alert("success")
        }).catch(error=>{


        });

    }


    render() {

        if (this.state.loading == true && this.state.error == false) {
            return <Loading/>
        }else if (this.state.loading == false  && this.state.error == false) {

            return (

                <Fragment>
                    <Container className="mt-5">
                        <Row>
                            <Col lg={6} md={6} sm={12}>
                                <h1 className="serviceName">Quick Connect</h1>

                                <Form>
                                    <Form.Group>
                                        <Form.Label className="serviceDescription">Name</Form.Label>
                                        <Form.Control id="name" type="text"/>
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label className="serviceDescription">Email address</Form.Label>
                                        <Form.Control id="email" type="text"/>
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label className="serviceDescription">Message</Form.Label>
                                        <Form.Control id="msg" as="textarea" rows="3"/>
                                    </Form.Group>

                                    <Button variant="primary" onClick={this.sendContact}>
                                        Submit
                                    </Button>
                                </Form>

                            </Col>

                            <Col lg={6} md={6} sm={12}>
                                <h1 className="serviceName">Discuss Now</h1>
                                <p className="serviceDescription">{this.state.address}</p>
                                <p className="serviceDescription">{this.state.email}</p>
                                <p className="serviceDescription">{this.state.phone}</p>
                            </Col>

                        </Row>
                    </Container>


                </Fragment>
            );
        } else if (this.state.error == true) {
            return <WentWrong/>
        }
    }
}

export default ContactSection;