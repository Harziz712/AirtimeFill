export enum SelectedPage {
  Dashboard = "dashboard",
  Services = "services",
  Transactions = "transaction",
  EPin = "epin",
  Referrals = "referral",
  Settings = "settings",
  GetHelp = "gethelp",
  Logout = "logout",
}
export interface LinkType {
  icon: any;
  page: string;
}
