import { useSession, signOut } from 'next-auth/react';
import Image from 'next/image';

export type DashboardProps = {
  name: string;
  email: string;
  image: string;
};
export const DashboardComponent = () => {
  const { data: session } = useSession();

  return (
    <>
      <div className="container mx-auto flex flex-col items-center">
        <div className="hero min-h-screen ">
          <div className="hero-content flex-col lg:flex-row">
            <Image
              src="https://placeimg.com/260/400/arch"
              className="max-w-sm rounded-lg shadow-2xl"
              alt="lala"
            />
            <div>
              <h1 className="text-5xl font-bold">
                Welcome {session?.user?.name}
              </h1>
              <p className="py-6">Nothing to see here, yet.</p>
              <button className="btn btn-primary" onClick={() => signOut()}>
                Log out
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
