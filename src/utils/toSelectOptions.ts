type Option = {
  label: string
  value: string
}

export function toSelectOptions(items?: Array<string | number>): Option[] {
  if (!items) {
    return []
  }
  return items.map((item) => ({
    label: item.toString(),
    value: item.toString(),
  }))
}