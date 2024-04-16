import { Children } from "react";
import Head from "./head";
import './reset.css'
import './global.css';

export default function RootLayout({ children }) {
    return (
      <html lang="pt-br">
        <Head></Head>
        <body><div className="root">{children}</div></body>
      </html>
    )
  }