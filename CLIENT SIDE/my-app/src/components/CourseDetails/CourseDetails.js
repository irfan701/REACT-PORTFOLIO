import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import {BigPlayButton, Player} from "video-react";
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";
import ReactHtmlParser from 'react-html-parser'
import Loading from "../Loading/Loading";
import WentWrong from "../WentWrong/WentWrong";

class CourseDetails extends Component {

    constructor() {
        super();
        this.state = {

            short_title: "",
            short_des: "",

            long_title: "",
            long_des: "",
            total_lecture: "",
            total_student: "",
            skill_all: "",
            video_url: "",
            courses_link: "",
            loading:true,
            error:false

        }
    }


    componentDidMount() {

        RestClient.GetRequest(AppUrl.courseDetail + this.props.id).then(result => {

            if (result == null) {
                this.setState({error:true,loading:false})

            } else {

                this.setState({

                    short_title: result[0]['short_title'],
                    short_des: result[0].short_des,
                    small_img: result[0].small_img,
                    long_title: result[0]['long_title'],
                    long_des: result[0].long_des,
                    total_lecture: result[0].total_lecture,
                    total_student: result[0].total_student,

                    skill_all: result[0].skill_all,
                    video_url: result[0].video_url,
                    courses_link: result[0].courses_link,
                    loading: false,

                })
            }

        }).catch(error => {
            this.setState({error:true})
        });
    }


    render() {
        if (this.state.loading == true && this.state.error == false) {
            return <Loading/>
        } else if (this.state.loading == false && this.state.error == false) {


            return (
                <Fragment>

                    <Container fluid={true} className="topFixedPage p-0">
                        <div className="topPageOverlay">
                            <Container className="topPageContentCourse">
                                <Row>

                                    <Col lg={6} md={6} sm={12}>
                                        <h3 className="courseFUllTitle">{this.state.long_title}</h3>


                                        <h5 className="courseSubTitle">Total Lecture={this.state.total_lecture}</h5>
                                        <h5 className="courseSubTitle">Total Student={this.state.total_student}</h5>
                                    </Col>

                                    <Col lg={6} md={6} sm={12}>
                                        <p className="courseDes">
                                            {ReactHtmlParser(this.state.long_des)}
                                        </p>
                                    </Col>

                                </Row>
                            </Container>
                        </div>
                    </Container>

                    <Container className="mt-5">

                        <Row>

                            <Col lg={6} md={6} sm={12}>

                                <h1 className="serviceName">Skill Your Get</h1>

                                {ReactHtmlParser(this.state.skill_all)}

                                <Button target="_blank" href={"//" + this.state.courses_link} variant="primary">More
                                    Info</Button>

                            </Col>

                            <Col lg={6} md={6} sm={12}>

                                <Player>
                                    <source src={this.state.video_url}/>
                                    <BigPlayButton position="center"/>
                                </Player>

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

export default CourseDetails;