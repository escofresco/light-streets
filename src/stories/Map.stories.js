import React from 'react';

import { Map } from '../Map';

export default {
  title: 'Home/Map',
  component: Map,
};

const Template = (args) => <Map publicKey="pk.eyJ1IjoiZXNjb2ZyZXNjbyIsImEiOiJjanIybzM1ZzUwMm56NDNyMnE2OHo4ZjJkIn0.m58inJeAA0EUbAR9zUYHGA" {...args} />;

export const LargeRiversZoom = Template.bind({});
LargeRiversZoom.args = {

};

export const LargeRoadsZoom = Template.bind({});
LargeRoadsZoom.args = {};
