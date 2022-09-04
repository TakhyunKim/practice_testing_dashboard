import Dashboard from "./components/Dashboard";

import { Container, DashboardContainer } from "./App.styled";

function App() {
  return (
    <Container>
      <DashboardContainer>
        <Dashboard />
      </DashboardContainer>
    </Container>
  );
}

export default App;
