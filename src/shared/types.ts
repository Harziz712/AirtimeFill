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
export interface ServiceType {
  icon: any;
  name: string;
  description: string;
}
export interface LinkType {
  icon: any;
  page: string;
}
