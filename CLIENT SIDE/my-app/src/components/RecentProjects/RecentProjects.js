import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";
import Loading from "../Loading/Loading";
import WentWrong from "../WentWrong/WentWrong";

class RecentProjects extends Component {


    constructor(){
        super();
        this.state={
            myData:[],
            loading:true,
            error:false
        }
    }

    componentDidMount() {

        RestClient.GetRequest(AppUrl.projectHome).then( result=> {
            if (result == null) {
                this.setState({error:true,loading:false})

            } else {

                this.setState({myData: result, loading: false})
            }
        }).catch(error=>{

            this.setState({error:true,loading:false})

        })
    }


    render() {

        if (this.state.loading == true && this.state.error == false) {
            return <Loading/>
        } else if (this.state.loading == false && this.state.error == false) {


            const myList = this.state.myData;
            const myView = myList.map(childView => {

                return <Col lg={4} md={6} sm={12}>
                    <Card className="projectCard">
                        <Card.Img variant="top" src={childView.img_one}/>
                        <Card.Body>
                            <Card.Title className="projectCardTitle">{childView.project_name}</Card.Title>
                            <Card.Text className="projectCardDes">
                                {childView.short_des}
                            </Card.Text>
                            <Button variant="primary"><Link className="link-style"to={"/projectDetails/" + childView.id + "/" + childView.project_name}>Details</Link></Button>

                        </Card.Body>
                    </Card>
                </Col>

            })


            return (
                <Fragment>

                    <Container className="text-center">
                        <h1 className="serviceMainTitle">Recent Projects</h1>
                        <Row>
                            {myView}

                        </Row>
                    </Container>
                </Fragment>
            );
        } else if (this.state.error == true) {
            return <WentWrong/>
        }
    }

}

export default RecentProjects;