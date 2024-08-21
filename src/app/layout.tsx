import './globals.css'
import ButtonTest from "./(home)/_component/ButtonTeset";
import ReduxProvider from './_component/ReduxProvider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <ButtonTest />
          {/* Header */}
          {children}
          {/* Footer */}
        </ReduxProvider>
      </body>
    </html>
  );
}
