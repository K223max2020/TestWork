import React, {Component} from 'react';
import Group from './Group.svg';
import './App.css';
import User from './User.svg';
import Orel from './Orel.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <div className="header-left">
          <img src={Group} className="App-logo" alt="logo"/>
          <span>Услуги и сервисы Пермского края</span>
        </div>
        
        <div className ="header-right">
          <img src={User} className="Users-img" alt="Users" />
          <a className="User" href="#">Константинопольский К.К</a>
          <a className="Exit" href="#">Выход</a>
        </div>
      </header>
      <div className="content">
        <h1>Выдача градостроительного плана земельного участка</h1>
        <img src={Orel} className="Gerb" alt="gerb"/>
        <p>Градостроительный план земельного участка выдается в целях обеспечения субъектов градостроительной деятельности информацией, необходимой для архитектурно-строительного проектирования, строительства, реконструкции объектов капитального строительства в границах земельного участка.</p>
        <div className="Link">
          <a className="User" href="#">Услугу предоставляет</a>
          <a className="Exit" href="#">Орган местного самоуправления</a>
        </div>
        
      </div>
      
    </div>
    
  );
}

export default App;
