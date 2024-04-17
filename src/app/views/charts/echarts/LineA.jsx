import { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import ReactEcharts from "echarts-for-react";
import io from "socket.io-client";

export default function LineChart({ height }) {
  const theme = useTheme();
  const [data, setData] = useState({
    humedad: [],
    temperatura: [],
    level_water: [],
    nivel_ph: [],
  });

  useEffect(() => {
    const socket = io("https://ws-hw.onrender.com"); // Cambia esto por la URL de tu servidor WebSocket
    socket.on("IncomingData", (msg) => {
      console.log(msg);
      const { user, humedad, temperatura, level_water, nivel_ph } = JSON.parse(
        msg.message
      );
      setData((prevData) => ({
        ...prevData,
        humedad: [...prevData.humedad, humedad],
        temperatura: [...prevData.temperatura, temperatura],
        level_water: [...prevData.level_water, level_water],
        nivel_ph: [...prevData.nivel_ph, nivel_ph],
      }));
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const option = {
    grid: { top: "10%", bottom: "10%", left: "5%", right: "5%" },
    legend: {
      itemGap: 20,
      icon: "circle",
      textStyle: {
        fontSize: 13,
        color: theme.palette.text.secondary,
        fontFamily: theme.typography.fontFamily,
      },
    },
    xAxis: {
      type: "category",
      data: data.humedad.map((_, index) => index),
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: {
        fontSize: 14,
        fontFamily: "roboto",
        color: theme.palette.text.secondary,
      },
    },
    yAxis: {
      type: "value",
      axisLine: { show: false },
      axisTick: { show: false },
      splitLine: {
        lineStyle: { color: theme.palette.text.secondary, opacity: 0.15 },
      },
      axisLabel: {
        color: theme.palette.text.secondary,
        fontSize: 13,
        fontFamily: "roboto",
      },
    },
    series: [
      {
        data: data.level_water,
        type: "line",
        name: "Nivel de Agua",
        smooth: true,
        symbolSize: 4,
        lineStyle: { width: 4 },
      },
    ],
  };

  return <ReactEcharts style={{ height: height }} option={option} />;
}
