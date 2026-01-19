import Header from '../components/Header'
import Footer from '../components/Footer'
import Emergency from '../components/Emergency';

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