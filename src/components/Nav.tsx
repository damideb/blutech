import logo from '../assets/logo.svg'
import search from '../assets/search.svg'
import bell from '../assets/bell-icon.svg'
import doctor from '../assets/doctor-standing-with-folder-stethoscope 1.svg'
import vector from '../assets/Vector.svg'
import { useContext } from 'react'
import { Context } from '../store/Context'
import { StoreContext } from '../typesAndInterface/interface'

export default function Nav() {

    const {products, setSearchedProduct} = useContext(Context) as StoreContext

    const handleSearch =(e: React.ChangeEvent<HTMLInputElement>)=>{
        const value = e.target.value
        
        const result= products?.filter((item)=> item.SKU.toString().includes(value) )
           
        if(result.length>0){
            setSearchedProduct(result)
        }

        else{
            setSearchedProduct([{
                Image_1: '--',
                SKU: 0,
                Name:'--',
                Title:'Not available',
                Description:'Product Not available',
                Brand:'--',
                'Cost Price':0,
                Quantity:0,
                size:'--'
                
            }])  
        }

        if(value===""){
            setSearchedProduct(products)
        }     
    }

  return (
    <nav className='bg-white flex flex-col sm:flex-row gap-5 items-center font-Inter justify-between px-5  p-3 '>
        <div className=' flex items-center'>
            <img src={logo} alt='company-logo' className='w-[205px]'/> 
        </div>

        <div className='flex justify-center sm:justify-between flex-wrap sm:flex-nowrap gap-3 w-[95%] sm:w-[70%] ' >
            <div className='relative'>
                <input placeholder="Search by patients..." type="text" 
                    className='p-2 pl-9 w-[13em]  md:w-[17em] placeholder:text-[#4F5867] text-[0.8rem] sm:text-[0.9rem]  rounded-lg border-[1.5px] border-[#CDCFD4] focus:outline-none '
                    onChange={handleSearch}
                />
                <img src={search} alt='searchIcon' className='absolute top-3 left-2 '/> 
            </div>

            <div className='flex gap-3 sm:gap-7 items-center'>
                <div className='bg-[#F7F6FF] p-1 rounded-full'>

                    <img src={bell} alt='bell-icon' className='w-[24px]'/>
                </div>

                <div className='flex gap-4 items-center'>
                        <img src={doctor} alt='doctor-jpg' className='bg-[#F7F6FF] w-[34px] h-[34px]  rounded-full'/>
             
                    <p className='font-medium'>Deko</p>
                    <img src={vector} alt='dropdown-arrow'/>
                </div>
            </div>
        </div>
    </nav>
  )
}
