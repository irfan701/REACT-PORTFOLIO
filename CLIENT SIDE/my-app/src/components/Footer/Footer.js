import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";
import Loading from "../Loading/Loading";
import WentWrong from "../WentWrong/WentWrong";

class Footer extends Component {


    constructor() {
        super();
        this.state={

            address:'',
            email:'',
            phone:'',
            facebook:'',
            youtube:'',
            footer_credit:'',
            loaderClass:'text-center',
            MainDivClass:'d-none',
            error:false


        }
    }
    componentDidMount() {

        RestClient.GetRequest(AppUrl.footer).then(result => {

            if (result == null) {
                this.setState({error:true,loading:false})
            } else {
                this.setState({

                    address: result[0].address,
                    email: result[0].email,
                    phone: result[0].phone,
                    facebook: result[0].facebook,
                    youtube: result[0].youtube,
                    footer_credit: result[0].footer_credit,
                    loaderClass: 'd-none', MainDivClass: 'p-5 text-justify'
                })
            }

        }).catch(error => {

            this.setState({error:true})

        })

    }


    render() {

        if (this.state.error == false) {

            return (
                <Fragment>
                    <Container fluid={true} className="footerSection text-center">
                        <Row>

                            <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                                <h1 className="serviceName">Follow Me</h1>
                                <a className="socialLink" target="_blank"
                                   href={"//" + this.state.facebook}>{this.state.facebook}</a><br/>
                                <a className="socialLink" target="_blank"
                                   href={"//" + this.state.youtube}>{this.state.youtube}</a>
                            </Col>

                            <Col lg={3} md={6} sm={12} className={this.state.loaderClass}>
                                <h1 className="serviceName">Address</h1>
                                <Loading/>
                            </Col>

                            <Col lg={3} md={6} sm={12} className={this.state.MainDivClass}>
                                <h1 className="serviceName">Address</h1>
                                <p className="serviceDescription">{this.state.address}</p>
                                <p className="serviceDescription">{this.state.email}</p>
                                <p className="serviceDescription">{this.state.phone}</p>
                            </Col>

                            <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                                <h1 className="serviceName">Information</h1>
                                <Link className="footerLink" to="/about">About Me</Link><br/>
                                <Link className="footerLink" to="/contact">Contact Me</Link>
                            </Col>

                            <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                                <h1 className="serviceName">Legal</h1>

                                <Link className="footerLink" to="/refund">Refund Policy</Link>
                                <br/>
                                <Link className="footerLink" to="/terms">Terms And Condition</Link><br/>
                                <Link className="footerLink" to="/privacy">Privacy Policy</Link><br/>

                            </Col>
                        </Row>
                    </Container>

                    <Container fluid={true} className="text-center copyRightSection">

                        <a className="copyRightLink" href="$">{this.state.footer_credit}</a>

                    </Container>
                </Fragment>
            );

        } else if (this.state.error==true) {

            return <WentWrong/>

        }

    }
}

export default Footer;