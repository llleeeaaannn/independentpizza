import { useEffect } from 'react';

const NotFound = () => {

  useEffect(() => {
    document.title = '';
  }, []);

  return (
    <div>
      <p>NOT FOUND</p>
    </div>
  )
}

export default NotFound;
