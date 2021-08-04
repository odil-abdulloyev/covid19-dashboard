import { useEffect, useState } from 'react';
import './fullscreen-button.css';

export const FullscreenButton = ({ target }) => {
  const [fullscreen, setFullscreen] = useState(document.fullscreenElement);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setFullscreen(document.fullscreenElement);
      target.classList.toggle('fullscreen');
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, [target]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      target.requestFullscreen().catch((error) => console.log(error.message));
    } else {
      document.exitFullscreen().catch((error) => console.log(error.message));
    }
  };

  return (
    <button className='fullscreen-button' onClick={toggleFullscreen}>
      {fullscreen ? (
        <i className='fas fa-compress-arrows-alt' />
      ) : (
        <i className='fas fa-expand-arrows-alt' />
      )}
    </button>
  );
};
