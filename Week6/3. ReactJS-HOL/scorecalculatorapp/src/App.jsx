import './App.css';
import { CalculateScore } from './Components/CalculateScore';

function App() {
  return (
    <div>
      <CalculateScore
        Name="SARATHY"
        School="Velammal Matric School"
        total={295}
        goal={300}
      />
    </div>
  );
}

export default App;
