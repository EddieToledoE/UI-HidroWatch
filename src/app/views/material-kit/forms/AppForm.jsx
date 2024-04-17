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
      <h1>Registrar Plantulas</h1>
      <Box className="breadcrumb">
       
      </Box>

      <Stack spacing={3}>
        <SimpleCard title="Registrar Plantulas">
          <SimpleForm />
        </SimpleCard>
      </Stack>
    </Container>
  );
}
