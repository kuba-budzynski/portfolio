import 'pure-react-carousel/dist/react-carousel.es.css';
import 'react-vertical-timeline-component/style.min.css';
import '../styles/globals.scss';

import { UserProvider } from '@auth0/nextjs-auth0';

function MyApp({ Component, pageProps }) {
    return (
        <div className="app-container">
            <UserProvider>
                <Component {...pageProps} />
            </UserProvider>
        </div>
    );
}

export default MyApp;
