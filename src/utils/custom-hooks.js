import { useEffect, useState } from 'react';

export const useFullscreen = (ref) => {
  const [target, setTarget] = useState(null);

  useEffect(() => {
    setTarget(ref?.current);
  }, [ref]);

  return target;
};
