import './css/globals.css';
import localFont from 'next/font/local';
import Header from '@/app/components/header/page';
import Footer from './components/footer/page';

export const myFont = localFont({
    src: './fonts/Nunito/Nunito-VariableFont_wght.ttf',
    display: 'swap',
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <title>Next Js Assignment</title>
            </head>
            <body>
                <Header />
                <main className={myFont.className}>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
