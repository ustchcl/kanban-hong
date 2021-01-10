export default abstract class Language {
  // login
  abstract get appName(): string;
  abstract get username(): string;
  abstract get password(): string;  
}