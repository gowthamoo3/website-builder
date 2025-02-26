import './App.css'
import DynamicGrid from './Components/DynamicGrid';
import { useEffect } from 'react'


function App() {
  useEffect(()=>{
    // const addRowContainer = document.getElementById('add-row');
    // addRowContainer?.addEventListener('click',(e)=>{
    //   console.log('target',e.target, 'currentTarget',e.currentTarget);
    // });

    window.addEventListener('rowSelected', (e)=>{
       console.log('e',e);
    });
  });

  return (
    <>
      <DynamicGrid />
    </>
  )
}

export default App
