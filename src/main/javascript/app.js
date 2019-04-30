import $ from 'jquery';

import React from 'react';
import {render} from 'react-dom';

import Header from './components/header.jsx';

$(document).ready(() => {
    render(<Header />, document.getElementById('rodziem-app'));
});
