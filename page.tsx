import { YoonWiProvider } from "@/components/yoon-wi/store"
import { AppShell } from "@/components/yoon-wi/app-shell"

export default function Page() {
  return (
    <YoonWiProvider>
      <AppShell />
    </YoonWiProvider>
  )
}
