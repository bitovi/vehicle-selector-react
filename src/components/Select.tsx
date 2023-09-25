import { useId } from "react"

export function Select({
  label,
  name,
  value,
  options,
  disabled,
  onChange
}: {
  label: string
  name: string
  value: string
  options: Array<{ value: string, label: string }>
  disabled?: boolean
  onChange?: (
    value: string,
    event?: React.ChangeEvent<HTMLSelectElement>
  ) => void
}) {
  const id = useId();

  return (
    <div className="select">
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={(event) => onChange?.(event.target.value, event)}
        disabled={disabled || options.length === 0}
      >
        <option value="">Select...</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}