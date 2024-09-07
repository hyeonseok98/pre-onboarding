import { useShoesList } from "@/hooks/useShoes";
import { Shoes } from "@/types/Shoes";

function HomePage() {
  const { data: shoes = [], isLoading: isPending, error } = useShoesList();

  if (isPending) return <p>Loading...</p>;
  if (error) return <p>Error loading shoes data</p>;

  console.log(shoes);

  return (
    <>
      <section className="w-full h-[300px] bg-red-100">banner</section>
      <div className="grid grid-cols-4 gap-4">
        {shoes?.length > 0 ? (
          shoes.map((shoe: Shoes) => (
            <div className="shoe-item" key={shoe.id}>
              {/* 이미지 대신 title과 completed 상태를 출력 */}
              <h3>{shoe.title}</h3>
              <p>{shoe.completed ? "Completed" : "Not Completed"}</p>
            </div>
          ))
        ) : (
          <p>No shoes available</p>
        )}
      </div>
    </>
  );
}

export default HomePage;
