import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import AllCourses from "../components/AllCourses/AllCourses";
import Footer from "../components/Footer/Footer";
import PageTop from "../components/PageTop/PageTop";

class CoursesPage extends Component {
    componentDidMount() {

        window.scroll(0,0)
    }


    render() {
        return (
            <Fragment>

                <TopNavigation title="Course"/>
                <PageTop pageTitle="All Courses"/>
                <AllCourses/>
                <Footer/>



            </Fragment>
        );
    }
}

export default CoursesPage;