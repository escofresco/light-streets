import React from 'react';

import { Map } from '../Map';

export default {
  title: 'Home/Map',
  component: Map,
};

const Template = (args) => <Map
  publicKey={process.env.REACT_APP_MAPBOX_PUBLIC_KEY} {...args} />;

export const LargeRiversZoom = Template.bind({});
LargeRiversZoom.args = {

};

export const LargeRoadsZoom = Template.bind({});
LargeRoadsZoom.args = {};
