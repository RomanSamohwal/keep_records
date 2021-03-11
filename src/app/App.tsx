import React from 'react';
import './App.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {ResultSearchComponent} from "../components/table/ResultSearchComponent";
import { PaginatorDemo} from '../components/paginator/PaginatorComponent';
import {SidebarComponent} from "../components/sidebar/Sidebar";
import { TopBar } from '../components/topbar/Topbar';

function App() {

    return ( <div>
             <TopBar/>
           {/* <div style={{display: "flex", justifyContent: "space-between"}}>
                <div>
                    <SidebarComponent/>
                </div>

                 <DataTablePaginatorDemo/>
                <div>
                    <ResultSearchComponent/>
                </div>
            </div>*/}
    </div>



    );
}

export default App;
