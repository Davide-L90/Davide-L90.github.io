import { useState } from 'react';
import Sidebar from './Sidebar';
import Main from './Main';
import './App.css';
import en from "./translations/en.json";

function App() {
  const [language, setLanguage] = useState(en);
  return (
    <div className="container main_cnt">
      <Sidebar language={language} setLanguage={setLanguage} />
      <Main language={language} />
    </div>
  );
}

export default App;
