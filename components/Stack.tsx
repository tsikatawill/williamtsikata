import Container from "./Container";
import SectionLayout from "./SectionLayout";
import StackRow from "./StackRow";

const Stack = () => {
  return (
    <SectionLayout name="stack" title="I build with this stack">
      <Container>
        <StackRow />
      </Container>
    </SectionLayout>
  );
};

export default Stack;
