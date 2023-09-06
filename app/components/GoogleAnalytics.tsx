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

const GoogleAnalytics = ({ GA_MEASUREMENT_ID }: { GA_MEASUREMENT_ID: string }) => {

  // const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

  // if (!GA_TRACKING_ID) {
  //   return null
  // }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              });
            `,
        }}
      />
    </>
  );
};

export default GoogleAnalytics;
