import { Box, Button, Rating, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ProductCard } from "../components/ProductCard";
import { useFetchProducts } from "../hook/fetchProducts";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const Pharmacy = () => {
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState(null);
  const [rating, setRating]=useState(null);
  const [ratingFilter, setRatingFilter]=useState([]);
  const { loading, error, data } = useFetchProducts(
    "https://ecommerce-json.herokuapp.com/products?category_like=pharmacy",
    page,
    sort,
    ratingFilter
  );

  // console.log(data);
  const handleSort = (type) => {
    if (sort === type) {
      setSort(null);
      return;
    }

    setSort(type);
  };


  const handleRatingFilter=(type)=>{
    if(ratingFilter.includes(type)){
       
        const updatedFilter=[...ratingFilter.filter(el=>el!=type)];
        setRatingFilter(updatedFilter);
    }
   

    setRatingFilter(prev=>[...prev,type]);
  }

//   console.log(ratingFilter)
 
  return (
    <div>
      <div className="sort-buttons">
        <Button
          onClick={() => handleSort("asc")}
          variant={sort !== "asc" ? "contained" : "outlined"}
        >
          Asc
        </Button>
        <Button
          onClick={() => handleSort("desc")}
          variant={sort !== "desc" ? "contained" : "outlined"}
        >
          Desc
        </Button>
      </div>
      <Box
        sx={{
          "& > legend": { mt: 2 },
        }}
      >
        <Typography component="legend">Filter By Rating</Typography>
        <Rating
          name="simple-controlled"
          value={rating}
          onChange={(event, newValue) => {
            setRating(newValue);
            handleRatingFilter(newValue);
          }}
        //   onClick={()=>handleRatingFilter(rating)}
        />
      </Box>

      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>Something Went Wrong</h2>
      ) : (
        data.map((el) => <ProductCard key={el.id} {...el} />)
      )}

      <Box component="div" className="page-buttons">
        <Button
          disabled={page === 1}
          variant="contained"
          onClick={() => setPage((prev) => prev - 1)}
          startIcon={<ArrowBackIosIcon />}
        >
          Prev
        </Button>
        <Button variant="outlined">{page}</Button>
        <Button
          variant="contained"
          onClick={() => setPage((prev) => prev + 1)}
          endIcon={<ArrowForwardIosIcon />}
        >
          Next
        </Button>
      </Box>
    </div>
  );
};
