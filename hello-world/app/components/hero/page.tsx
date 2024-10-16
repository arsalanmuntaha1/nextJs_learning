import { myFont } from '@/app/layout';
import '@/app/components/hero/hero.css';
import Image from 'next/image';

export default function Hero() {
    return (
        <div className="herosection">
            <div className="left">
                <h1 className={myFont.className}>Welcome to my Portfolio</h1>
                <h2>Muntaha Arsalan</h2>
                <p>
                    I am a Web Developer.I transform ideas into digital realities,focusing unique
                    <br />
                    and engaging experiences for users.
                </p>
            </div>
            <div className="right">
                <Image src={'/img.png'} alt="profile" width={500} height={500} />
            </div>
        </div>
    );
}
