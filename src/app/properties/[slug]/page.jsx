import { getProperty } from '@/app/utils/getProperty';
import '../../css/style.css'
import { properties } from '../../js/properties';

export async function generateStaticParams() {
    return properties.map((property) => ({
        slug: property.slug
    }))
}

export default async function Page({ params }) {
    const property = await getProperty(params.slug);
    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-md-8">
                    <img src={property.imgSrc} alt="Property Image" className="img-fluid" />
                </div>
                <div className="col-md-4 p-5">
                    <h2 className="mb-4">{property.title}</h2>
                    <p><strong>Location:</strong> {property.title}</p>
                    <p><strong>Price:</strong> {property.currency}{property.price} per {property.frequency}</p>
                    <ul className="amenities">
                        <li><i className="icon-bedrooms"></i> {property.bedrooms}</li>
                        <li><i className="icon-bathrooms"></i> {property.bathrooms}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

// export default function Property() {
//     return <Layout>
//         {postData.title}
//         <br />
//         {postData.id}
//         <br />
//         {postData.date}
//     </Layout>;
// }

// export async function getStaticPaths() {
//     const paths = properties.map((property) => {
//         return {
//             params: {
//                 id: property.id,
//                 title: property.title,
//                 locaiton: property.locaiton,
//                 currency: property.currency,
//                 price: property.price,
//                 frequency: property.frequency,
//                 bedrooms: property.bedrooms,
//                 bathrooms: property.bathrooms,
//                 imgSrc: property.imgSrc
//             },
//         };
//     });
//     return {
//         paths,
//         fallback: false,
//     };
// }

// export async function getStaticProps({ params }) {

//     return {
//         props: {
//             params,
//         },
//     };
// }