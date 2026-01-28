import Emergency from '../_components/Emergency';


export default function RootLayout({children}: Readonly<{
  children: React.ReactNode
}>) {

  return (
    <>
      {children}
      <Emergency/>
    </>
  );
}