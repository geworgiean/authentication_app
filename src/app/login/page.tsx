"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setLoading(false);

    if (result?.error) {
      setError("Մուտքի սխալ: Ստուգեք տվյալները և փորձեք նորից:");
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-linear-to-r from-indigo-500 to-blue-500 text-black">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md border border-gray-100">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-extrabold text-gray-900">
            Բարի գալուստ
          </h1>
          <p className="text-gray-600 mt-2">Մուտք գործեք ձեր հաշիվ:</p>
        </div>
        
        {error && (
          <div className="bg-red-50 text-red-700 p-4 rounded-lg mb-6 text-sm font-medium border border-red-200">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Էլ. հասցե
            </label>
            <input 
              type="email" 
              placeholder="user@example.com" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Գաղտնաբառ
            </label>
            <input 
              type="password" 
              placeholder="********" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>
          <button 
            type="submit" 
            disabled={loading}
            className={`w-full bg-blue-600 text-white py-3 rounded-lg font-semibold transition duration-300 shadow-md hover:shadow-lg active:scale-[0.98] ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-800'}`}
          >
            {loading ? 'Մուտք է գործվում...' : 'Մուտք գործել'}
          </button>
        </form>

        <div className="mt-8 text-center border-t border-gray-100 pt-6">
          <p className="text-sm text-gray-600">
            Չունե՞ք հաշիվ:{" "}
            <Link href="/register" className="text-blue-600 hover:text-blue-800 hover:underline font-semibold transition">
              Գրանցվել
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}