import { useEffect } from 'react';
import type { ComponentType } from 'react';

function withLogger<P extends object>(WrappedComponent: ComponentType<P>) {
  return function LoggedComponent(props: P) {
    useEffect(() => {
      console.log(`${WrappedComponent.name} mounted`);
      return () => {
        console.log(`${WrappedComponent.name} unmounted`);
      };
    }, []);

    return <WrappedComponent {...props} />;
  };
}

export default withLogger;