import React from 'react';
import './App.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {DataTablePaginatorDemo} from "../components/table/Table";
import { TableComponent } from '../components/table/TableComponent';
import { SidebarComponent } from '../components/sidebar/Sidebar';
import { TableContainer } from '../components/table/TableContainer';
import {ResultSearchComponent} from "../components/table/ResultSearchComponent";

function App() {
  return (
    <div>
    {/* <SidebarComponent/>*/}
  {/* <DataTablePaginatorDemo/>*/}
   <ResultSearchComponent/>
    </div>
  );
}

export default App;
