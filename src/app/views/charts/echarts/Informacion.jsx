import { Box, styled, useTheme } from "@mui/material";

import Breadcrumb from "app/components/Breadcrumb";
import SimpleCard from "app/components/SimpleCard";

import AreaChart from "./AreaChart";
import LineChart from "./LineH";
import DoughnutChart from "./Doughnut";
import ComparisonChart from "./ComparisonChart";

// STYLED COMPONENT
const Container = styled("div")(({ theme }) => ({
  margin: 30,
  [theme.breakpoints.down("sm")]: { margin: 16 },
  "& .breadcrumb": {
    marginBottom: 30,
    [theme.breakpoints.down("sm")]: { marginBottom: 16 },
  },
}));

export default function AppEchart() {
  const theme = useTheme();

  return (
    <Container>
      <h1>Como cuidar tus plantulas</h1>


      <Box sx={{ py: "12px" }} />

      <SimpleCard title="INTRODUCCION a LA HIDROPHONIA">
      
<p>Aumento de rentabilidad: Algunas técnicas hidropónicas permiten aumentar entre un 30% y un 50% la rentabilidad gracias a que permite aprovechar más la superficie de cultivo.

Crecimiento acelerado: Muchas plantas crecen más rápido en un sistema hidropónico, lo que permite acelerar las producciones y las cosechas.

Cultivo todo el año: Con el equipamiento adecuado, la hidroponía permite cultivar en cualquier época del año, independientemente del suelo y de las condiciones ambientales, adelantando así el inicio de los ciclos de cultivo.

Ahorro de agua: El riego hidropónico permite un ahorro de agua de en torno al 80% con respecto a sistemas tradicionales. Además, permite la posibilidad de recircular los drenajes.

Reducción de agroquímicos: La hidroponía reduce considerablemente el uso de agroquímicos y productos de desinfección, lo que promueve que los productores puedan ahorrar en costes y hace que los productos sean más saludables para el consumo.

Reducción de costes laborales: La técnica hidropónica reduce el coste de mano de obra y los riesgos laborales, ya que mejora la ergonomía de las tareas, especialmente en las épocas de cosecha. Esto, además, aumenta el bienestar de los trabajadores.

Reducción de la huella de carbono: Al poder cultivarse en lugares cerca de las poblaciones, la hidroponía reduce la huella de carbono al evitar muchos de los transportes y sus costes asociados.

Acceso a vegetales frescos: La hidroponía hace que determinadas poblaciones accedan a vegetales frescos en mayor cantidad y con más facilidad, pues evita la rotura de la cadena de suministro, haciendo crecer el mercado.</p>
      </SimpleCard>
      <Box sx={{ py: "12px" }} />
      <SimpleCard title="">
      <h3>NUTRIENTES NECESARIOS PARA EL CRECIMIENTO DE LA HORTALIZA</h3>
<p>Los nutrientes esenciales de las plantas se pueden clasificar como macronutrientes, nutrientes secundarios y micronutrientes. Esta clasificación se basa en el requerimiento relativo de la planta.</p>
<p>Los macronutrientes se requieren en cantidades relativamente grandes. Los nutrientes secundarios se requieren en cantidades menores y los micronutrientes se requieren en cantidades muy pequeñas. Esto no implica que los micronutrientes sean menos importantes para la planta. Una deficiencia de un micronutriente puede limitar el crecimiento del cultivo en la misma medida que una deficiencia de macronutrientes.</p>
<p><strong>Macronutrientes:</strong> nitrógeno, fósforo, potasio, carbono, hidrógeno, oxígeno</p>
<p><strong>Nutrientes secundarios:</strong> calcio, magnesio, azufre</p>
<p><strong>Micronutrientes:</strong> boro, hierro, manganeso, zinc, cobre, molibdeno, cloro</p>

<h3>SOLUCIÓN HIDROPÓNICA</h3>
<p>La solución nutritiva es el medio acuoso en el cual se encuentran disueltos los nutrientes esenciales para el adecuado crecimiento y desarrollo de las plantas, y es la vía principal de nutrición de cultivos en hidroponía y sustratos. Una solución nutritiva completa debe tener: nitrógeno, fósforo, potasio, calcio, magnesio, azufre, hierro, molibdeno, manganeso, boro, zinc, cobre y níquel. En la solución nutritiva estos elementos están en forma de iones para que las plantas puedan tomarlos, ya que no pueden absorberlos en su forma elemental.</p>

<h3>SUSTRATOS</h3>
<p>El sustrato hidropónico es el medio en el cual se cultivan las plantas en un sistema hidropónico, donde se suministran nutrientes directamente a las raíces en lugar de utilizar tierra. En este tipo de cultivo, el sustrato juega un papel crucial al proporcionar soporte físico a las plantas y retener la solución nutritiva.</p>

      </SimpleCard>

      <Box sx={{ py: "12px" }} />
      <SimpleCard title="Mantenimiento General">


<p><strong>¿Por qué es necesario?</strong></p>
<p>Es necesario realizar mantenimiento general en un sistema hidropónico por dos razones principales:</p>
<ol>
  <li>El rendimiento del agua utilizada en riego hidropónico es superior, pero aún así puede evaporarse dentro del sistema con el tiempo, lo que puede provocar la acumulación de sales en algunas secciones del sistema.</li>
  <li>El agua de la llave, al no estar completamente desinfectada, combinada con la solución nutritiva, puede causar la aparición de moho en las paredes interiores del sistema con el tiempo. Aunque no es un problema grave, es recomendable limpiarlo al menos una vez al mes.</li>
</ol>

<p><strong>Pasos:</strong></p>
<ol>
  <li>Desarmar el sistema.</li>
  <li>Tallar las secciones afectadas con una esponja o paño sin usar jabón.</li>
</ol>

<p><strong>Cambio de solución nutritiva:</strong></p>
<p>Para un sistema de menos de 3 litros, la mitad de una cucharada pequeña (de cafetera) debe ser suficiente. Se recomienda realizar este cambio una vez a la semana.</p>
<p>Es importante controlar los niveles de agua, ya que la evaporación y el consumo de las plantas pueden provocar una disminución gradual del nivel del agua.</p>

<p><strong>Control del pH:</strong></p>
<p>Este paso es más relevante para sistemas más complejos y puede requerir el uso de herramientas para medir y ajustar el pH de la solución nutritiva.</p>

      </SimpleCard>
    </Container>
  );
}
