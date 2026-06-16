import ProfileInfo from "./ProfileInfo";
import ProfileImage from "./ProfileImage";
import CvSection from "../cv/CvSection";
export default function HeroSection(){
    const user = {
    name : "Mario villamil",
    job : "Software engineer"
  }
    return(
        <div className="flex items-center justify-between px-10 py-16">
            <ProfileInfo information={user}/>
            <CvSection/>
            <ProfileImage/>
        </div>
        
    )
}