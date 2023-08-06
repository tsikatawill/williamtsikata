import { StackList } from "@/lib/StackList";
import Image from "next/image";

const StackRow = () => {
  return (
    <>
      <div className="w-full overflow-x-scroll scrollbar-hidden">
        <div className="flex gap-5 justify-center">
          {StackList.map((item, index) => (
            <div
              className="h-24 w-24 filter grayscale hover:grayscale-0 transition-all duration-200 ease-out  grid place-content-center flex-shrink-0"
              key={index}
              title={item.name}
            >
              <Image
                src={item.image}
                width={128}
                height={128}
                alt={item.name}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="w-20 block md:hidden rounded-full mx-auto h-2 animate-to-fro bg-primary mt-3"></div>
    </>
  );
};

export default StackRow;
