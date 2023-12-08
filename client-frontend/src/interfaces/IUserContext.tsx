export default interface IUserContext {
    username: React.Dispatch<SetStateAction<string>>;
    setUsername: React.Dispatch<string>;
    token: React.Dispatch<SetStateAction<string>>;
    setToken: React.Dispatch<string>;
}
