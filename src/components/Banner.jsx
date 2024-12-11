export default function Banner({ title, subtitle }) {
    return (
        <div className="banner bg-secondary text-white py-4 mb-5">
            <div className="container-lg">
                <h1>{title}</h1>
                <h3 className="text-muted">{subtitle}</h3>
            </div>
        </div>
    )
}