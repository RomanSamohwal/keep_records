import React from 'react';
import './App.css';
import {SidebarComponent} from "../components/sidebar/Sidebar";
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


function App() {
  return (
    <div>
     <SidebarComponent/>
    </div>
  );
}

export default App;
