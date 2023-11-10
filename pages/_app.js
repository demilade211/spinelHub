import { useEffect } from "react"
import '../styles/global.css'
import AppLayout from "../layouts/AppLayout"

function MyApp({ Component, pageProps }) {

    return (
        <Component {...pageProps} />
    )
}

export default MyApp