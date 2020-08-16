import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ReactHtmlParser from 'react-html-parser'
import AppUrl from "../../RestApi/AppUrl";
import RestClient from "../../RestApi/RestClient";
import Loading from "../Loading/Loading";
import WentWrong from "../WentWrong/WentWrong";
class PrivacyDescription extends Component {

    constructor() {
        super();
        this.state={
            desc:'',
            loading:true,
            error:false

        }
    }


    componentDidMount() {

        RestClient.GetRequest(AppUrl.information).then( result=> {

            if (result == null) {
                this.setState({error:true,loading:false})

            } else {

                this.setState({desc: result[0].privacy, loading: false})
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
                            <Col lg={12} md={12} sm={12}>

                                {ReactHtmlParser(this.state.desc)}
                                {/*<h1 className="serviceName">Who I am</h1>*/}
                                {/*<hr/>*/}
                                {/*<p className="serviceDescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus omnis sequi sint. Ab*/}
                                {/*    accusamus aliquam asperiores autem blanditiis deleniti dicta dolor dolorem ducimus error*/}
                                {/*    fuga id illo in iste laboriosam magni molestias, mollitia nihil, recusandae sed, sint*/}

                                {/*</p>*/}

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

export default PrivacyDescription;