import { useState } from "react";
import { Make } from "./components/Make";
import { Model } from "./components/Model";
import { Year } from "./components/Year";

export function VehicleSelector() {
  const [year, setYear] = useState<string>("")
  const [make, setMake] = useState<string>("")
  const [model, setModel] = useState<string>("")

  return (
    <div>
      <div className="current-selection">
        Current Selection: {year} {make} {model}
      </div>
      <div className="vehicle-selectors">
        <Year year={year} onChange={(year) => setYear(year)} />
        <Make year={year} make={make} onChange={(make) => setMake(make)} />
        <Model year={year} make={make} model={model} onChange={(model) => setModel(model)} />
      </div>
    </div>
  )
}