
import axios from "axios";
export default  class ProcuctService {
    
      getProducts(){
        
        return axios.get("http://localhost:8080/api/products/getall");
    }
    getByProductName(id){//2 gün uğraştım cross origin hatası dedi ama id=[object%20Object] böyle gözüküyor çünkü product detaildan obje olarak geliyor bizim bunu çözümleyip urle parametre olarak eklememiz gerekiyor. 
        
      return axios.get(`http://localhost:8080/api/products/getById?id=${id}`); // (``) ----> bu parantez içinde prametreler $ işaretle çağırılır

  }

}