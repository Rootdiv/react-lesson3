import React from 'react';
import ComponentClass from './components/ClassComponent';
import LiveCycle from './components/LifeCycle';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <ComponentClass min={1} max={10} />
        <br />
        <LiveCycle prop="METHED" />
      </div>
    );
  }
}
