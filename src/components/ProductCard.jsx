import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

export const ProductCard=({title, imageBase,hex,color,rating,price})=>{
  return (
    <Card sx={{ maxWidth: 345,margin:"auto",marginTop:"10px"}}>
     
      <CardMedia
        component="img"
        height="140"
        image={`${imageBase}/${hex.slice(1)}`}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {color} {title}
        </Typography>
        <Box className='flex_between'>
          <Typography className='price' gutterBottom variant="body" component="div">
          ₹ {price}

          </Typography>
          <Typography  className="rating-card" gutterBottom variant="body" component="div">
          {rating}
          <StarIcon fontSize='12px' sx={{color:"orange"}}/>
          </Typography>

        </Box>
      </CardContent>
      <CardActions>
        <Button size="small">View</Button>
      </CardActions>
    </Card>
  );
}
