import { ItemToComplete } from '@/types/items-to-complete';

export const itemsToComplete: ItemToComplete[] = [
  {
    id: 'b91cbe81ee3efefba6b915a7',
    text: 'you have 12 days left on your free trial.',
    redirect_url: '/subscription',
    button_text: 'Start Subscription',
  },
  {
    id: 'b91cbe81ee3efefba6b915a3',
    text: 'Add your bank account prior to sending or recieving payments',
    redirect_url: '/add-bank',
    button_text: 'Add Bank',
  },
  {
    id: 'b91cbe81ee3efefba6b915a32',
    text: 'Add your phone number for account security reason',
    redirect_url: '/verify-phonenumber',
    button_text: 'Verify Number',
  },
  {
    id: 'b91cbe81ee3efefba6b915a35',
    text: 'Add your personal or bussiness address.',
    redirect_url: '/bussiness-address',
    button_text: 'Setup Address',
  }

]

