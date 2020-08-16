import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import ContactSection from "../components/ContactSection/ContactSection";
import Footer from "../components/Footer/Footer";
import Services from "../components/Services/Services";

class ServicesPage extends Component {

    componentDidMount() {

        window.scroll(0,0)
    }


    render() {
        return (
            <Fragment>
                <TopNavigation title="Service"/>
                <PageTop pageTitle="My Services"/>
                <Services/>
                <ContactSection/>
                <Footer/>

            </Fragment>
        );
    }
}

export default ServicesPage;