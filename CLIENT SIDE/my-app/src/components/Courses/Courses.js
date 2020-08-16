import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";
import Loading from "../Loading/Loading";
import WentWrong from "../WentWrong/WentWrong";

class Courses extends Component {

    constructor(){
        super();
        this.state={
            myData:[],
            loading:true,
            error:false

        }
    }

    componentDidMount() {

        RestClient.GetRequest(AppUrl.courseHome).then( result=> {

            if (result == null) {
                this.setState({error:true,loading:false})

            } else {

                this.setState({myData: result, loading: false})
            }
        }).catch(error=>{
            this.setState({error:true})
        })
    }

    render() {

        if (this.state.loading == true && this.state.error == false) {
            return <Loading/>
        } else if (this.state.loading == false && this.state.error == false) {

            const myList = this.state.myData;
            const myView = myList.map(childView => {


                return <Col lg={6} md={12} sm={12}>

                    <Row>
                        <Col lg={6} md={6} sm={12}>

                            <img className="courseImg" src={childView.small_img}/>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <h5 className="courseTitle">{childView.short_title}</h5>
                            <p className="courseDes text-black-50">{childView.short_des}</p>
                            <Link className="btn btn-sm btn-success"
                                  to={"/courseDetails/" + childView.id}>Details</Link>
                        </Col>

                    </Row>

                </Col>


            })


            return (
                <Fragment>
                    <Container>
                        <h1 className="serviceMainTitle text-center">OUR COURSES</h1>
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

export default Courses;




