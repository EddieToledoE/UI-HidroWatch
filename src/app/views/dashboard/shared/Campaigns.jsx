import Box from "@mui/material/Box";
import { Small } from "app/components/Typography";
import { MatxProgressBar, SimpleCard } from "app/components";

export default function Campaigns() {
  return (
    <Box>
      <SimpleCard title="Historial">
        <Small color="text.secondary">Hoy</Small>
        <MatxProgressBar value={75} customColor="#FF8300" text="Temperatura" />
        <MatxProgressBar value={45} color="secondary" text="Humedad" />
        <MatxProgressBar value={75} color="primary" text="Ph" />
        <MatxProgressBar value={75} customColor="#FF2512" text="Nivel de agua" />

        <Small color="text.secondary" display="block" pt={4}>
          Ayer
        </Small>
        <MatxProgressBar value={75} customColor="#FF8300" text="Temperatura" />
        <MatxProgressBar value={45} color="secondary" text="Humedad" />
        <MatxProgressBar value={75} color="primary" text="Ph" />
        <MatxProgressBar value={75} customColor="#FF2512" text="Nivel de agua" />

        <Small color="text.secondary" display="block" pt={4}>
          Semana pasada
        </Small>
        <MatxProgressBar value={75} customColor="#FF8300" text="Temperatura" />
        <MatxProgressBar value={45} color="secondary" text="Humedad" />
        <MatxProgressBar value={75} color="primary" text="Ph" />
        <MatxProgressBar value={75} customColor="#FF2512" text="Nivel de agua" />
      </SimpleCard>
    </Box>
  );
}
