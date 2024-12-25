import { Sidebar } from "@/components/layout/sidebar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="pl-64">
        {children}
      </main>
    </div>
  )
}

