import { useEffect } from "react"
import '../styles/global.css'
import AppLayout from "../layouts/AppLayout"

function MyApp({ Component, pageProps }) { 

    return (
        <AppLayout>
            <Component {...pageProps} />
        </AppLayout>
    )
}

export default MyApp