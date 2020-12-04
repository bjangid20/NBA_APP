import NbaApp from './modules/NbaApp';
import { Button } from '@material-ui/core';
import { SnackbarProvider } from 'notistack';
import "./global.css";
import './App.css';

function App() {
  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
      action={<Button size="small">Dismiss</Button>}>
      <div className="App">
        <NbaApp />
      </div >
    </SnackbarProvider>

  );
}

export default App;
