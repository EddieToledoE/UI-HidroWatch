import { Stack } from "@mui/material";
import { Box, styled } from "@mui/material";
import { Breadcrumb, SimpleCard } from "app/components";
import SimpleForm from "./SimpleForm";
import StepperForm from "./StepperForm";

// STYLED COMPONENTS
const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

export default function AppForm() {
  return (
    <Container>
      <h1>AGREGAR EDIFICIO</h1>
      <Box className="breadcrumb">
        <Breadcrumb
          routeSegments={[
            { name: "Material", path: "/material" },
            { name: "Form" },
          ]}
        />
      </Box>

      <Stack spacing={3}>
        <SimpleCard title="Crear Edificio">
          <SimpleForm />
        </SimpleCard>
      </Stack>
    </Container>
  );
}
