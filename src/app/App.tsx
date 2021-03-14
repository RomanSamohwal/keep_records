import React from 'react';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {Main} from './main/Main';
import {Messages} from '../common/message/Messages';

const App = () => {
    return <>
        <Main/>
        <Messages/>
    </>
}

export default App;
