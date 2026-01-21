import './grid.scss';

export interface ColProps {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

export const Col = ({
  xs = 2,
  sm = 2,
  md = 3,
  lg = 3,
  xl = 3,
  ...props
}: ColProps) => {
  const BEM = [
    'grid-col',
    'grid-col--xs-' + xs,
    'grid-col--sm-' + sm,
    'grid-col--md-' + md,
    'grid-col--lg-' + lg,
    'grid-col--xl-' + xl,
  ];

  return <div className={BEM.join(' ')}>{props.children}</div>;
};

export const Grid = ({ ...props }) => {
  return <div className={'grid'}>{props.children}</div>;
};
