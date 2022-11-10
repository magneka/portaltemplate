import './App.css';
import LocaleContext from './context/LocaleContext';
import AuthContext from './context/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import MainLayout from './layout/MainLayout';


function App() {

  
  const [locale] = useState('nb')
  
  useEffect(() => {
    document.title = "Adecco Client Portal"
  }, []);
  
  console.log("App", locale)

  return (
    <div>øø
      <LocaleContext.Provider value={locale}>        
          <MainLayout />
          hge
          <ToastContainer position="bottom-right" />
      </LocaleContext.Provider>     
    </div>
  );
}

export default App;