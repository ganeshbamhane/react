import { PropTypes } from "prop-types";

export const course = PropTypes.shape({
  title: PropTypes.string.isRequired,
  authorId: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired
});
