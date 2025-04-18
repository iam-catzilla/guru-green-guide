
import { useEffect } from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="blob blob-1 animate-blob-slow" />
      <div className="blob blob-2 animate-blob-slow" />
      <div className="blob blob-3 animate-blob-slow" />
    </div>
  );
};

export default AnimatedBackground;
