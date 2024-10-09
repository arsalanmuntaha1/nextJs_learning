import './css/globals.css';
import localFont from 'next/font/local';

export const myFont = localFont({
    src: './fonts/sugar_magic.ttf',
    display: 'swap',
});
import { Pacifico } from 'next/font/google';

// If loading a variable font, you don't need to specify the font weight
const pacifico = Pacifico({
    weight: ['400'],
    subsets: ['latin'],
    display: 'swap',
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <header>
                    <div className="nav">
                        <div className={`logo ${pacifico.className}`}>
                            <sup> Muntaha </sup> Arsalan <span>.</span>
                        </div>
                        <ul>
                            <li>
                                <a href="/" className={myFont.className}>
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/about" className={myFont.className}>
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className={myFont.className}>
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="/services" className={myFont.className}>
                                    Services
                                </a>
                            </li>
                        </ul>
                    </div>
                    <hr />
                </header>
                <main>{children}</main>
                <hr />
                <footer>
                    <h3 className={myFont.className}> NextJs Assignment </h3>
                </footer>
            </body>
        </html>
    );
}
