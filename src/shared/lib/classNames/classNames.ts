export function cn(...options: (string | { [key: string]: boolean } | string[])[]) {
    if (!options.length) {
        return '';
    }
    const classNames: string[] = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const option of options) {
        if (!option) {
            // eslint-disable-next-line no-continue
            continue;
        }
        if (typeof option === 'string') {
            classNames.push(option);
        } else if (typeof option === 'object' && !Array.isArray(option)) {
            // eslint-disable-next-line max-len,no-restricted-syntax
            for (const [className, active] of Object.entries(option as { [key: string]: boolean })) {
                if (active && className) {
                    classNames.push(className);
                }
            }
        } else if (Array.isArray(option)) {
            const classes = option.filter(Boolean);
            classNames.push(...classes);
        }
    }

    return classNames.join(' ');
}
