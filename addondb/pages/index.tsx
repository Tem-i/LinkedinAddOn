import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import client from "@/lib/mongodb";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import { useRouter } from "next/router"; 

type ConnectionStatus = {
  isConnected: boolean;
};

const inter = Inter({ subsets: ["latin"] });

export const getServerSideProps: GetServerSideProps<
  ConnectionStatus
> = async () => {
  try {
    await client.connect(); // `await client.connect()` will use the default database passed in the MONGODB_URI
    return {
      props: { isConnected: true },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
};

export default function Home({
  isConnected,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter(); 
  const handleRedirectToTestpage = () => {
    router.push("/testpage"); // Navigate to the testpage
  };
  const handleRedirectToHomepage = () => {
    router.push("/homepage"); // Navigate to the homepage
  };
  return (
    <main>
      <div>
      {isConnected ? (
          <h2 className="text-lg text-green-500">
            You are connected to MongoDB!
          </h2>
        ) : (
          <h2 className="text-lg text-red-500">
            You are NOT connected to MongoDB. Check the <code>README.md</code>{" "}
            for instructions.
          </h2>
        )}
        <button
          onClick={handleRedirectToTestpage}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Go to Test Page
        </button>
        <button
          onClick={handleRedirectToHomepage}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Go to Home Page
        </button>
      </div>
    </main>
  );
}
