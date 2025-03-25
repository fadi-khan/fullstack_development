import {TypeAnimation} from "react-type-animation";


export const Logo = () => {
    return (

        <div className={"z-10 flex justify-center items-center"}>
            <img
                className="md:w-[70px] w-[50px] md:h-[70px] h-[50px] rounded-full p-2 ]"
                src={'logo2.png'}
                alt="Bordered avatar"
            />

              <div className="z-10 md:text-4xl text-xl  font-bold bg-gradient-to-r from-green-400 to-green-900 bg-clip-text text-transparent">
                 <ExampleComponent/>
              </div>


        </div>

    )
}
export const ExampleComponent = () => {
    return (
        <TypeAnimation
            sequence={[
                // Same substring at the start will only be typed out once, initially
                "FAHADSCODE", 1000,
                "FAHAD'SCODE", 1000
            ]}
            wrapper="h1"
            speed={1}
            deletionSpeed={10}
            style={{ fontSize: '1em', display: 'inline-block' }}
            repeat={Infinity}
            preRenderFirstString={true}


        />
    );
};