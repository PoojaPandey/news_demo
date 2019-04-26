/**
 * Service to call news API.
 * @param {*} props
 */
function Webservice(props) {
  console.log("propsn is as", props);
  fetch(props.url)
    .then(response => response.json())
    .then(result => props.setData(result))
    .catch(e => props.gotError(e));
}

export default Webservice;
