import './grid.scss';

export interface ColProps {
    xs?: number,
    sm?: number,
    md?: number,
    lg?: number,
    xl?: number
}

export const Col = ({
    xs = 1,
    sm = 1,
    md = 1,
    lg = 1,
    xl = 1,
    ...props
}: ColProps) => {
    const BEM = [
        'grid-col',
        'grid-col--xs-' + xs,
        'grid-col--sm-' + sm,
        'grid-col--md-' + md,
        'grid-col--lg-' + lg,
        'grid-col--xl-' + xl,
    ]

    return (
        <div className={BEM.join(' ')} {...props}>
            {props.children}
        </div>
    )
}

export interface GridProps {

}

export const Grid = ({
    ...props
}) => {
    return (
        <div className={'grid'} {...props}>
            {props.children}
        </div>
    )
}