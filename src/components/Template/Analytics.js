import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';

const { NODE_ENV } = process.env;

const Analytics = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (NODE_ENV === 'production') {
      ReactGA.set({
        page: pathname,
      });
      ReactGA.pageview(pathname);
    }
  }, [pathname]);

  return null;
};

export default Analytics;
