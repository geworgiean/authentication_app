import ParticlesBackground from "@/components/ParticlesBackground";
import Link from "next/link";



export default function HomePage() {
  return (
    <div className="min-h-screen relative flex flex-col">
      <ParticlesBackground />

      <main className="grow flex items-center justify-center">
        <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border">
          <h1 className="text-4xl font-extrabold text-blue-950 mb-4">
            Բարի գալուստ <span className="text-blue-600">MyAuthApp</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto">
            Սա անվտանգ Authentication համակարգ է՝ սարքված Next.js-ով: Գրանցվեք կամ մուտք գործեք՝ Dashboard-ը տեսնելու համար:
          </p>
          
          <div className="flex gap-4 justify-center">
            <Link href="/login" className="text-lg text-blue-950 hover:text-white font-semibold px-6 py-2 hover:bg-gray-700 transition shadow-lg rounded-3xl">
              Մուտք
            </Link>
            <Link href="/register" className="bg-blue-950 text-white px-6 py-3 rounded-3xl hover:bg-gray-700 transition shadow-lg font-semibold">
              Գրանցվել հիմա
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}