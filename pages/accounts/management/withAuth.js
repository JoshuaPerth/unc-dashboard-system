import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getAuth } from 'firebase/auth';

const withAuth = (WrappedComponent) => {
  const AuthenticatedComponent = (props) => {
    const auth = getAuth();
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (!user) {
          router.push('/404.js'); // Redirect to login page if user is not logged in
        } else {
          setLoading(false); // Set loading to false if user is authenticated
        }
      });

      return () => unsubscribe();
    }, []);

    if (loading) {
      return <div>Loading...</div>; // Render a loading state until the authentication check is complete
    }

    return <WrappedComponent {...props} />;
  };

  return AuthenticatedComponent;
};

export default withAuth;
