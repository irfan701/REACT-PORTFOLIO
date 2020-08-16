import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Footer from "../components/Footer/Footer";
import CourseDetails from "../components/CourseDetails/CourseDetails";


class CourseDetailsPage extends Component {

    constructor({match}){
        super();
        this.state={
            MyCourseId:match.params.courseID,
        }
    }

    componentDidMount() {
        window.scroll(0,0)
    }

    render() {



        return (
            <Fragment>
                <TopNavigation title="Course Details"/>
                <CourseDetails id={this.state.MyCourseId}/>
                <Footer/>
            </Fragment>
        );
    }
}

export default CourseDetailsPage;