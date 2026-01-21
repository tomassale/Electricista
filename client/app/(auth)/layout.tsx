import Header from '../_components/Header'
import Footer from '../_components/Footer'
import Emergency from '../_components/Emergency';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
      <Header/>
      {children}
      <Emergency/>
      <Footer/>
    </>
  );
}