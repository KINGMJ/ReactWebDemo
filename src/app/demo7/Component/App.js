import React from 'react';
import {Link} from 'react-router';

const App = (props)=>(
    <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
            <li><Link to="/about" className="link" activeStyle={{ color:'red' }}>About</Link></li>
            <li><Link to="/repos" className="link" activeClassName="active">Repos</Link></li>
        </ul>
        {props.children}
    </div>
);

export default App;