import RamenDiningRoundedIcon from '@mui/icons-material/RamenDiningRounded';
import FitnessCenterRoundedIcon from '@mui/icons-material/FitnessCenterRounded';
import LocalHospitalRoundedIcon from '@mui/icons-material/LocalHospitalRounded';
import NewspaperRoundedIcon from '@mui/icons-material/NewspaperRounded';
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import EmojiEmotionsRoundedIcon from "@mui/icons-material/EmojiEmotionsRounded";

export const topNavItems = [
  {
    text: 'Home',
    icon: <DashboardRoundedIcon />,
    link: '/' 
  },
  {
    text: 'Saved',
    icon: <StarRoundedIcon/>,
    link: '/saved' 
  },
  {
    text: 'Recommended',
    icon: <EmojiEmotionsRoundedIcon />,
    link: '/recommended' 
  }
]

export const navItems = [
    {
      text: 'Food',
      icon: <RamenDiningRoundedIcon />,
      link: '/food', 
      subItems: [
        { text: 'Sub-item 1-1', link: '/food/subitem1-1' },
        { text: 'Sub-item 1-2', link: '/food/subitem1-2' },
        { text: 'Sub-item 1-3', link: '/food/subitem1-3' },
      ],
    },
    {
      text: 'Fitness',
      icon: <FitnessCenterRoundedIcon />,
      link: '/fitness', 
      subItems: [
        { text: 'Sub-item 2-1', link: '/fitness/subitem2-1' },
        { text: 'Sub-item 2-2', link: '/fitness/subitem2-2' },
        { text: 'Sub-item 2-3', link: '/fitness/subitem2-3' },
      ],
    },
    {
      text: 'Health',
      icon: <LocalHospitalRoundedIcon />, 
      link: '/health', 
      subItems: [
        { text: 'Sub-item 3-1', link: '/health/subitem3-1' },
        { text: 'Sub-item 3-2', link: '/health/subitem3-2' },
        { text: 'Sub-item 3-3', link: '/health/subitem3-3' },
      ],
    },
    {
      text: 'News',
      icon: <NewspaperRoundedIcon />, 
      link: '/news', 
      subItems: [
        { text: 'Sub-item 4-1', link: '/news/subitem4-1' },
        { text: 'Sub-item 4-2', link: '/news/subitem4-2' },
        { text: 'Sub-item 4-3', link: '/news/subitem4-3' },
      ],
    },
  ];