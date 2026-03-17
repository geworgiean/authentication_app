import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import LogoutButton from "@/components/LogoutButton";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
    const session = await getServerSession(authOptions);
    if (!session) {
        redirect("/login");
    }

    return (
        <div className="min-h-screen bg-gray-100 p-8 text-black">
            <div className="p-8">
                <h1 className="text-2xl font-bold">Անձնական Էջ
                    {session?.user?.email && (
                        <p className="mt-2 text-gray-600">
                            Բարի գալուստ, <strong>{session.user.email}</strong>
                        </p>
                    )}
                </h1>
            </div>
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-10 border border-gray-100">
                <div className="flex justify-between items-center border-b pb-6 mb-6">
                    <h1 className="text-3xl font-bold text-gray-800">Անձնական էջ</h1>
                    <LogoutButton />
                </div>

                <div className="space-y-4">
                    <div className="p-6 border rounded-xl hover:shadow-md transition cursor-pointer">
                        <h3 className="font-bold text-lg">Իմ պրոֆիլը</h3>
                        <p className="text-gray-500 text-sm mt-1">Կառավարեք ձեր անձնական տվյալները։</p>
                    </div>
                    <div className="p-6 border rounded-xl hover:shadow-md transition cursor-pointer">
                        <h3 className="font-bold text-lg">Կարգավորումներ</h3>
                        <p className="text-gray-500 text-sm mt-1">Փոխեք գաղտնաբառը կամ նախընտրությունները:</p>
                    </div>
                </div>
            </div>
        </div>
    );
}