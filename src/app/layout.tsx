import "./styles/globals.css";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
        <body>
            {children}
        </body>
    </html>
  );
}
