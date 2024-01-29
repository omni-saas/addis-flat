import { PropertySetup } from '@/types/property-setup';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';


export const propertySetup: PropertySetup[] = [
  {
    id: 'b91cbe81ee3efefba6b915a7',
    title: 'Subscription',
    description: 'Let\'s make this official! You have 12 days left on your free trial. Upgrade to a subscription to avoid any disrption in using our services.',
    redirect_url: '/dashboard/subscription',
    // icon: <CurrencyExchangeIcon fontSize="small"/>,
    redirect_url_text: "start subscription"
  },
  {
    id: 'b91cbe81ee3efefba6b915a8',
    title: 'Profile',
    description: 'Help us tailor Addis-flat to your specific needs by telling us a bit more about you as a user.',
    redirect_url: '#',
    icon: <AccessAlarmIcon fontSize="small"/>,
    redirect_url_text: "Edit settings"
  },
  {
    id: 'b91cbe81ee3efefba6b915a6',
    title: 'Phone Verification',
    description: 'Certain features are disabled until we can verify your phone number for account security reasons.',
    redirect_url: '#',
    // icon: <CurrencyExchangeIcon fontSize="small"/>,
    redirect_url_text: "Verify number"
  },
  {
    id: 'b91cbe81ee3efefba6b915a5',
    title: 'Bank Setup',
    description: 'A bank account is used to collect rent and to send/recieve money from otherusers. AddissFlat has bank level encryption security with your informarion. Please set up your bank account in advance of sending or recieving payments.',
    redirect_url: '#',
    // icon: <CurrencyExchangeIcon fontSize="small"/>,
    redirect_url_text: "Setup bank account"
  },
  {
    id: 'b91cbe81ee3efefba6b915a4',
    title: 'Personal Address',
    description: 'Don\'t worry, we never share this information with tenants. Your address is used to confirm yout identity for the Credit Bureau\'s tenant screening and for your bank account.',
    redirect_url: '#',
    icon: <AccessAlarmIcon fontSize="small"/>,
    redirect_url_text: "Setup address"
  },
]

