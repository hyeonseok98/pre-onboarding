import { useShoesList } from "@/hooks/useShoes";
import { Shoes } from "@/types/Shoes";

function HomePage() {
  const { data: shoes = [], isLoading: isPending, error } = useShoesList();

  if (isPending) return <p>Loading...</p>;
  if (error) return <p>데이터를 불러오는 도중 에러가 발생했어요...*:</p>;

  return (
    <>
      <section className="w-full h-[300px] bg-red-100">banner</section>
      <div className="grid grid-cols-4 gap-4">
        {shoes?.length > 0 ? (
          shoes.map((shoe: Shoes) => (
            <div className="shoe-item" key={shoe.id}>
              <h3>{shoe.title}</h3>
              <p>{shoe.completed ? "Completed" : "Not Completed"}</p>
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
