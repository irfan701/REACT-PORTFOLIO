import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Bar, BarChart, ResponsiveContainer, Tooltip, XAxis} from "recharts";
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";

import ReactHtmlParser from 'react-html-parser'
import Loading from "../Loading/Loading";
import WentWrong from "../WentWrong/WentWrong";
class Analysis extends Component {




    constructor() {
        super();
        this.state={
            data:[
                // {Technology:'java',Projects:100},
                // {Technology:'Kotlin',Projects:60},
                // {Technology:'Djangoo',Projects:50},
                // {Technology:'Laravel',Projects:40},
                // {Technology:'Asp',Projects:30},
                // {Technology:'Ruby',Projects:20},
                // {Technology:'Angular',Projects:40},
                // {Technology:'Php',Projects:90}
            ],
            desc:'',
            loading:true,
            error:false

            //react-html-parser
        }
    }


    componentDidMount() {

        RestClient.GetRequest(AppUrl.chartData).then( result=> {


            if (result == null) {
                this.setState({error:true,loading:false})
            } else {
                this.setState({data: result, loading: false})
            }
        }).catch(error=>{

            this.setState({error:true,loading:false})

        })

        RestClient.GetRequest(AppUrl.techDes).then( result=> {

            if (result == null) {
                this.setState({error:true,loading:false})
            } else {

                this.setState({desc: result[0].tech_des})
            }
        }).catch(error=>{

            this.setState({error:true,loading:false})

        })


    }

    render() {


        if (this.state.loading == true && this.state.error == false) {

            return <Loading/>

        } else if (this.state.loading == false && this.state.error == false) {


            const blue = "rgba(0,115,230,0.8)";

            return (
                <Fragment>

                    <Container className="text-center">
                        <h1 className="serviceMainTitle">Technology used</h1>
                        <Row>
                            <Col lg={6} md={12} sm={12}>

                                <ResponsiveContainer>

                                    <BarChart width={100} height={300} data={this.state.data}>
                                        <Tooltip/>
                                        {/*<XAxis dataKey="Technology"/>*/}
                                        {/*<Bar dataKey="Projects" fill={blue} /> */}

                                        <XAxis dataKey="x_data"/>
                                        <Bar dataKey="y_data" fill={blue}/>

                                    </BarChart>

                                </ResponsiveContainer>
                            </Col>

                            <Col lg={6} md={12} sm={12}>
                                <p className="text-justify des">{ReactHtmlParser(this.state.desc)}</p>

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

export default Analysis;