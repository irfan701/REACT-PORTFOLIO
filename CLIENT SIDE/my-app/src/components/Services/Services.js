import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import web from '../../asset/images/web.svg'
import pen from '../../asset/images/pen.svg'
import mobile from '../../asset/images/mobile.svg'
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";
import Loading from "../Loading/Loading";
import WentWrong from "../WentWrong/WentWrong";

class Services extends Component {

    constructor(){
        super();
        this.state={
            myData:[],
            loading:true,
            error:false
        }
    }

    componentDidMount() {

        RestClient.GetRequest(AppUrl.services).then( result=> {
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
            const myView = myList.map((childView) => {

                return <Col lg={4} md={6} sm={12}>
                    <div className="serviceCard text-center">
                        <img src={childView.service_logo} alt=""/>
                        <h2 className="serviceName">{childView.service_name}</h2>
                        <p className="serviceDescription">{childView.service_des}</p>
                    </div>
                </Col>
            })

            return (
                <Fragment>
                    <Container className="text-center">
                        <h1 className="serviceMainTitle">MY SERVICES</h1>
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

export default Services;