import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div>
      {session ? (
        <div>
          <h1 className="text-4xl text-center mt-10">
            Welcome To {session?.user?.name}
          </h1>
          <h1 className="text-4xl text-center mt-10">
            User Email:{session?.user?.email}
          </h1>
          <div className="flex justify-center mt-10">
            <Image
              src={session?.user?.image ?? "/default-image.png"}
              width={100}
              height={100}
              alt="User Image"
              className="mx-auto rounded-full"
            />
          </div>
        </div>
      ) : (
        <div>
          <h1 className="text-4xl text-center mt-10">You are not logged in</h1>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
