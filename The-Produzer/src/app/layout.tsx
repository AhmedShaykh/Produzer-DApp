import { ThemeProvider } from "@/Components/ThemeProvider";
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
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
};