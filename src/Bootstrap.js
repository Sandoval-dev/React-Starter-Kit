import {Button,Tab,Tabs} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
;


function Bootstrap()  {
  return (
    <div>
        <h3>Bootstrap</h3>
        <Button>Buton</Button>
        <Button variant='danger'>Buton</Button>
        <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        <div>Home</div>
      </Tab>
      <Tab eventKey="profile" title="Profile">
      <div>a
      </div>
      </Tab>
      <Tab eventKey="contact" title="Contact">
      <div>b</div>
      </Tab>
    </Tabs>
    </div>
  )
}

export default Bootstrap