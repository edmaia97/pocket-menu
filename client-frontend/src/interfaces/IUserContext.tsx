export default interface IUserContext {
    username: string | React.Dispatch<React.SetStateAction<string>>;
    setUsername: React.Dispatch<string>;
    token: string | React.Dispatch<React.SetStateAction<string>>;
    setToken: React.Dispatch<string>;
}
