import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";
import Loading from "../Loading/Loading";
import WentWrong from "../WentWrong/WentWrong";

class AllCourses extends Component {

    constructor() {
        super();
        this.state = {
            myData: [],
            loading: true,
            error: false

        }
    }

    componentDidMount() {

        RestClient.GetRequest(AppUrl.courseAll).then(result => {

            if (result == null) {
                this.setState({error:true,loading:false})
            } else {

                this.setState({myData: result, loading: false})
            }
        }).catch(error => {

            this.setState({error: true})

        })
    }

    render() {


        if (this.state.loading == true && this.state.error == false) {

            return <Loading/>

        } else if (this.state.loading == false && this.state.error == false) {

            const myList = this.state.myData;
            const myView = myList.map(childView => {
                // https://cdn.pixabay.com/photo/2016/01/19/17/53/writing-1149962__480.jpg
                return <Col lg={6} md={12} sm={12}>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <img className="courseImg" src={childView.small_img} alt=""/>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <h5 className="courseTitle">{childView.short_title}</h5>
                            <p className="courseDes">{childView.short_des}</p>
                            <Link to={"/courseDetails/" + childView.id}>Details</Link>
                        </Col>

                    </Row>
                </Col>

            })


            return (
                <Fragment>
                    <Container className="mt-5">
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

export default AllCourses;