import Link from 'next/link'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000)
        console.log('use effect ran')
    }, [])

    return (
        <div className="not-found">
            <h1>Ooooops....</h1>
            <h2>That page connot be found.</h2>
            <p>Go back to the <Link href={"/"}>Homepage</Link> </p>
        </div>
    )
}

export default NotFound;