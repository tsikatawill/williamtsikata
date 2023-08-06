import { StackList } from "@/lib/StackList";
import Image from "next/image";
import Container from "./Container";

const StackRow = () => {
  return (
    <Container>
      <div className="flex overflow-x-scroll scrollbar-hidden">
        <div className="flex w-fit gap-5 mx-auto">
          {StackList.map((item, index) => (
            <div
              className="w-24 h-24 flex-shrink-0 filter grayscale hover:grayscale-0 transition-all duration-200 ease-out"
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
    </Container>
  );
};

export default StackRow;
