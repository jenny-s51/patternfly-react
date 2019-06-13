import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import { AngleRightIcon } from '@patternfly/react-icons';
import styles from '@patternfly/react-styles/css/components/Accordion/accordion';
import { Accordion } from '../Accordion';
import { ApplicationLauncherPosition } from '../ApplicationLauncher/applicationLauncherConstants';

export const HeadingLevelTypes = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6'
};

const AccordionToggle = ({ className, headingLevel, id, isExpanded, children, ...props }) => {
  const HeadingLevel = HeadingLevelTypes[headingLevel];

  return (
    <dt>
      <HeadingLevel>
        <button
          id={id}
          className={css(styles.accordionToggle, isExpanded && styles.modifiers.expanded, className)}
          {...props}
          variant="plain"
          aria-expanded={isExpanded}
        >
          <span className={css(styles.accordionToggleText)}>{children}</span>
          <AngleRightIcon className={css(styles.accordionToggleIcon)} />
        </button>
      </HeadingLevel>
    </dt>
  );
};

AccordionToggle.propTypes = {
  /** Content rendered inside the Accordion toggle */
  children: PropTypes.node,
  /** Additional classes added to the Accordion Toggle */
  className: PropTypes.string,
  /** Flag to show if the expanded content of the Accordion item is visible */
  isExpanded: PropTypes.bool,
  /** Identify the Accordion toggle number */
  id: PropTypes.string.isRequired,
  /** Allows user to specify heading level */
  headingLevel: PropTypes.oneOf(Object.values(HeadingLevelTypes)),
  /** Additional props are spread to the container <dt> */
  '': PropTypes.any // eslint-disable-line react/require-default-props
};

AccordionToggle.defaultProps = {
  className: '',
  children: null,
  headingLevel: 'h1',
  isExpanded: false
};

export default AccordionToggle;
