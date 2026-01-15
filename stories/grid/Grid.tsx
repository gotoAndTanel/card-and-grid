import './grid.scss';

export const Grid = ({
    ...props
}) => {
    return (
        <div>
            {props.children}
        </div>
    )
}