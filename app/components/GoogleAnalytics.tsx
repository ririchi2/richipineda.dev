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
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from "react";
import { pageview } from "../lib/gtagHelper";



const GoogleAnalytics = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

  if (!GA_MEASUREMENT_ID) {
    console.log("No GA_MEASUREMENT_ID");
    return null
  }

  useEffect(() => {
    const url = pathname + searchParams.toString()

    pageview(GA_MEASUREMENT_ID, url);

  }, [pathname, searchParams, GA_MEASUREMENT_ID]);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GA_MEASUREMENT_ID}');
          `,
        }}
      />
    </>
  );
};

export default GoogleAnalytics;
