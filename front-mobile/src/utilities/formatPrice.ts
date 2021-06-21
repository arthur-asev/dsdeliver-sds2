import 'intl';
import 'intl/locale-data/jsonp/pt-BR'; 

export const formatPrice = (price: number) => {
    const formatter = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    });
  
    return formatter.format(price);
  };
  