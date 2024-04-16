import { useEffect, useState } from 'react';
import io from 'socket.io-client';

interface SocketData {
  topic: string;
  message: string;
}

const useSocketIO = (): SocketData[] => {
  const [socketData, setSocketData] = useState<SocketData[]>([]);

  useEffect(() => {
    const socket = io("https://ws-hw.onrender.com" || "", { transports: ["websocket"] });

    socket.on("connect", () => {
      console.log("Connected to Socket.IO server");
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from Socket.IO server");
    });

    // Definimos explícitamente el tipo de datos que esperamos recibir
    socket.on("IncomingData", (data: SocketData) => {
      console.log("Received data from server:", data);
      setSocketData(prevData => [...prevData, data]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return socketData;
};

export default useSocketIO;
