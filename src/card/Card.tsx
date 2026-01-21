import './card.scss';
import { ArrowRight } from '@/src/icons/ArrowRight';
import { Image, ImageProps } from '@/src/image/Image';

export interface CardProps {
  title: string;
  excerpt?: string;
  price: {
    text: string;
    value: number;
    currency?: string;
  };
  buttonLabel: string;
  image: ImageProps;
  background?: boolean;
  heading?: 'h1' | 'h2' | 'h3' | 'h4';
  href?: string;
}

export const Card = ({
  heading = 'h2',
  buttonLabel = 'Find out more',
  ...props
}: CardProps) => {
  const BEM = ['card', props.background && 'card--background'];

  const HeadingElement = heading;

  return (
    <div className={BEM.join(' ')}>
      {props.href && (
        <a href={props.href} className="card__link" aria-label={buttonLabel} />
      )}
      <Image
        src={props.image.src}
        alt={props.image.alt}
        width={1600}
        height={900}
      />
      <div className="card__content">
        <HeadingElement className={'card__title h2'}>
          {props.title}
        </HeadingElement>
        {props.excerpt && (
          <div className={'card__excerpt'}>{props.excerpt}</div>
        )}
        {props.price && (
          <div className="card__price">
            <div className="card__price-text">{props.price.text}</div>
            <div className="card__price-value h3">
              {props.price.value}
              <span className="card-price-currency">
                {props.price.currency ?? '€'}
              </span>
            </div>
          </div>
        )}
        {props.href && (
          <div className="card__cta">
            {buttonLabel}
            <ArrowRight className={'card__arrow'} />
          </div>
        )}
      </div>
    </div>
  );
};
