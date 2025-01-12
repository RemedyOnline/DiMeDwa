import PropTypes from "prop-types";

const SectionHeading = (props) => {
  return (
    <section>
      <h2 className="text-xl font-bold uppercase md:text-2xl lg:text-3xl">
        {props.heading}
      </h2>
    </section>
  );
};

SectionHeading.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default SectionHeading;
