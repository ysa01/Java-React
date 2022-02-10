
import axios from "axios";
export default  class ProcuctService {
    
      getProducts(){
        
        return axios.get("http://localhost:8080/api/products/getall");
    }

}