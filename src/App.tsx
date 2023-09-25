import { useState } from 'react';
import './App.css';
import bitoviLogo from "@assets/bitovi-logo.svg";
import {
  VehicleSelector,
  VehicleSelectorWithEffects,
  VehicleSelectorBetterUseState,
  VehicleSelectorUseReducer
} from './components/vehicleSelector';
import vehicleSelectorCode from "@components/vehicleSelector/VehicleSelector?raw";
import vehicleSelectorWithEffectsCode from "@components/vehicleSelector/VehicleSelectorWithEffects?raw";
import vehicleSelectorBetterUseStateCode from "@components/vehicleSelector/VehicleSelectorBetterUseState?raw";
import vehicleSelectorUseReducerCode from "@components/vehicleSelector/VehicleSelectorUseReducer?raw";
import { Highlighter } from 'rc-highlight';

type Version =
  | "useState"
  | "useStateWithEffects"
  | "useStateBetter"
  | "useReducer"

const VehicleSelectors: Record<Version, JSX.Element> = {
  useState: <VehicleSelector />,
  useStateWithEffects: <VehicleSelectorWithEffects />,
  useStateBetter: <VehicleSelectorBetterUseState />,
  useReducer: <VehicleSelectorUseReducer />
}

const VehicleSelectorCode: Record<Version, string> = {
  useState: vehicleSelectorCode,
  useStateWithEffects: vehicleSelectorWithEffectsCode,
  useStateBetter: vehicleSelectorBetterUseStateCode,
  useReducer: vehicleSelectorUseReducerCode
}

function App() {
  const [version, setVersion] = useState<Version>("useState");

  return (
    <div className="app">
      <header className="header">
        <div>
          <a href="https://bitovi.com" target="_blank">
            <img src={bitoviLogo} className="logo" alt="Bitovi logo" />
          </a>
        </div>
        <h1>Vehicle Information</h1>
      </header>
      <main>
        <div style={{ padding: "1rem 0" }}>
          <button
            disabled={version === "useState"}
            onClick={() => setVersion("useState")}
          >
            useState
          </button>
          <button
            disabled={version === "useStateWithEffects"}
            onClick={() => setVersion("useStateWithEffects")}
          >
            useState w/Effects
          </button>
          <button
            disabled={version === "useStateBetter"}
            onClick={() => setVersion("useStateBetter")}
          >
            Better useState
          </button>
          <button
            disabled={version === "useReducer"}
            onClick={() => setVersion("useReducer")}
          >
            useReducer
          </button>
        </div>
        {VehicleSelectors[version]}
        <div className="code">
          <Highlighter>{VehicleSelectorCode[version]}</Highlighter>
        </div>
      </main>
    </div>
  )
}

export default App
