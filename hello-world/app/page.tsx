import Image from 'next/image';
import styles from './css/page.module.css';
import { myFont } from './layout';

export default function homePage() {
    return (
        <div className="home">
            <h1 className={myFont.className}>Welcome to our HomePage</h1>
        </div>
    );
}
