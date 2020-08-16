import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlayCircle} from "@fortawesome/free-solid-svg-icons";
import 'video-react/dist/video-react.css';
import { Player,BigPlayButton } from 'video-react';
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";
import Loading from "../Loading/Loading";
import WentWrong from "../WentWrong/WentWrong";

class Video extends Component {

    constructor() {
        super();
        this.state = {
            show: false,
            video_desc: '',
            video_url: '',
            loading: true,
            error:false
        }
    }

    modalClose = () => {
        this.setState({show: false})
    }
    modalOpen = () => {
        this.setState({show: true})
    }


    componentDidMount() {

        RestClient.GetRequest(AppUrl.videoHome).then(result => {
            if (result == null) {
                this.setState({error:true,loading:false})

            } else {

                this.setState({
                    video_desc: result[0].video_des,
                    video_url: result[0].video_url,
                    loading: false
                })
            }
        }).catch(error => {
            this.setState({error:true,loading:false})
        })

    }


    render() {

        if (this.state.loading == true && this.state.error == false) {
            return <Loading/>
        } else if (this.state.loading == false && this.state.error == false) {

            return (
                <Fragment>
                    <Container className="text-center">
                        <Row>
                            <Col lg={12} md={12} sm={12} className="videoCard">

                                <div>
                                    <p className="videoTitle">How I Do</p>
                                    <p className="videoDes">{this.state.video_desc}</p>
                                    <p><FontAwesomeIcon onClick={this.modalOpen} className="playBtn"
                                                        icon={faPlayCircle}/></p>
                                </div>

                            </Col>
                        </Row>

                    </Container>

                    <Modal size="lg" show={this.state.show} onHide={this.modalClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>

                            <Player>
                                <source src={this.state.video_url}/>
                                <BigPlayButton position="center"/>
                            </Player>

                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={this.modalClose}>
                                Close
                            </Button>

                        </Modal.Footer>
                    </Modal>

                </Fragment>
            );
        } else if (this.state.error == true) {
            return <WentWrong/>
        }
    }
}

export default Video;