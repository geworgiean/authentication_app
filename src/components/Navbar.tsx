import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import LogoutButton from "./LogoutButton";

export default async function Navbar() {
  const session = await getServerSession(authOptions);

  return (
    <nav className="bg-white border-b border-gray-200 py-4 px-8 shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-950">
          MyAuthApp
        </Link>

        <div className="flex items-center gap-6">
          {session ? (
            <>
              <Link href="/dashboard" className="text-gray-600 hover:text-blue-950 transition font-semibold">
                Dashboard
              </Link>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-500 font-semibold">{session.user?.email}</span>
                <LogoutButton />
              </div>
            </>
          ) : (
            <>
              <Link href="/login" className="text-blue-950 hover:text-white transition font-semibold shadow-lg px-4 py-2 rounded-3xl hover:bg-gray-700 ">
                Մուտք
              </Link>
              <Link
                href="/register"
                className="bg-blue-950 text-white px-4 py-2 rounded-3xl hover:bg-gray-700 transition font-semibold"
              >
                Գրանցվել
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}