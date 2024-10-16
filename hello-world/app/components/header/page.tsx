import { myFont } from '@/app/layout';
import { Pacifico } from 'next/font/google';
import '@/app/components/header/header.css';

// If loading a variable font, you don't need to specify the font weight
export const pacifico = Pacifico({
    weight: ['400'],
    subsets: ['latin'],
    display: 'swap',
});
export default function Header() {
    return (
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
    );
}
