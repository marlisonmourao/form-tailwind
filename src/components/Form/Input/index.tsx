import { ComponentProps } from 'react'

type InputPrefixProps = ComponentProps<'div'>

export function InputPrefix({ ...rest }: InputPrefixProps) {
  return <div {...rest} />
}

type InputControlProps = ComponentProps<'input'>

export function InputControl({ ...rest }: InputControlProps) {
  return (
    <input
      className="flex-1  border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
      placeholder="search"
      {...rest}
    />
  )
}
type InputRootProps = ComponentProps<'div'>

export function InputRoot({ ...rest }: InputRootProps) {
  return (
    <div
      className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
      {...rest}
    />
  )
}
