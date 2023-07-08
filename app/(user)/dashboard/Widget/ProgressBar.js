import Box from '@mui/material/Box';
import { extraColors } from '@/app/theme/colors';

const ProgressBar = ({ percentage }) => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '20px',
        border: '1px solid',
        borderColor:'neutral.300',
        borderRadius: '8px',
        backgroundColor: 'white',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          width: `${percentage}%`,
          height: '100%',
          backgroundColor: 'extraColors.green',
        }}
      />
    </Box>
  );
};

export default ProgressBar;
