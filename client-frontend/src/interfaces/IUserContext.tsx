export default interface IUserContext {
    username: string | React.Dispatch<React.SetStateAction<string>>;
    setUsername: React.Dispatch<React.SetStateAction<string>>;
    token: string | React.Dispatch<React.SetStateAction<string>>;
    setToken: React.Dispatch<React.SetStateAction<string>>;
}
