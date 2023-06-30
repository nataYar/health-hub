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
      text: 'Food Log',
      icon: <RamenDiningRoundedIcon />,
      link: '/food', 
      subItems: [
        { text: 'Recipes', link: '/food/recipes' },
      ],
    },
    {
      text: 'Fitness Log',
      icon: <FitnessCenterRoundedIcon />,
      link: '/fitness', 
      subItems: [
        { text: 'Exercises', link: '/fitness/exercises' },
       
      ],
    },
    {
      text: 'Health Log',
      icon: <LocalHospitalRoundedIcon />, 
      link: '/health', 
      subItems: [
        { text: 'Symptoms checker', link: '/health/symptoms' },
      ],
    },
    {
      text: 'News',
      icon: <NewspaperRoundedIcon />, 
      link: '/news'
    },
  ];