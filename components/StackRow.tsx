import Container from "./Container";
import { Stack } from "@/types";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";

const StackRow = ({ stack }: { stack: Stack[] }) => {
  return (
    <Container>
      <div className="flex overflow-x-scroll scrollbar-hidden">
        <div className="flex w-fit gap-5 mx-auto">
          {stack.map(({ title, image }, index) => (
            <div
              key={index}
              className="w-24 h-24 flex-shrink-0 filter grayscale hover:grayscale-0 transition-all duration-200 ease-out"
              title={title}
            >
              <Image
                src={urlForImage(image).url()}
                width={128}
                height={128}
                placeholder="blur"
                blurDataURL="images/stack/react.svg"
                alt={title}
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
