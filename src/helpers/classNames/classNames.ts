export function cn(...options: any): string {
    const result = [];
    for (let i = 0; i < options.length; i++) {
        if (typeof options[i] === "string") {
            result.push(options[i]);
        }
        if (typeof options[i] === "object" && !Array.isArray(options[i])) {
            const mods = options[i];
            for (const [key, value] of Object.entries(mods)) {
                if (value) {
                    result.push(key);
                } else {
                    result.push("");
                }
            }
        }
        if (Array.isArray(options[i])) {
            result.push(...options[i]);
        }
    }

    return result.join(" ");
}


// const s = cn( {black: true, red: false, green: true},"block", ["additional", "classes"]);
// console.log(s);
// black  green block additional classes

