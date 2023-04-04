import { createElement } from 'react';
import './App.css';
import './style.scss'

function App() {
  return createElement('main', {
    className: 'test',
    id: 'main'

  },'main content')


  return (
    <main id='main' className='text'>
      <h1>Osman</h1>
    </main>
  );
}

export default App;
