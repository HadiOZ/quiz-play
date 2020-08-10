import React from 'react'
import { Provider } from 'react-redux'
import store from './data/stored';
import Root  from './Root';

function App() {
  return (
    <div>
      <Provider store={store}>        
        <Root />
      </Provider>
    </div>
  );
}

export default App;
