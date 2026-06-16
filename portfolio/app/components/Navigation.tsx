import Link from "next/link"


export default function Navigation (){
    interface InavItem {
        label : string,
        pathName : string
    }
    const navList :InavItem[]=[
        
        {
        label:"About me",
        pathName : "#",
        },
        {
        label:"Stack",
        pathName : "#stack",
        },
        {
        label:"Curriculum Vitae",
        pathName : "#cv",
        },
        {
        label:"Projects",
        pathName : "#",
        },
        {
        label:"Contact",
        pathName : "#",
        }
]
    return(
       <nav className="flex items-center gap-8 text-l text-gray-400">
      {navList.map((item,index) => <Link href={item.pathName} key={index}>{item.label}</Link>)}
    </nav>
    )
}