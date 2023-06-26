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
    link: '/dashboard' 
  },
  {
    text: ' Favorites',
    icon: <StarRoundedIcon/>,
    link: '/favorites' 
  },
  {
    text: 'Recommended',
    icon: <EmojiEmotionsRoundedIcon />,
    link: '/recommended' 
  }
]

export const navItems = [
    {
      text: 'Food / Log',
      icon: <RamenDiningRoundedIcon />,
      link: '/food', 
      subItems: [
        // { text: 'food log', link: '/health/food_log' },
        { text: 'Calories', link: '/food/calculate' },
        { text: 'Sub-item 1-3', link: '/food/subitem1-3' },
      ],
    },
    {
      text: 'Fitness / Log',
      icon: <FitnessCenterRoundedIcon />,
      link: '/fitness', 
      subItems: [
        { text: 'Exercise', link: '/fitness/exercise' },
        { text: 'Sub-item 2-2', link: '/fitness/subitem2-2' },
        { text: 'Sub-item 2-3', link: '/fitness/subitem2-3' },
      ],
    },
    {
      text: 'Health / Log',
      icon: <LocalHospitalRoundedIcon />, 
      link: '/health', 
      subItems: [
        
        { text: 'Sub-item 3-2', link: '/health/subitem3-2' },
        { text: 'Symptoms checker', link: '/health/symptoms' },
      ],
    },
    {
      text: 'News',
      icon: <NewspaperRoundedIcon />, 
      link: '/news'
    },
  ];