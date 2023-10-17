import { useState } from "react";
import { Make } from "../../components/make/Make";
import { Model } from "../../components/Model";
import { Year } from "../../components/Year";

export function VehicleSelectorBetterUseState() {
  const [year, setYear] = useState<string>("")
  const [make, setMake] = useState<string>("")
  const [model, setModel] = useState<string>("")

  /*
  Notice that these functions handle all related state changes at once, instead of relying on useEffect to handle them later. This keeps the state changes together, so it requires a different mental model compared to using useEffect. It also is marginally more efficient as it avoids unnecessary renders.
  */

  const onChangeYear = (year: string) => {
    setYear(year)
    setMake("")
    setModel("")
  }

  const onChangeMake = (make: string) => {
    setMake(make)
    setModel("")
  }

  const onChangeModel = (model: string) => {
    setModel(model)
  }

  return (
    <div>
      <div className="current-selection">
        Current Selection: {year} {make} {model}
      </div>
      <div className="vehicle-selectors">
        <Year year={year} onChange={onChangeYear} />
        <Make year={year} make={make} onChange={onChangeMake} />
        <Model year={year} make={make} model={model} onChange={onChangeModel} />
      </div>
    </div>
  )
}