import React from 'react';
import './App.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {ResultSearchComponent} from "../components/table/ResultSearchComponent";
import { PaginatorDemo} from '../components/paginator/PaginatorComponent';

function App() {

    return (<div>
            {/* <SidebarComponent/>*/}
            {/* <DataTablePaginatorDemo/>*/}
            <ResultSearchComponent/>
            {/*<PaginatorDemo/>*/}
        </div>
    );
}

export default App;
