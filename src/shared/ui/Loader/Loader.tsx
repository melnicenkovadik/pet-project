import { cn } from 'shared/lib/classNames/classNames';
import './Loader.scss';

export enum LoaderSizes {
    small = 'small',
    medium = 'medium',
    large = 'large',
}

interface LoaderProps {
    className?: string;
    size?: LoaderSizes | undefined
}

export const Loader = ({
    className,
    size,
}: LoaderProps) => {
    const loaderSizes = (size?: 'small' | 'medium' | 'large') => {
        switch (size) {
        case LoaderSizes.large:
            return {
                left: [8, 8, 32, 56],
                width: '13px',
                height: '13px',
                top: '33px',
                wrapper: {
                    width: '80px',
                    height: '80px',
                },
            };
        case LoaderSizes.medium:
            return {
                left: [5, 5, 24, 42],
                width: '9px',
                height: '9px',
                top: '22px',
                wrapper: {
                    width: '50px',
                    height: '50px',
                },
            };
        case LoaderSizes.small:
            return {
                left: [5, 5, 8, 16],
                width: '8px',
                height: '8px',
                top: '11px',
                wrapper: {
                    width: '30px',
                    height: '30px',
                },
            };
        default:
            return {
                left: [8, 8, 32, 56],
                width: '13px',
                height: '13px',
                top: '33px',
                wrapper: {
                    width: '80px',
                    height: '80px',
                },
            };
        }
    };
    return (
        <div
            className={cn('lds-ellipsis', {}, [className])}
            style={{
                width: loaderSizes(size).wrapper.width,
                height: loaderSizes(size).wrapper.height,
            }}
        >
            {
                Array(4)
                    .fill(0)
                    .map((_, index) => (
                        <div
                            key={_.toString()}
                            style={{
                                left: loaderSizes(size).left[index],
                                width: loaderSizes(size).width,
                                height: loaderSizes(size).height,
                                top: loaderSizes(size).top,
                            }}
                        />
                    ))
            }
        </div>
    );
};
