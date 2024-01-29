import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { Onboarding } from '@/types/onboarding';

export const OnBoarding: Onboarding[] = [
  {
    id: 'b91cbe81ee3efefba6b915a7',
    title: 'Vacancy',
    description: '2 units are currently not occupied. Did you want to advertise any of these rental properties to qualified tenants on 30 rental listing websites or invite an existing tenant?',
    redirect_url: '#',
    icon: <AccessAlarmIcon fontSize="small"/>,
    redirect_url_text: "Advertise on invite tenant"
  },
  {
    id: 'b91cbe81ee3efefba6b915a8',
    title: 'Maintenance Instructions',
    description: 'We never want you to have surprises with your maintenance bills. 561 New lots Avenue is currently set up for us to support you with maintenance coordination. Tell us a bit more about your approval thresholds and service pro preferences, before we approve any maintenance work.',
    redirect_url: '#',
    icon: <AccessAlarmIcon fontSize="small"/>,
    redirect_url_text: "Edit settings"
  },
  {
    id: 'b91cbe81ee3efefba6b915a6',
    title: 'Move-In Guide',
    description: 'Let your current and incoming tenants know a bit more about 561 New Lots Avenue. From the utility Provider to where to get mail, setting up the guide once will save a lot of time and make the move-in process for future tenants much easier.',
    redirect_url: '#',
    icon: <AccessAlarmIcon fontSize="small"/>,
    redirect_url_text: "Verify number"
  },

]

