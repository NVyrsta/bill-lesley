import Navbar from "@/components/navbar/Navbar";
import "./globals.scss";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata = {
  title: "Bill Lesley",
  description: "Bill Lesley: Math Teacher of the Year 2018",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <div className="container">
            <Navbar />

            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
