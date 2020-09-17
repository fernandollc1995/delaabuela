
import React from 'react';
import TablaBody from './TablaBody'
import TablaHeader from './TablaHeader'
import './Tabla.css';


function Tabla() {
  return(
    
    <div className="tabla">
      <TablaHeader/>
      <TablaBody/>
    </div>
  )
}
export default Tabla;