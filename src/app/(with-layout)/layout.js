import Navebar from "@/components/shared/Navebar";

import Footer from "@/components/shared/Footer";

export default function RootLayout({ children }) {
  return (
    <>
      <Navebar />
      <div style={{ minHeight: "60vh", backgroundColor: "rgb(68, 50, 50)" }}>
        {children}
      </div>
      <Footer />
    </>
  );
}
