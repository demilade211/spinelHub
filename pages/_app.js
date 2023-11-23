import { useEffect } from "react"
import '../styles/global.css'
import AppLayout from "../layouts/AppLayout"
import { Provider } from 'react-redux';
import store from '../redux/store';

function MyApp({ Component, pageProps }) {

    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}

export default MyApp