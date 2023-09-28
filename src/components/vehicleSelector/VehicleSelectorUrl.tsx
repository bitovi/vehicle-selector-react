import { useLocation } from "@/providers/locationProvider";
import { Make } from "./components/Make";
import { Model } from "./components/Model";
import { Year } from "./components/Year";

export function VehicleSelectorUrl() {
  const { searchParams, setSearchParams } = useLocation()

  const year = searchParams.get("year") || ""
  const make = searchParams.get("make") || ""
  const model = searchParams.get("model") || ""

  const onChangeYear = (year: string) => {
    setSearchParams({
      year,
      make: "",
      model: ""
    })
  }

  const onChangeMake = (make: string) => {
    setSearchParams({
      make,
      model: ""
    })
  }

  const onChangeModel = (model: string) => {
    setSearchParams({ model })
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