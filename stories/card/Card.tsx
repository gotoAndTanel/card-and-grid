import './card.scss';
import {Image, ImageProps} from '@/stories/image/Image';
import {ArrowRight} from '@/stories/icons/ArrowRight';

export interface CardProps {
    title: string,
    excerpt: string,
    price: {
        text: string,
        value: number,
        currency: string
    },
    buttonLabel: string,
    image: ImageProps,
    background?: boolean,
    heading?: 'h1' | 'h2' | 'h3' | 'h4',
    href?: string,
}

export const Card = ({heading = 'h2', buttonLabel = 'Find out more', ...props}: CardProps) => {
    const BEM = [
        'card',
        props.background && 'card--background'
    ]

    const HeadingElement = heading

    return (
        <div className={BEM.join(' ')} {...props}>
            {props.href && (
                <a href={props.href} className='card__link' aria-label={buttonLabel}/>
            )}
            <Image {...props.image}/>
            <div className="card__content">
                <HeadingElement className={'card__title'}>
                    {props.title}
                </HeadingElement>
                <div className={'card__excerpt'}>
                    {props.excerpt}
                </div>
                <div className="card__price">
                    <div className="card__price-text">
                        {props.price.text}
                    </div>
                    <div className="card__price-value h3">
                        {props.price.value}
                        <span className="card-price-currency">
                            {props.price.currency ?? '€'}
                        </span>
                    </div>
                </div>
                <div className="card__cta">
                    {buttonLabel}
                    <ArrowRight class='card__arrow'/>
                </div>
            </div>
        </div>
    )
}