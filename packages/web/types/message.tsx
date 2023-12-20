export type Message = {
  id:string;
  content: string;
  date: Date;
  avatar: string;
  fullName:string;
  unread?: boolean;
}