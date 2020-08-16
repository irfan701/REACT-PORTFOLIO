import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";
import Loading from "../Loading/Loading";
import WentWrong from "../WentWrong/WentWrong";


class TopBanner extends Component {

    constructor(){

        super();

        this.state={

            title:"",
            subtitle:"",
            loadingClass:"text-center",
            mainDivClass:"d-none",
            WentWrong:"d-none"
        }

    }

    componentDidMount() {

        RestClient.GetRequest(AppUrl.homeTopTitle).then( (result)=> {
            if (result == null) {
                this.setState({loadingClass:"d-none",mainDivClass:"d-none", WentWrong:"text-center"})

            } else {

                var t = result[0].home_title;
                var x = result[0].home_subtitle;

                this.setState({title: t, subtitle: x, loadingClass: 'd-none', mainDivClass: 'text-center'})

            }

            }).catch(error=>{
            //this.setState({title:" ",subtitle:" "})
            this.setState({loadingClass:"d-none",mainDivClass:"d-none", WentWrong:"text-center"})
        })
    }


    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topFixedBanner p-0">

                    <div className="topBannerOverlay">

                        <Container className="topContent">
                            <Row>
                                <Col className={this.state.WentWrong}>
                                    <WentWrong/>
                                </Col>
                                <Col className={this.state.loadingClass}>
                                    <Loading/>
                                </Col>

                                <Col md={12} sm={12} lg={12} className={this.state.mainDivClass}>
                                    <h1 className="topTitle">{this.state.title}</h1>
                                    <h4 className="topSubTitle">{this.state.subtitle}</h4>
                                    <Button variant="primary">More Info</Button>
                                </Col>

                            </Row>
                        </Container>
                    </div>

                </Container>

            </Fragment>
        );
    }
}

export default TopBanner;