import { cn } from 'shared/lib/classNames/classNames';
import React, {
    InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    autofocus?: boolean;
    disabled?: boolean;
}

function calcSymbolWidthInPx(symbol: string) {
    const span = document.createElement('span');
    span.style.fontSize = '15px';
    span.style.fontFamily = 'Arial, sans-serif';
    span.style.display = 'inline-block';
    span.style.visibility = 'hidden';
    span.innerHTML = symbol;
    document.body.appendChild(span);
    const width = span.offsetWidth;
    document.body.removeChild(span);
    return width;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autofocus,
        ...otherProps
    } = props;
    const ref = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autofocus]);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        const input = ref.current;
        if (input) {
            const inputVal = input.value;
            const cursorPos = input.selectionStart || 0;
            const currentSymbol = inputVal[cursorPos - 1];
            const currentSymbolWidth = calcSymbolWidthInPx(currentSymbol);
            const allSymbolsWidth = calcSymbolWidthInPx(inputVal);
            const caretPosition = allSymbolsWidth + currentSymbolWidth;
            const inputWidth = input.offsetWidth;
            const caretPositionValue = (inputWidth - 10) < caretPosition
                ? inputWidth
                : caretPosition - 10;
            setCaretPosition(input.value.length !== 0 ? caretPositionValue : 0);
        }
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const onSelect = (e: any) => {
        const input = ref.current;
        if (input) {
            const inputVal = input.value;
            const cursorPos = input.selectionStart || 0;
            const symbolsBeforeCursor = inputVal.slice(0, cursorPos);
            const currentSymbolWidth = calcSymbolWidthInPx(symbolsBeforeCursor);
            const inputWidth = input.offsetWidth;
            const caretPositionValue = (inputWidth) < currentSymbolWidth
                ? inputWidth
                : currentSymbolWidth;
            setCaretPosition(input.value.length !== 0 ? caretPositionValue : 0);
        }
    };

    return (
        <div className={cn(cls.InputWrapper, {}, [className])}>
            {placeholder && (
                <div
                    className={
                        cn(cls.placeholder, {
                            [cls.placeholderFocused]: isFocused,
                            [cls.placeholderWithValue]: value !== '',
                            [cls.placeholderDisabled]: otherProps.disabled,
                        })
                    }
                >
                    {placeholder}
                    {' '}
                    <span>{'>'}</span>
                </div>
            )}
            <div className={
                cn(cls.inputWrapper, {
                    [cls.inputWrapperFocused]: isFocused,
                    [cls.inputWrapperDisabled]: otherProps.disabled,
                })
            }
            >
                <input
                    ref={ref}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    className={cls.input}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    {...otherProps}
                />
                {isFocused && (
                    <span
                        className={cls.caret}
                        style={{ left: `${caretPosition}px` }}
                    />
                )}
            </div>
        </div>
    );
});
