import 'ldrs/tailChase'
export default function Loader() {
    return (
        <div style={{ minHeight: 'calc(100vh - 350px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            < l-tail-chase
                size="40"
                speed="1.75"
                color="black"
            ></l-tail-chase>
        </div>
    )
}





