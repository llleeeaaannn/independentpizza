import { useContext } from 'react';
import { AppContext } from '../App';

const Hamburger = () => {

  const { menu, setMenu } = useContext(AppContext);

  return (
    <svg id="hamburger" onClick={() => setMenu(!menu)} viewBox="0 0 512 512">
      <path d="M80 96h352v32H80zm0 144h352v32H80zm0 144h352v32H80z"/>
    </svg>
  )
}

export default Hamburger;
