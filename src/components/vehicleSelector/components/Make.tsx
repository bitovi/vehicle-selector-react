import { useMakes } from "@/hooks/useMakes";
import { toSelectOptions } from "@/utils/toSelectOptions";
import { Select } from "@components/Select";

export function Make({
  year,
  make,
  onChange
}: {
  year: string;
  make: string;
  onChange?: (make: string) => void;
}) {
  const { makes } = useMakes(year);

  return (
    <Select
      label="Make"
      name="make"
      options={toSelectOptions(makes)}
      value={make}
      onChange={onChange}
      disabled={makes.length === 0}
    />
  )
}