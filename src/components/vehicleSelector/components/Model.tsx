import { useModels } from "@/hooks/useModels";
import { toSelectOptions } from "@/utils/toSelectOptions";
import { Select } from "@components/Select";

export function Model({
  year,
  make,
  model,
  onChange
}: {
  year: string;
  make: string;
  model: string;
  onChange?: (model: string) => void;
}) {
  const { models } = useModels(year, make);
  return (
    <Select
      label="Model"
      name="model"
      value={model}
      options={toSelectOptions(models)}
      onChange={onChange}
      disabled={models.length === 0}
    />
  )
}