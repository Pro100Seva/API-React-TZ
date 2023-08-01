export type User = {
  id: number;
  login: string;
  avatar_url: string;
  followers_url: string;
  organizations_url: string;
  url: string;
  html_url: string;
  repos_url: string;
};

export type State = {
  users: User[];
};
