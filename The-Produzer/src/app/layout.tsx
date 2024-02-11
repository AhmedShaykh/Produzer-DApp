import { ThemeProvider } from "@/Components/ThemeProvider";
import Provider from "@/Components/Provider";
import "@rainbow-me/rainbowkit/styles.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import "./globals.css";

export const metadata = {
  title: "THE PRODUZER",
  description: "THE PRODUZER"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Provider>
            <Navbar />
            {children}
            <Footer />
          </Provider>
        </ThemeProvider>
      </body>
    </html>
  );
};