import React, { useEffect, useState } from 'react';

const ConnectionStatus = () => {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const onConnectionStatus = e => {
      setIsConnected(e.target.navigator.onLine);
    };

    window.addEventListener('offline', onConnectionStatus);
    window.addEventListener('online', onConnectionStatus);

    return () => {
      window.removeEventListener('offline', onConnectionStatus);
      window.removeEventListener('online', onConnectionStatus);
    };
  }, []);

  return (
    <>
      {isConnected ? (
        <div className="status">online</div>
      ) : (
        <div className="status status_offline">offline</div>
      )}
    </>
  );
};

export default ConnectionStatus;
