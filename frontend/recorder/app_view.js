
import React from 'react';

class RecorderApp extends React.PureComponent {
  render () {
    const {LogoutButton, Screen, ErrorView, MemoryUsage, Vumeter} = this.props;
    return (
      <div className='container'>
        <div id='page-level-controls'>
          <div>
            <LogoutButton/>
            <MemoryUsage/>
            <Vumeter/>
          </div>
        </div>
        <Screen/>
        <ErrorView/>
      </div>
    );
  }
}

function RecorderAppSelector (state, props) {
  const scope = state.get('scope');
  const {LogoutButton, ErrorView, MemoryUsage, Vumeter} = scope;
  const user = state.get('user');
  const screen = state.get('screen');
  let Screen;
  if (!user) {
    Screen = scope.LoginScreen;
  } else if (screen === 'record') {
    Screen = scope.RecordScreen;
  } else if (screen === 'save') {
    Screen = scope.SaveScreen;
  }
  return {LogoutButton, Screen, ErrorView, MemoryUsage, Vumeter};
}

export default function (bundle, deps) {
  bundle.use('LoginScreen', 'RecordScreen', 'SaveScreen', 'ErrorView', 'MemoryUsage', 'Vumeter');
  bundle.defineView('RecorderApp', RecorderAppSelector, RecorderApp);
};
