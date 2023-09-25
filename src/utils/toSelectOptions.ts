export function toSelectOptions(items?: Array<string | number>) {
  if (!items) {
    return []
  }
  return items.map((item) => ({
    label: item.toString(),
    value: item.toString(),
  }))
}