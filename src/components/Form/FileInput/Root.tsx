import { ComponentProps } from 'react'

type RootProps = ComponentProps<'div'>

export function Root({ ...rest }: RootProps) {
  return <div {...rest} />
}
