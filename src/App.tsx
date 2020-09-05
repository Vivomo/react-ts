import React from 'react';

import './App.css';

import Tree from './component/tree';
import mockData from './mock/treeData';

function App() {
  return (
    <div className="App">
        <Tree data={mockData}/>
    </div>
  );
}

export default App;
