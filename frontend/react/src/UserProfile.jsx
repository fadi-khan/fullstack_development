
const UserProfile = ({age,name,person, ...props})=> {


    return(
        <div>
            <h1>{name}</h1>
            <p>{age}</p>
            <img src={`https://randomuser.me/api/portraits/${person.toLowerCase()}/${age}.jpg`} alt=""/>
            {props.children}
        </div>
    )
}
export  default  UserProfile;
