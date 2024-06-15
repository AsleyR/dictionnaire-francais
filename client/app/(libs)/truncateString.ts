export default function truncateString(string: string, number: number) {
    return (string.length > number) ? string.slice(0, number - 1) + '…' : string;
};