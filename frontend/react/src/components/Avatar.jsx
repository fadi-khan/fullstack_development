export const Avatar = ({rest}) => {
    return (

        <img className={`${rest}    rounded-full ring-2 ring-gray-300 dark:ring-green-800`}
             src={"https://avatars.githubusercontent.com/u/110169794?v=4"}
             alt="Bordered avatar"/>

    )
}