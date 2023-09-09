import { LogOut } from '../../../node_modules/lucide-react'
import { Button } from '../Botton'

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <img
        src="https://github.com/marlisonmourao.png"
        alt="userImage"
        className="h-10 w-10 rounded-full"
      />

      <div className="flex flex-1 flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Marlison Mourão
        </span>
        <span className="truncate text-sm text-zinc-500">
          bentesmourao@gmail.com
        </span>
      </div>

      <Button type="button" variant="ghost">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  )
}
