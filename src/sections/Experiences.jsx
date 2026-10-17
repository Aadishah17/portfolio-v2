import { Timeline } from "../components/Timeline";
import { experiences } from "../constants";

const Experiences = () => {
  return (
    <section className="w-full scroll-mt-24" id="experiences">
      <Timeline data={experiences} />
    </section>
  );
};

export default Experiences;
