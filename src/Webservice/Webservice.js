function Webservice(props) {
  fetch(props.url)
    .then(response => response.json())
    .then(result => props.setdata(result))
    .catch(e => console.log(e));
}

export default Webservice;
