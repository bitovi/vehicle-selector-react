import { Select } from "@components/Select";
import { useYears } from "@/hooks/useYears";
import { toSelectOptions } from "@/utils/toSelectOptions";

export function Year({
  year,
  onChange
}: {
  year: string;
  onChange?: (year: string) => void;
}) {
  const { years } = useYears();

  return (
    <Select
      label="Year"
      name="year"
      value={year}
      options={toSelectOptions(years)}
      onChange={onChange}
      disabled={years.length === 0}
    />
  )
}