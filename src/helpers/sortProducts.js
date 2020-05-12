export default (choice, products) => {
    const searchedProducts = [...products];
    switch (choice) {
      case "2":
        searchedProducts.sort((a, b) => a.price - b.price);
       
        break;
      case "3":
        searchedProducts.sort((a, b) => b.price - a.price);
       
        break;
      case "4":
        searchedProducts.sort((a, b) => {
          var nameA = a.name.toUpperCase();
          var nameB = b.name.toUpperCase(); 
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
       
        break;

      default:
        break;
    }
    return searchedProducts
  };