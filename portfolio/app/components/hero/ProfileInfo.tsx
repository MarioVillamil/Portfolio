interface Information{
        name: string,
        job:string
    }

    interface UserInfo{
        information:Information
    }

export default function ProfileInfo({information}:UserInfo){
    return(
        <div>
            <h1 className="text-5xl ">{information.name}</h1>
            <p className="text-xl ">{information.job}</p>
        </div>
    );
}