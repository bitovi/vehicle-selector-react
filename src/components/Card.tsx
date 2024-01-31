import { ElementType } from "react"

type Props<T extends ElementType> = {
  a?: T,
  children: React.ReactNode
} & React.ComponentPropsWithoutRef<T>

export const Card = <T extends ElementType>({ as, children }: Props<T>) => {
  const Component = as || "p";

  return (
    <Component>
      {children}
    </Component>
  )
}

export const Test: React.FC = () => {
  const Img = "img";

  return (
    <Card as="a">
      <Img src="asdf" />
      Test
    </Card>
  )
}