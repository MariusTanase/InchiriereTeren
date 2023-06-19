import Homepage from './pages/homepage';

function App() {

  const userStatus = true;


  return (
    <>
      {
        userStatus ? <Homepage /> : null
      }
    </>
  )
}

export default App
