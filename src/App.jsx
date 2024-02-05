// App.jsx
import React, { useState } from 'react';
import './App.css';
import SidebarStatic from './components/sidebar/sidebar.component';
import Content from './layouts/content/content.component';
import { TimeProvider } from './context/hours.context';

function App() {
  const [visible, setVisible] = useState(true);

  return (
    <>
      <TimeProvider>
        <div style={{ display: 'flex', alignItems: 'stretch' }}>
          <div style={{ position: 'relative' }}>
            <SidebarStatic visible={visible} setVisible={setVisible} />
          </div>
          <Content visible={visible} setVisible={setVisible} />
        </div>
      </TimeProvider>
    </>
  );
}

export default App;
