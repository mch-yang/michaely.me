import Container from "../components/Container";
import ResumeItem from "../components/ResumeItem";

export default function Resume() {
  return (
    <Container
      title="Michael Yang – Resume"
      description="Resume"
    >

    <div className="max-w-6xl mx-auto w-auto mb-8 px-20">
        <h4 className="text-xl font-medium md:text-left text-center text-gray-900 dark:text-gray-100">
          Work Experience
        </h4>

        <ResumeItem
          company="Amazon.com, Inc."
          year="2019 – present"
          text="Data Scientist II"
        />
    </div>

    <div className="max-w-6xl mx-auto w-auto mb-8 px-20">
        <h4 className="text-xl font-medium md:text-left text-center text-gray-900 dark:text-gray-100">
          Education
        </h4>

        <ResumeItem
          company="University of Oxford"
          year="2017 – 2018"
          text="MSc in Statistical Science"
        />
    </div>

    </Container>
  );
}