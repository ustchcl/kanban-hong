import Language from "./Language";

export default class LangZh extends Language {
  get appName(): string { return "KanBan - Hong" }
  get username(): string { return "用户名" }
  get password(): string { return "密码" }
}