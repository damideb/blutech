import { useContext, useEffect } from "react";
import { Context } from "../store/Context";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import box from '../assets/box.svg'
import { Product } from "../typesAndInterface/types";
import { StoreContext } from "../typesAndInterface/interface";


export default function TableList() {

  const {getProducts, loading, searchedProduct} = useContext(Context) as StoreContext

  
  useEffect(()=>{

    getProducts()
  },[])


    const headingData = [
        "S/N",
        "Image",
        "SKU",
        "Name",
        "Title",
        "Description",
        "Brand",
        "Cost Price",
        "Quantity",
        "Size"
    ];

 


  return (
    <div className=" w-[95%] mx-auto my-[3em]">
      <h2 className="text-[1.2rem] m-5 font-Inter font-medium">Department List</h2>
 

      {loading ? (
            <Skeleton
              count={10}
              width="100%"
              height={40}
              highlightColor="white"
              className=""
              
            />  

        ) :
        <div className="w-full overflow-auto">
          
          <table className="w-full p-5  mt-10 border-none border-spacing-0  ">
            <thead className=" bg-[#F0F4FE]  font-light">
                <tr className=" font-light">
                  <th className="">
                    <img src={box} alt="box-icon" className=" min-w-[14px] w-[20px]"/>
                    </th>
                  {headingData.map((item, index) => (
                    <th key={index} className="font-[600] text-nowrap py-4 text-[#595959]">
                      {item} 
                    </th>
                  ))}
                </tr>        
            </thead>
            <tbody>
                  <tr className=" ">
                    <td></td>
                </tr>
            </tbody>
                              
            <tbody className=" bg-white shadow-lg">
            
                {searchedProduct?.map((item:Product, index: number) => (
                  <tr key={item.SKU} className="border-[#CDCFD4] border-b  text-[#262626]  ">
                      <td>
                        <img src={box} alt="box-icon" className="min-w-[14px] w-[15px]" />
                      </td>
                      <td>{index}.</td>
                      <td>
                        <img src={item.Image_1} alt="product-photo" className="  w-[60px] h-[40px] min-w-[40px]  object-cover"/>
                      </td>
                      <td>{item.SKU} </td>
                      <td>{item.Name}</td>
                      <td>{item.Title}</td>
                      <td>{item.Description}</td>
                      <td className=" text-nowrap">{item.Brand}</td>
                      <td>{item['Cost Price']}</td>
                      <td>{item.Quantity}</td>
                      <td className=" text-nowrap">{item.size}</td>
                  </tr>
                ))}
            </tbody>
            
          </table>
      </div>

}
    </div>
  )
}
