import ProfileInfo from "./ProfileInfo";
export default function HeroSection(){
    const user = {
    name : "Mario villamil",
    job : "Software engineer"
  }
    return(
        <ProfileInfo information={user}/>
    )
}