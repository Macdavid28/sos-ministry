import { Link } from 'react-router-dom';
const card = [
    {
        id: 1,
        name: '24/7 Support',
        desc: 'Always online to help you',
        image: firstImage
    },
    {
        id: 2,
        name: 'Secure Payments',
        desc: 'Pay your semesters fast & secure',
        image: secondImage
    },
{
        id: 2,
        name: 'Online Lectures',
        desc: 'Study in real time, review later',
        image: thirdImage
    },

]

function Carosel() {
    return (
        <Container >
            <div className='d-flex flex-column flex-lg-row align-items-center justify-content-center mx-auto' style={{ maxWidth: '100%' }}>
                <div className='text-center text-lg-right mb-4 mb-lg-0 mr-lg-4'>
                    <div className='hero-text'>
                        A virtual university, <br />with real degrees
                    </div>
                    <p className='hero-text2'>
                        Laspotech is an accredited virtual university built by top professors from Harvard, Stanford, MIT, and many more. The students at Laspotech are welcome to study at their own pace.
                    </p>
                    <div className='d-flex flex-column flex-lg-row align-items-center justify-content-center'>
                        <Link to='/courses'>
29
 <Button variant="outline-success" className='mb-2 mb-lg-0 mr-lg-2'>
                                Check our courses
                            </Button>
                        </Link>
                        <Link to='/GPcalculator'>
                            <Button variant="outline-success">
                                Calculate Your GP
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className='text-center'>
                    <img src={Photo} style={{ maxWidth: '100%', height: 'auto' }} alt="University Photo" />
                </div>
            </div>


            <div className='d-block d-lg-flex flex-wrap justify-content-between align-items-center mt-5'>
                {card.map((service) => (
                    <div key={service.id} className='mb-4 mx-lg-2 text-center'>
                        <div>
                            <img src={service.image} alt={service.name} />
                        </div>
30
                        <div className='mt-2'>
                            <div className='service-name'>{service.name}</div>
                            <div className='service-desc'>{service.desc}</div>
                        </div>
                    </div>
                ))}
            </div>

        </Container>

    );
}

export default Carosel;
