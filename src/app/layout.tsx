import type {Metadata} from "next";
import "./globals.css";
export const metadata:Metadata={title:"BetterSelf OS | مساعد الأولويات",description:"A bilingual priority operating system with privacy-first AI consent."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ar"><body>{children}</body></html>}
