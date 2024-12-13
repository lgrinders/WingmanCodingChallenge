
import { MdOutlineStar, MdStar } from "react-icons/md";
import { IoCart } from "react-icons/io5";
import { Link } from "react-router";

interface ProductCardProps {
  title: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
  img: string;
  id: number;
}

export default function ProductCard({
  title,
  price,
  rating,
  img,
  id,
}: ProductCardProps) {
  return (
    <Link
      to={`product-item/${id}`}
      className="bg-wingman-productcard cursor-pointer text-wingman-textcolor shadow-md hover:shadow-2xl flex flex-col items-center justify-around border-wingman-secondary p-3 lg:p-10 lg xl:max-w-[350px] h-[700px]"
    >
      <img src={img} alt="" className="h-64 object-contain" />
      <h2>{title}</h2>
      <h2 className="font-bold">{`$${price}`}</h2>
      <div className="flex items-center gap-1 justify-center">
        <p>{`${rating.rate}`}</p>
        <div className="flex">
          {[...Array(5)].map((_, index) => {
            return rating.rate > index ? (
              <MdOutlineStar size={25} key={index} />
            ) : (
              <MdStar size={25} key={index} />
            );
          })}
        </div>
        <p>{`(${rating.count})`}</p>
      </div>

      <hr className="h-2 w-full" />
      <button className=" w-full h-32 gap-2 flex items-center justify-center">
        <IoCart size={20} />
        <h2 className="text-lg">ADD TO CART</h2>
      </button>
    </Link>
  );
}


