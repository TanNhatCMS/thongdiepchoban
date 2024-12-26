import Link from 'next/link';
import {Metadata} from "next";
import styles from './styles/not-found.module.css';

export const metadata: Metadata = {
    title: "404 - Page not found",
};
export default function NotFound() {
    return (
        <div id="notfound" className={styles.notfoundContainer}>
            <div className={styles.notfound}>
                <div className={styles.notfound404}>
                    <h1>404</h1>
                </div>
                <h2>Oops! Page Not Found</h2>
                <p>The page you are looking for might have been removed had its name changed or is temporarily
                    unavailable.</p>
                <Link href="/"> {/* Sử dụng Link để trở về trang chủ */}
                    Back to homepage
                </Link>
            </div>
        </div>
    );
}