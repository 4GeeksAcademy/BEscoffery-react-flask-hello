export const ContactCard = ({name, address, phone, email}) => {
    return (
        <div>
            <div>
                <div className="col-6">
                    <img className="card-photo" src="https://avatar.iran.liara.run/public/57"/>
                    <div className="card-info">
                        <h1>{name}</h1>
                        <h2>{address}</h2>
                        <h3>{phone}</h3>
                        <h4>{email}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}