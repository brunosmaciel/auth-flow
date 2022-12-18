import { useSession } from 'next-auth/react';
import Link from 'next/link';

export const HomeComponent = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <div className="container mx-auto">
        <div className="hero min-h-screen ">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-4xl font-bold">
                Signed in as {session.user?.name}
              </h1>
              <p className="py-6">Lorem </p>
              <Link className="btn btn-primary" href={'/dashboard'}>
                Go to dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <></>;
};
