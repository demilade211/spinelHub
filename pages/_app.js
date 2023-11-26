import { useEffect } from "react"
import '../styles/global.css'
import AppLayout from "../layouts/AppLayout"
import { Provider } from 'react-redux';
import store from '../redux/store';
import AppGuard from "../guards/AppGuard";

function MyApp({ Component, pageProps }) {

    return (
        <Provider store={store}>
            <AppGuard>
                <Component {...pageProps} />
            </AppGuard>

        </Provider>
    )
}
 

export default MyApp