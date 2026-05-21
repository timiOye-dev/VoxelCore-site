import { useLocation, useOutlet } from "react-router-dom";

import PageTransition from "./PageTransition";

function PageTransitionLayout() {
  const location = useLocation();
  const outlet = useOutlet();

  return <PageTransition key={location.pathname}>{outlet}</PageTransition>;
}

export default PageTransitionLayout;
