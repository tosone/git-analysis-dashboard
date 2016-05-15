import React from 'react';
import {render} from 'react-dom';

import Button from './banner';
import Nav from './memberList';
import semantic from 'semantic-ui/dist/semantic.css';

render((
    <div>
        <Button/>
        <Nav/>
    </div>
), document.getElementById('root'));