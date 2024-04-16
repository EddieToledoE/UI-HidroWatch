import React, { useState, useEffect } from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

interface TemperatureData {
  time: Date;
  temperature: number;
}

export default function WaterTemperatureChart(): JSX.Element {
  const [temperatureData, setTemperatureData] = useState<TemperatureData[]>([]);

  useEffect(() => {
    const generateWaterTemperatureData = () => {
      let waterTemperature = 10;
      const newData: TemperatureData[] = [];

      const interval = setInterval(() => {
        waterTemperature += 1;

        if (waterTemperature > 100) {
          waterTemperature = 10;
        }

        // Agregamos la lógica para enviar una alerta si la temperatura es mayor que 60 grados
        // if (waterTemperature > 60) {
        //   alert('¡Atención! La temperatura del agua ha superado los 60 grados Celsius.');
        // }

        newData.push({
          time: new Date(),
          temperature: waterTemperature,
        });

        setTemperatureData([...newData]);

        console.log("Time:", new Date(), "Temperature:", waterTemperature);
      }, 1000);

      return () => clearInterval(interval);
    };

    generateWaterTemperatureData();
  }, []);

  return (
    <LineChart
      sx={{
        '& .MuiLineElement-root': {
          strokeDasharray: '10 5',
          strokeWidth: 0.3,
        },
        '& .MuiAreaElement-series-Germany': {
          fill: "url('#myGradient')",
        },
      }}
      xAxis={[
        {
          id: 'Time',
          data: temperatureData.map(data => data.time),
          scaleType: 'time',
          valueFormatter: (date) => date.toLocaleTimeString(),
        },
      ]}
      series={[
        {
          id: 'Water Temperature',
          data: temperatureData.map(data => data.temperature),
          stack: 'total',
          area: true,
          showMark: false,
        }
      ]}
      margin={{ left: 60, top: 10, right: 20 }}
      width={600}
      height={300}
    >
      <defs>
        <linearGradient id="myGradient" gradientTransform="rotate(90)">
          <stop offset="5%" stopColor="gold" />
          <stop offset="95%" stopColor="red" />
        </linearGradient>
      </defs>
    </LineChart>
  );
}
