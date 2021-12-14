import React from 'react';
import './styles.css';

import {render} from 'react-dom';

const Greeting = () => <h1>Hello from React</h1>

render(<Greeting/>, document.getElementById("target"));