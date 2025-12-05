import "./globals.css";



export const metadata = {
  title: "Sharp Engineering | Precision Machining Since 1998",
  description: "ISO 9001:2015 certified manufacturer of high-precision machined auto components.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        
        {children}
        
      </body>
    </html>
  );
}

