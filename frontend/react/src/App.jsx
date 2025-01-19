import UserProfile from "./UserProfile.jsx";


function App() {


    return (

        <div>
            <UserProfile
                name={"Fahad"}
                age={26}
                person={"men"}
            >
                <p>
                    Software Engineer
                </p>
            </UserProfile>

            <UserProfile
                name={"Farwa"}
                age={25}
                person={"women"}
            >
            </UserProfile>

            <UserProfile
                name={"Bhulla"}
                age={88}
                person={"men"}
            >
            </UserProfile>
            <UserProfile
                name={"Rabia"}
                age={55}
                person={"women"}
            >
            </UserProfile>

        </div>
    )
}

export default App
