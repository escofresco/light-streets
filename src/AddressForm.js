import React, { render } from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form';

// const places = require('places.js');
// const options = {
//   appId: 'YOUR_PLACES_APP_ID',
//   apiKey: 'YOUR_PLACES_API_KEY',
//   container: '#addressInput',
// };
// places(options);

function AddressForm(props) {
  return <Form>
        <Row>
          <Col>
            <Form.Control id="addressInput" placeholder="Where's this sparkling home?" />
          </Col>
        </Row>
      </Form>;
}

export default AddressForm;
