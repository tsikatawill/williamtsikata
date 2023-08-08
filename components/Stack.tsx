import { getStack } from "@/sanity/queries";
import SectionLayout from "./SectionLayout";
import StackRow from "./StackRow";

const Stack = async () => {
  const stack = await getStack();

  return (
    <SectionLayout name="stack" title="I build with this stack">
      {stack.length > 0 && <StackRow stack={stack} />}
    </SectionLayout>
  );
};

export default Stack;
