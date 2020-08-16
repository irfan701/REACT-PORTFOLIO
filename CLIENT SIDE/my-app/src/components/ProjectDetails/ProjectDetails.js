import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";
import ReactHtmlParser from 'react-html-parser'
import Loading from "../Loading/Loading";
import WentWrong from "../WentWrong/WentWrong";

class ProjectDetails extends Component {

    constructor(props){
        super();
        this.state={

            myProjectId:props.id,

            img_two:'',
            project_name:'',
            short_des:'',
            project_features:'',
            live_preview:'',
            loading:true,
            error:false
        }
    }

    componentDidMount() {

        RestClient.GetRequest(AppUrl.projectDetail+this.state.myProjectId).then(result=>{
            if (result == null) {
                this.setState({error:true,loading:false})

            } else {

                this.setState({

                    img_two: result[0].img_two,
                    project_name: result[0].project_name,
                    short_des: result[0].short_des,
                    project_features: result[0].project_features,
                    live_preview: result[0].live_preview,
                    loading: false
                })
            }
        }).catch(error=>{

            this.setState({error:true})
        })

    }


    render() {

        if (this.state.loading == true && this.state.error == false) {
            return <Loading/>
        } else if (this.state.loading == false && this.state.error == false) {
            return (
                <Fragment>
                    <Container className="mt-5">
                        <Row>
                            <Col lg={6} md={6} sm={12}>

                                <img className="w-100 mt-4" src={this.state.img_two}/>

                            </Col>

                            <Col lg={6} md={6} sm={12}>
                                <h2 className="serviceName">{this.state.project_name}</h2>

                                <p className="serviceDescription"> {this.state.short_des}</p>

                                {ReactHtmlParser(this.state.project_features)}

                                <Button target="_blank" href={"//" + this.state.live_preview} variant="primary">More
                                    Info</Button>


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

export default ProjectDetails;