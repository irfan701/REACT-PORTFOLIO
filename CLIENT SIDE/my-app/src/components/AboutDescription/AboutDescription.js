import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";
import ReactHtmlParser from 'react-html-parser'
import Loading from "../Loading/Loading";
import WentWrong from "../WentWrong/WentWrong";
class AboutDescription extends Component {

    constructor() {
        super();
        this.state={
            desc:'',
            loading:true,
            error:false
            //react-html-parser
        }
    }


    componentDidMount() {

        RestClient.GetRequest(AppUrl.information).then( result=> {

            if (result == null) {

                this.setState({error:true,loading:false})
            } else {

                this.setState({desc: result[0].about, loading: false})
            }
        }).catch(error=>{

            this.setState({error:true})
        })

    }


    render() {

        if (this.state.loading == true && this.state.error == false) {

            return <Loading/>

        }else if (this.state.loading == false && this.state.error == false) {

            return (
                <Fragment>
                    <Container className="mt-5">
                        <Row>
                            <Col lg={12} md={12} sm={12}>

                                {ReactHtmlParser(this.state.desc)}


                            </Col>
                        </Row>

                    </Container>

                </Fragment>
            );

        }else if(this.state.error==true){

          return <WentWrong/>
        }
    }
}

export default AboutDescription;