export default interface IUserContext {
    username: string | React.Dispatch<React.SetStateAction<string>>;
    setUsername: string | React.Dispatch<React.SetStateAction<string>>;
    token: string | React.Dispatch<React.SetStateAction<string>>;
    setToken: string | React.Dispatch<React.SetStateAction<string>>;
}
