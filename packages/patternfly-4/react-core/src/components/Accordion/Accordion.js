import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Accordion/accordion';

export const AccordionContext = React.createContext({ headingLevel: 'h3' });

export const HeadingLevelTypes = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6'
};

const Accordion = ({ children, className, headingLevel, 'aria-label': ariaLabel, ...props }) => {
  const HeadingLevel = HeadingLevelTypes[headingLevel];

  return (
    <dl className={css(styles.accordion, className)} aria-label={ariaLabel} {...props}>
      <AccordionContext.Provider value={{ HeadingLevel }}>{children}</AccordionContext.Provider>
    </dl>
  );
};

Accordion.propTypes = {
  /** Content rendered inside the Accordion */
  children: PropTypes.node,
  /** Additional classes added to the Accordion */
  className: PropTypes.string,
  /** Allows user to specify heading level */
  headingLevel: PropTypes.oneOf(Object.values(HeadingLevelTypes)),
  /** Adds accessible text to the Accordion */
  'aria-label': PropTypes.string,
  /** Additional props are spread to the container <dl> */
  '': PropTypes.any // eslint-disable-line react/require-default-props
};

Accordion.defaultProps = {
  children: null,
  className: '',
  headingLevel: 'h3',
  'aria-label': ''
};

export default Accordion;
