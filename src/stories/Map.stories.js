import React from 'react';

import Map from '../Map';
import 'bootstrap/dist/css/bootstrap.min.css';

export default {
  title: 'Home/Map',
  component: Map,
};
const Template = (args) => <Map {...args} />;
export const Basic = Template.bind({});
Basic.args = {
};
