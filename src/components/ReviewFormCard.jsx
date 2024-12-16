export default function ReviewFormCard() {
    function HandleFormSubmit(e) {
        e.preventDefault()
    }
    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <form onSubmit={HandleFormSubmit}>

                    </form>
                </div>
            </div>
        </div>
    )
}