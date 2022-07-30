export const getProductCount=(cart, id)=>{
    return cart.find(el=>+el?.id===+id)?.count||0;
  }