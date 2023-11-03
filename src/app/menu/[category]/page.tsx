import { pizzas } from "@/constants"
import Image from "next/image"
import Link from "next/link"


const CategoryPage = () => {
  return (
    <div className=" flex flex-wrap m-8 md:m-24 lg:m-32">
      {
        pizzas.map((item) => (
          <Link href={`/product/${item.id}`} key={item.id}
           className=" w-full h-[60vh] md:border-r-2 border-b-2 border-red-500 sm:w-1/2 lg:w-1/3 flex flex-col justify-between odd:bg-fuchsia-50 p-4 group"
          >
            {/* image container */}
            {
              item.img && (
                <div className=" relative h-[80%]  object-contain">
                  <Image src={item.img} alt="" fill/>
                </div>
              )
            }
             {/* text container */}
             <div className=" flex items-center justify-between font-bold gap-4">
              <h1 className=" uppercase text-2xl">{item.title}</h1>
              <h2 className=" group-hover:hidden  text-2xl">${item.price}</h2>
              <button className=" hidden group-hover:block uppercase bg-red-500 text-white p-2 rounded-md">Add to Cart</button>
             </div>
          </Link>
        ))
      }
    </div>
  )
}

export default CategoryPage
