import Navbar from "@/components/nav"
export default function Home(){
  return(
    <main className="flex justify-center items-center h-screen">
      <div className="w-full max-w-2xl mx-auto p-20 bg-slate-100 rounded-b-2xl shadow-lg">
        <Navbar/>
         <h1 className="text-green-500 text-5xl font-bold">this is my first project</h1>
      </div>
     
    </main>
  )
} 