import '@/app/components/footer/footer.css';
import { myFont } from '@/app/layout';
import Image from 'next/image';
export default function Footer() {
    return (
        <footer className="footer">
            <div className={`container1 ${myFont.className}`}>
                <div className="footer-content">
                    <h3>Contact Us</h3>
                    <p>
                        <Image src={'/send.svg'} alt="icon" width={20} height={20} /> :
                        arsalanmuntaha1@gmail.com
                    </p>
                    <p>
                        <Image src={'/phone.svg'} alt="icon" width={20} height={20} /> :
                        +923002555032
                    </p>
                </div>
                <div className="footer-content">
                    <h3>Quick Links</h3>
                    <ul className="list">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                        <li>
                            <a href="/services">Services</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-content">
                    <h3>Follow Us</h3>
                    <ul className="footer-mediaicon">
                        <li>
                            <a href="https://www.linkedin.com/in/muntaha-arsalan-2390a22b6/">
                                <Image src={'/linkedin.svg'} alt="icon" width={20} height={20} />{' '}
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/arsalanmuntaha1">
                                <Image src={'/github.svg'} alt="icon" width={20} height={20} />{' '}
                                Github
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="bottom-bar">
                <p>&copy; 2024 your company. All rights reserved</p>
            </div>
        </footer>
    );
}
