import replaceQqnAndQqch from "@/app/(libs)/replaceQqnAndQqch";

export default function VerbeInfoBlockContainer({ header, body }: { header: string, body: string | null }) {
    return (
        <div className="grid grid-rows-2 border border-gray-200 rounded text-xl shadow-sm">
            <div className="p-5">
                {header}
            </div>
            <div className={`font-bold border-t border-gray-200 p-5 ${!body ? "bg-gray-100" : ""}`}>
                {
                    body ? replaceQqnAndQqch(body) : body
                }
            </div>
        </div>
    )
}