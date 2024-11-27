import Link from "next/link";
import Image from "next/image";

import styles from "./header.module.css";

export default async function Header() {
    const user = false;

    return (
        <header className={styles.header}>
            <nav className={`${styles.nav} container`}>
                <Link className={styles.logo} href="/">
                    <Image src={'/assets/dogs.svg'} alt="Dogs" width={28} height={22} priority />
                </Link>
                <Link className={styles.login} href={user ? '/conta' : '/login'}>
                    {user ? 'dogs' : 'Login / Criar'}
                </Link>
            </nav>
        </header>
    );
}