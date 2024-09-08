import banner1 from "@/assets/banners/shoes_banner1.jpg";
import { useShoesList } from "@/hooks/useShoes";
import { Shoes } from "@/types/Shoes";

function HomePage() {
  const { data: shoes = [], error } = useShoesList();
  if (error) return <p>데이터를 불러오는 도중 에러가 발생했어요...*:</p>;

  return (
    <>
      <section className="w-full h-[450px] bg-red-100 rounded-lg overflow-hidden">
        <img
          src={banner1}
          alt="banner"
          className="w-full h-full object-cover"
        />
      </section>
      <h2 className="my-10 text-2xl font-bold">전체 상품</h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {shoes?.length > 0 ? (
          shoes.map((shoe: Shoes) => (
            <div className="text-center" key={shoe.id}>
              <div className="flex justify-center items-center w-52 h-52 bg-slate-300 mx-auto" />
              <h3 className="mt-2 line-clamp-2 overflow-hidden text-ellipsis">
                {shoe.title}
              </h3>
            </div>
          ))
        ) : (
          <p>데이터가 없어요...</p>
        )}
      </div>
    </>
  );
}

export default HomePage;
