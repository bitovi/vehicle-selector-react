import { useState } from "react"
import { Make } from "../../components/make/Make";
import { Model } from "../../components/Model";
import { Year } from "../../components/Year";

/**
 * By creating a custom hook, we can create a reusable state management
 * solutions that also protects our state setters. Notice that the
 * exposed setters change multiple values at once. The individual 
 * setters are not exposed, so they cannot be used to change the state
 * in a way that is not intended.
 */

const useVehicleHook = () => {
  const [year, _setYear] = useState<string>("")
  const [make, _setMake] = useState<string>("")
  const [model, _setModel] = useState<string>("")

  const setYear = (year: string) => {
    _setYear(year)
    _setMake("")
    _setModel("")
  }

  const setMake = (make: string) => {
    _setMake(make)
    _setModel("")
  }

  const setModel = (model: string) => {
    _setModel(model)
  }

  return {
    year,
    make,
    model,
    setYear,
    setMake,
    setModel
  }
}

export function VehicleSelectorCustomStateHook() {
  const { year, make, model, setYear, setMake, setModel } = useVehicleHook()

  return (
    <div>
      <div className="current-selection">
        Current Selection: {year} {make} {model}
      </div>
      <div className="vehicle-selectors">
        <Year year={year} onChange={setYear} />
        <Make year={year} make={make} onChange={setMake} />
        <Model year={year} make={make} model={model} onChange={setModel} />
      </div>
    </div>
  )
}
