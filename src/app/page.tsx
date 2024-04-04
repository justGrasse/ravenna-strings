import Image from "next/image";
import { TextContainer, Title } from "ravenna/app/components/styled";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <TextContainer>
        <Title>Welcome to the Ravenna String Orchestras!</Title>
        <br/>
      </TextContainer>
    </main>
  );
}

