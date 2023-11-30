export function cn(...options: (string | { [key: string]: boolean } | string[])[]): string {
    const classNames: string[] = [];

    for (const option of options) {
        if (typeof option === 'string') {
            classNames.push(option);
        } else if (typeof option === 'object' && !Array.isArray(option)) {
            for (const [className, active] of Object.entries(option as { [key: string]: boolean })) {
                if (active) {
                    classNames.push(className);
                }
            }
        } else if (Array.isArray(option)) {
            classNames.push(...option);
        }
    }

    return classNames.join(' ');
}
