import './image.scss';
export interface ImageProps {
    src: string,
    alt: string,
}

export const Image = (props: ImageProps) => {
    const BEM = ['image']

    return (
        <img
            className={BEM.join(' ')}
            src={props.src}
            alt={props.alt}
        />
    );
}