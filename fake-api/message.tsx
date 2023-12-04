import { formatDistanceToNowStrict,subHours,subMinutes } from 'date-fns';
import { Message } from '@/types/message';
export const messages: Message[] = [
  {
    id: 'b91cbe81ee3efefba6b915a7',
    content: 'Hello, we spoke earlier on the phone',
    date: subMinutes(new Date(), 2),
    avatar: '/static/mock-images/avatars/avatar-alcides_antonio.png',
    fullName: 'Mohammedamin Muktar',
    unread: true
  },
  {
    id: 'de0eb1ac517aae1aa57c0b7e',
    content: 'Is the job still available?',
    date: subMinutes(new Date(), 56),
    avatar: '/static/mock-images/avatars/avatar-marcus_finn.png',
    fullName: 'Kalid Muktar',
    unread: false
  },
  {
    id: '38e2b0942c90d0ad724e6f40',
    content: 'What is a screening task? I’d like to',
    date: subHours(subMinutes(new Date(), 23), 3),
    avatar: '/static/mock-images/avatars/avatar-carson_darrin.png',
    fullName: 'Abdisa Tsegaye',
    unread: false
  },
  {
    id: '467505f3356f25a69f4c4890',
    content: 'Still waiting for feedback',
    date: subHours(subMinutes(new Date(), 6), 8),
    avatar: '/static/mock-images/avatars/avatar-fran_perez.png',
    fullName: 'Fran Perez',
    unread: false
  },
  {
    id: '7e6af808e801a8361ce4cf8b',
    content: 'Need more information about current campaigns',
    date: subHours(subMinutes(new Date(), 18), 10),
    avatar: '/static/mock-images/avatars/avatar-jie_yan_song.png',
    fullName: 'Bruce lee',
    unread: false
  }
];