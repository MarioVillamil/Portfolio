import Navigation from "./Navigation"
export default function Header(){
    return (
        < header className=" w-full bg-olive-600 text-white">
           <div className=" max-w-6xl mx-auto flex items-center justify-between py-6 px-6">
             <h1 className="text-lg font-medium">Mario Villamil</h1>
             <div className="ml-auto"></div>
             <Navigation/>
           </div>
        </header>
    )
}