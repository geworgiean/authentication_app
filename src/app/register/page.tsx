import { registerUser } from "../actions/register";
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-linear-to-r from-indigo-500 to-blue-500 text-black">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md border border-gray-100">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-extrabold text-gray-900">
            Ստեղծել հաշիվ
          </h1>
          <p className="text-gray-600 mt-2">Միացեք մեզ այսօր:</p>
        </div>
        
        <form action={registerUser} className="flex flex-col gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Էլ. հասցե
            </label>
            <input 
              name="email" 
              type="email" 
              placeholder="user@example.com" 
              required 
              className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 focus:border-blue-950 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Գաղտնաբառ
            </label>
            <input 
              name="password" 
              type="password" 
              placeholder="********" 
              required 
              className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 focus:border-blue-950 transition"
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-800 text-white py-3 rounded-lg font-semibold hover:bg-blue-950 transition duration-300 shadow-md hover:shadow-lg active:scale-[0.98]"
          >
            Գրանցվել
          </button>
        </form>

        <div className="mt-8 text-center border-t border-gray-100 pt-6">
          <p className="text-sm text-gray-600">
            Արդեն ունե՞ք հաշիվ:{" "}
            <Link href="/login" className="text-blue-800 hover:text-blue-950 hover:underline font-semibold transition">
              Մուտք գործել
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}