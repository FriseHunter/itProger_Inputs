import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Input from './App';
import Radio from './Radio/Radio';
import Check from './Check/Check';
import Tarea from './Tarea/Tarea';
import Select from './Select/Select';
import registerServiceWorker from './registerServiceWorker';

const root = document.getElementById('root');

ReactDOM.render(
  <div>
    <Input />
    <Radio />
    <Check />
    <Tarea />
    <Select />
  </div>
, root);
registerServiceWorker();
