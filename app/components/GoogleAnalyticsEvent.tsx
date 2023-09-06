'use client'
import Script from "next/script"

const GoogleAnalyticsEvent = () => {

    return (
        <Script
            id="google-analytics-event"
            strategy="afterInteractive"
        >
            {`gtag('event', 'this_is_my_test', {
                'app_name': 'myAppName',
                'screen_name': 'Home'
                });`
            }
        </Script>
    )
}
export default GoogleAnalyticsEvent
