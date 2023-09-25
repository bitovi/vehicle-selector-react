import { useReducer } from "react";
import { Make } from "./components/Make";
import { Model } from "./components/Model";
import { Year } from "./components/Year";

type State = {
  year: string
  make: string
  model: string
}

type Action =
  | { type: "SET_YEAR"; year: string }
  | { type: "SET_MAKE"; make: string }
  | { type: "SET_MODEL"; model: string }

const initialState: State = {
  year: "",
  make: "",
  model: ""
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_YEAR":
      return {
        ...state,
        year: action.year,
        make: "",
        model: ""
      }
    case "SET_MAKE":
      return {
        ...state,
        make: action.make,
        model: ""
      }
    case "SET_MODEL":
      return {
        ...state,
        model: action.model
      }
    default:
      return state
  }
}

export function VehicleSelectorUseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { year, make, model } = state;

  const setYear = (year: string) => dispatch({ type: "SET_YEAR", year })
  const setMake = (make: string) => dispatch({ type: "SET_MAKE", make })
  const setModel = (model: string) => dispatch({ type: "SET_MODEL", model })

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