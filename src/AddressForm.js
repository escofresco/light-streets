import React, { Component } from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form';

const places = require('places.js');


export default class AddressForm extends Component {
  componentDidMount() {
    const options = {
      appId: process.env.REACT_APP_ALGOLIA_APP_ID,
      apiKey: process.env.REACT_APP_ALGOLIA_PLACES_API_KEY,
      container: '#addressInput',
    };
    places(options);
  }

  render() {
    return <input id="addressInput"/>;
  }
}
