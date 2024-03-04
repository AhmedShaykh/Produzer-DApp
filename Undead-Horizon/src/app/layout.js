import { Provider } from "@/Components/ui/Provider";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import "./globals.css";

export const metadata = {
  title: "UNDEAD HORIZON",
  description: "UNDEAD HORIZON",
  icons: {
    icon: [
      {
        url: "/logo.png",
        href: "/logo.png"
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  )
};