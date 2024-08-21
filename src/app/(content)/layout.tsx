import '../globals.css'
import ButtonTest from "../_component/ButtonTeset"
import ReduxProvider from "../_component/ReduxProvider"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <ButtonTest />
          {children}
        </ReduxProvider>
      </body>
    </html>
  )
}
