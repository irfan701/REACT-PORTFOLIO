import React, {Component, Fragment} from 'react';
import went from '../../asset/images/wentWrong.jpg';


class WentWrong extends Component {
    render() {
        return (
            <Fragment>
                <img src={went} alt="" className="w-25" style={{height:'300px'}}/>
            </Fragment>
        );
    }
}

export default WentWrong;