import './App.css'
import { useOnlineStatus } from './components/useOnlineStatus'

function StatusBar() {
  const isOnline = useOnlineStatus();
  return <h1>{isOnline ? '🟢 Online' : '🔴 Offline'}</h1>;
}

function SaveButton() {
  const isOnline = useOnlineStatus();
  function handleSaveClick() {
    if (isOnline) {
      console.log('🟢 Progress Saved!');
    } else {
      console.log('You are offline. Please try again later.');
    }
  }

  return (
    <button onClick={handleSaveClick} disabled={!isOnline}>
      {isOnline ? 'Save progress' : 'Reconnecting...'}
    </button>
  );
}

function App() {
  return (
    <>
      <SaveButton />
      <StatusBar />
    </>
  )
}

export default App
