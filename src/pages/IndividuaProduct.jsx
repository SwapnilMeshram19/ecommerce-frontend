import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box} from '@mui/material';
import {Link} from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import axios from 'axios';
export const IndividualProduct =()=>{
    const [productDetails,setProductDetails]=useState({});
    const {imageBase,hex,title,color,price,rating}=productDetails;
    const {id}=useParams();

    useEffect(()=>{
        axios({
            method:"get",
            url:`https://ecommerce-json.herokuapp.com/products/${id}`
        }).then(res=>setProductDetails(res.data))
        .catch(error=>console.log(error))
    },[])

    return(
        <Card sx={{ maxWidth: 345,margin:"auto",marginTop:"10px"}}>
     
      <CardMedia
        component="img"
        height="140"
        image={`${imageBase}/${hex?.slice(1)}`}
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
        <Link to={`/product/${id}`}>
        <Button size="small">View</Button>        
        </Link>
        <Button size="small">ADD TO CART</Button>
      </CardActions>
    </Card>
    )
    

} 