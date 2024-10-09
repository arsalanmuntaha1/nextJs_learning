import { myFont } from '../layout';

export default function services() {
    return (
        <div className={`services ${myFont.className}`}>
            <ul>
                <li>
                    <a href="/services/abc">Service </a>
                </li>
                <li>
                    <a href="/services/def">Service </a>
                </li>
                <li>
                    <a href="/services/123">Service</a>
                </li>
            </ul>
        </div>
    );
}
