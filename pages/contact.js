import Container from "../components/Container";
import ContactCard from "../components/ContactCard";

export default function Contact() {
  return (
    <Container>
      <div className="flex flex-col w-full grow justify-center max-w-2xl mx-auto pb-16">
        <h1 className="font-bold text-3xl sm:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Contact
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Feel free to get in touch using one of the methods below – I&apos;m always up for a chat! {' '}
        </p>
        <ContactCard />
      </div>
    </Container>
  );
}