import { Highlighter } from "rc-highlight"
import { FC } from "react"

interface Props {
  component: JSX.Element
  rawCode: string
}

export const VariantWrapper: FC<Props> = ({
  component,
  rawCode
}) => {
  return (
    <div>
      <div className="component">
        {component}
      </div>
      <div className="code">
        <Highlighter>{rawCode}</Highlighter>
      </div>
    </div>
  )
}