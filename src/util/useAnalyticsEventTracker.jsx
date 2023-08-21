import React from "react";
import ReactGA from "react-ga";


const useAnalyticsEventTracker = (category="Send Message") => {
  const eventTracker = (action, label ) => {
    ReactGA.event({category, action, label});
  }
  return eventTracker;
}
export default useAnalyticsEventTracker;
