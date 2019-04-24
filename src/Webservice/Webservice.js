
/**
 * Service to call news API.
 * @param {*} props 
 */
function Webservice(props){
        fetch(this.props.url)
          .then(response => response.json())
          .then(result =>
            this.props.setdata(result)
          )
          .catch(e => this.props.gotError(e));
}

export default Webservice;
