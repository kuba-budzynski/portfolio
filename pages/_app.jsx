import 'pure-react-carousel/dist/react-carousel.es.css';
import 'react-vertical-timeline-component/style.min.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'react-alice-carousel/lib/scss/alice-carousel.scss';
import 'react-notifications-component/dist/theme.css';
import '../styles/globals.scss';

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { pageview, event } from '../utils/gtag';
import ReactNotification from 'react-notifications-component';

function MyApp({ Component, pageProps }) {
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = (url) => {
            pageview(url);
        };
        router.events.on('routeChangeComplete', handleRouteChange);
        router.events.off('routeChangeComplete', handleRouteChange);
    }, [router.events]);

    return (
        <div className="app-container">
            <ReactNotification />
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
