import UnAuthenticatedApp from './UnAuthenticatedApp';
import { useContext } from 'react';
import AuthenticatedApp from './AuthenticatedApp';
import { FontSizeContext } from '../providers/FontProvider';

function App() {
  const { isLogged } = useContext(FontSizeContext);

  return <>{isLogged ? <AuthenticatedApp /> : <UnAuthenticatedApp />}</>;
}
export default App;
