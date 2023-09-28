import { createContext, useEffect, useState, useSyncExternalStore } from "react"
import { Router } from "./router"

export const LocationContext = createContext({
  searchParams: new URLSearchParams(window.location.search),
  setSearchParams: (searchParams: Record<string, string>) => { console.log(searchParams) }
})

const router = new Router()

export function LocationProvider({
  children
}: {
  children: React.ReactNode
}) {
  const [searchParams, _setSearchParams] = useState(new URLSearchParams(window.location.search));
  const state = useSyncExternalStore(
    router.subscribe,
    router.snapshot
  );

  useEffect(() => {
    console.log("LocationProvider useEffect")
    _setSearchParams(new URLSearchParams(window.location.search))
  }, [state])

  function setSearchParams(searchParams: Record<string, string>) {
    const newSearchParams = new URLSearchParams(window.location.search)
    Object.entries(searchParams).forEach(([key, value]) => {
      if (value) {
        newSearchParams.set(key, value)
      } else {
        newSearchParams.delete(key)
      }
    })

    window.history.pushState({}, "", `${window.location.pathname || ""}?${newSearchParams}`)
  }

  return (
    <LocationContext.Provider value={{
      searchParams,
      setSearchParams
    }}>
      {children}
    </LocationContext.Provider>
  )
}
