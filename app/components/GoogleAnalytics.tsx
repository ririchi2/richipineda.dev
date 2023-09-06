// import Script from 'next/script'
// import TrackPageViews from './TrackPageViews'

// export default function GoogleAnalytics() {
//   const gaMeasurementID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

//   if (!gaMeasurementID) {
//     return null
//   }

//   return (
//     <>
//       <Script
//         src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementID}`}
//         strategy="afterInteractive"
//       />
//       <Script id="google-analytics" strategy="afterInteractive">
//         {`
//           window.dataLayer = window.dataLayer || [];
//           function gtag(){dataLayer.push(arguments);}
//           gtag('js', new Date());

//           gtag('config', '${gaMeasurementID}', { send_page_view: false });
//         `}
//       </Script>
//       <TrackPageViews />
//     </>
//   )
// }

//GoogleAnalytics.tsx

"use client";
import Script from "next/script";

const GoogleAnalytics = () => {

  const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

  if (!GA_TRACKING_ID) {
    return null
  }

  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GA_TRACKING_ID}');
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
