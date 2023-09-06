export const pageview = (GA_MEASUREMENT_ID : string, url : string) => {
  window.gtag("event", "page_view", {
      page_path: url,
  });
};
