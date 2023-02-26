
import './App.css';

import { List } from './components/list';

function App() {
  const users = [
    {
        id: 0,
        nome: "Siri"
    },
    {
        id: 1,
        nome: "Alexa"
    },
    {
        id: 2,
        nome: "Google Assistente"
    },
];



  return (
    <>
    <div>
    <List items={users}/>
   
     
    </div>
  
    </>
  );
}

export default App;
