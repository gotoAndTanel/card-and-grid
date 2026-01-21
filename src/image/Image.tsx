import './image.scss';
import NextImage from 'next/image';
export interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export const Image = (props: ImageProps) => {
  const BEM = ['image', props.className];

  return (
    <NextImage
      className={BEM.join(' ')}
      src={props.src}
      alt={props.alt}
      unoptimized={true}
      width={props.width}
      height={props.height}
    />
  );
};
