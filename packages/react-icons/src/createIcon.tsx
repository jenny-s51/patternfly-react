import * as React from 'react';
// import '@patternfly/patternfly/base/patternfly-icons.scss';

export enum IconSize {
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl'
}

export const getSizeClass = (size: IconSize | keyof typeof IconSize) => {
  switch (size) {
    case IconSize.sm:
      return 'pf-svg-size-sm';
    case IconSize.md:
      return 'pf-svg-size-md';
    case IconSize.lg:
      return 'pf-svg-size-lg';
    case IconSize.xl:
      return 'pf-svg-size-xl';
    default:
      return 'pf-svg-size-sm';
  }
};

export interface IconDefinition {
  name?: string;
  width: number;
  height: number;
  svgPath: string;
  xOffset?: number;
  yOffset?: number;
}

export interface SVGIconProps extends Omit<React.HTMLProps<SVGElement>, 'size' | 'ref'> {
  title?: string;
}

let currentId = 0;

/**
 * Factory to create Icon class components for consumers
 */
export function createIcon({
  name,
  xOffset = 0,
  yOffset = 0,
  width,
  height,
  svgPath
}: IconDefinition): React.ComponentClass<SVGIconProps> {
  return class SVGIcon extends React.Component<SVGIconProps> {
    static displayName = name;

    id = `icon-title-${currentId++}`;

    render() {
      const { title, ...props } = this.props;

      const hasTitle = Boolean(title);
      const viewBox = [xOffset, yOffset, width, height].join(' ');

      return (
        <svg
          className="pf-svg"
          viewBox={viewBox}
          aria-labelledby={hasTitle ? this.id : null}
          aria-hidden={hasTitle ? null : true}
          role="img"
          {...(props as Omit<React.SVGProps<SVGElement>, 'ref'>)} // Lie.
        >
          {hasTitle && <title id={this.id}>{title}</title>}
          <path d={svgPath} />
        </svg>
      );
    }
  };
}
