import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { CowbirdProvider } from './providers/CowbirdProvider'
import { LocationProvider } from './providers/locationProvider'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { VehicleSelector } from '@components/vehicleSelector/variants/code/VehicleSelector.tsx'
import { VehicleSelectorBetterUseState } from '@components/vehicleSelector/variants/code/VehicleSelectorBetterUseState.tsx'
import { VehicleSelectorWithEffects } from '@components/vehicleSelector/variants/code/VehicleSelectorWithEffects.tsx'
import { VehicleSelectorUseReducer } from '@components/vehicleSelector/variants/code/VehicleSelectorUseReducer.tsx'
import { VehicleSelectorUrl } from '@components/vehicleSelector/variants/code/VehicleSelectorUrl.tsx'

import vehicleSelectorCode from "@components/vehicleSelector/variants/code/VehicleSelector?raw";
import vehicleSelectorWithEffectsCode from "@components/vehicleSelector/variants/code/VehicleSelectorWithEffects?raw";
import vehicleSelectorBetterUseStateCode from "@components/vehicleSelector/variants/code/VehicleSelectorBetterUseState?raw";
import vehicleSelectorUseReducerCode from "@components/vehicleSelector/variants/code/VehicleSelectorUseReducer?raw";
import vehicleSelectorUrlCode from "@components/vehicleSelector/variants/code/VehicleSelectorUrl?raw";

import { VariantWrapper } from '@components/vehicleSelector/variants/VariantWrapper.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/use-state-simple",
        element: (
          <VariantWrapper
            component={<VehicleSelector />}
            rawCode={vehicleSelectorCode}
          />
        ),
      },
      {
        path: "/use-state-better",
        element: (
          <VariantWrapper
            component={<VehicleSelectorBetterUseState />}
            rawCode={vehicleSelectorBetterUseStateCode}
          />
        ),
      },
      {
        path: "/use-state-use-effect",
        element: (
          <VariantWrapper
            component={<VehicleSelectorWithEffects />}
            rawCode={vehicleSelectorWithEffectsCode}
          />
        ),
      },
      {
        path: "/use-reducer",
        element: (
          <VariantWrapper
            component={<VehicleSelectorUseReducer />}
            rawCode={vehicleSelectorUseReducerCode}
          />
        ),
      },
      {
        path: "/url-query-params",
        element: (
          <VariantWrapper
            component={<VehicleSelectorUrl />}
            rawCode={vehicleSelectorUrlCode}
          />
        ),
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LocationProvider>
      <CowbirdProvider>
        <RouterProvider router={router} />
      </CowbirdProvider>
    </LocationProvider>
  </React.StrictMode>,
)
