export default function notLongText(text, maxWidth) {
    if (text.length <= maxWidth) {
        return text;
    } else {
        const newText = text.slice(0, maxWidth - 3) + "...";
        return newText;
    }
}