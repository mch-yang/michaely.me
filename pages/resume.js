import Container from "../components/Container";
import ResumeItem from "../components/ResumeItem";

export default function Resume() {
  return (
    <Container
      title="Resume – Michael Yang"
      description="Experience"
    >
      <div className="max-w-6xl mx-auto w-auto mb-8 px-20">
          <h4 className="flex mb-2 text-xl font-medium text-gray-900 md:text-xl dark:text-gray-100">
            Work Experience
          </h4>
      </div>

      <ResumeItem
        company="Amazon.com, Inc."
        year="2019 – present"
        text="Data Scientist II"
      />

      <div className="max-w-6xl mx-auto w-auto mb-8 px-20">
          <h4 className="flex mb-2 text-xl font-medium text-gray-900 md:text-xl dark:text-gray-100">
            Education
          </h4>
      </div>

      <ResumeItem
        company="University of Oxford"
        year="2017 – 2018"
        text="MSc in Statistical Science"
      />

    </Container>
  );
}