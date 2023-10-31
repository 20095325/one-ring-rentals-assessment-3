//const app = document.getElementById('featured-properties');

function Details(props) {
    return (
        <a href="properties-detail.html">
            <h3>{props.title}</h3>
            <span className="location">{props.location}</span>
        </a>
    )
}
function Image(props) {
    return (
        <div className="image">
            <Details title={props.title} location={props.location} />
            <img src={props.imgSrc} alt="" />
        </div>
    )
}
function Price(props) {
    return (
        <div className="price">
            <span>{props.currency}{props.price}</span>
            <p>{`per ${props.frequency}`}</p>
        </div>
    )
}
function Amenities(props) {
    return (
        <ul className="amenities">
            <li><i className="icon-bedrooms"></i> {props.bedrooms}</li>
            <li><i className="icon-bathrooms"></i> {props.bathrooms}</li>
        </ul>
    )
}
function Property(props) {
    return (
        <div className="item col-md-4">
            <Image imgSrc={props.imgSrc} title={props.title} location={props.location} />
            <Price currency={props.currency} price={props.price} frequency={props.frequency} />
            <Amenities bedrooms={props.bedrooms} bathrooms={props.bathrooms} />
        </div>
    )
}
export default function FeatProperties(props) {
    return (
        props.properties.map((property) => (
            <Property key={property.id} imgSrc={property.imgSrc} title={property.title} location={property.location}
                currency={property.currency} price={property.price} frequency={property.frequency}
                bedrooms={property.bedrooms} bathrooms={property.bathrooms} />
        ))
    );
}

/*ReactDOM.render(<FeatProperties properties={[{
    "id": 1,
    "title": 'Luxury Apartment with great views',
    "locaiton": 'Upper East Side, New York',
    "currency": '$',
    "price": 950,
    "frequency": 'night',
    "bedrooms": 4,
    "bathrooms": 3,
    "imgSrc": 'http://placehold.it/760x670'
}, {
    "id": 2,
    "title": 'Stunning Villa with 5 bedrooms',
    "locaiton": 'Miami Beach, Florida',
    "currency": '$',
    "price": 1300,
    "frequency": 'night',
    "bedrooms": 5,
    "bathrooms": 2,
    "imgSrc": 'http://placehold.it/760x670'
}, {
    "id": 3,
    "title": 'Recent construction with 3 bedrooms',
    "locaiton": 'Park Slope, New York',
    "currency": '$',
    "price": 560,
    "frequency": 'night',
    "bedrooms": 3,
    "bathrooms": 2,
    "imgSrc": 'http://placehold.it/760x670'
}, {
    "id": 4,
    "title": 'Modern construction with parking space',
    "locaiton": 'Midtown, New York',
    "currency": '$',
    "price": 85,
    "frequency": 'night',
    "bedrooms": 1,
    "bathrooms": 2,
    "imgSrc": 'http://placehold.it/760x670'
}, {
    "id": 5,
    "title": 'Single Family Townhouse',
    "locaiton": 'Cobble Hill, New York',
    "currency": '$',
    "price": 840,
    "frequency": 'night',
    "bedrooms": 2,
    "bathrooms": 2,
    "imgSrc": 'http://placehold.it/760x670'
}, {
    "id": 6,
    "title": '3 bedroom villa with garage for rent',
    "locaiton": 'Bal Harbour, Florida',
    "currency": '$',
    "price": 150,
    "frequency": 'night',
    "bedrooms": 3,
    "bathrooms": 2,
    "imgSrc": 'http://placehold.it/760x670'
}]} />, app);*/
