import React, {Component} from 'react';
import ReactGa from 'react-ga';


export default () => Page => {
    return class extends Component {
        static getInitialProps(ctx) {
            if(Page.getInitialProps)
                return Page.getInitialProps(ctx);
        }

        componentDidMount(){
            ReactGa.initialize('ID_ANALYTICS');
            ReactGa.pageview(window.location.pathname);
        }

        render() {
            return <Page {...this.props}/>
        }

    }
}
