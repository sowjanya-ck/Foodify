import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

const About = () =>{
    return (
            
            

            <div className="bg-gray-100 py-12">
                <div className="container mx-auto px-6">
                    {/* Header */}
                    {/* <UserContext.Consumer>
                        {
                            ({loggedUser}) => <h3>{loggedUser}</h3>
                        }
                    </UserContext.Consumer> */}
                    <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
                    <p className="mt-4 text-gray-600">
                        Delivering delicious food to your doorstep with love and care.
                    </p>
                    </div>

                    {/* Our Story Section */}
                    <div className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Founded in 2020, FoodDelivery started with a mission to bring fresh and delicious meals to people who prefer
                        the convenience of home dining. We partner with top restaurants and local chefs to offer a variety of cuisines
                        that cater to all taste buds. From humble beginnings, we've grown into a trusted platform loved by food
                        enthusiasts across the city.
                    </p>
                    </div>

                    {/* Our Mission Section */}
                    <div className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
                    <p className="text-gray-700 leading-relaxed">
                        To make quality food accessible and affordable to everyone, while supporting local restaurants and
                        contributing to a sustainable food ecosystem.
                    </p>
                    </div>

                    {/* Core Values Section */}
                    <div className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Core Values</h2>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>Quality: We prioritize high-quality ingredients and reliable service.</li>
                        <li>Customer-Centric: Customer satisfaction is our top priority.</li>
                        <li>Integrity: We value transparency and honesty in our operations.</li>
                        <li>Sustainability: We aim to minimize our environmental footprint.</li>
                    </ul>
                    </div>

                    {/* Meet Our Team Section */}
                    <div className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Meet Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Team Member"
                            className="w-32 h-32 mx-auto rounded-full mb-4"
                        />
                        <h3 className="text-xl font-bold text-gray-800">John Doe</h3>
                        <p className="text-gray-600">CEO & Founder</p>
                        </div>
                        <div className="text-center">
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Team Member"
                            className="w-32 h-32 mx-auto rounded-full mb-4"
                        />
                        <h3 className="text-xl font-bold text-gray-800">Jane Smith</h3>
                        <p className="text-gray-600">Head of Operations</p>
                        </div>
                        <div className="text-center">
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Team Member"
                            className="w-32 h-32 mx-auto rounded-full mb-4"
                        />
                        <h3 className="text-xl font-bold text-gray-800">Mike Johnson</h3>
                        <p className="text-gray-600">Marketing Lead</p>
                        </div>
                    </div>
                    </div>

                    {/* Testimonials Section */}
                    <div className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">What Our Customers Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                        <p className="text-gray-700 mb-4">"FoodDelivery has completely changed the way I enjoy food at home. The meals are fresh, delicious, and always delivered on time!"</p>
                        <p className="text-gray-500 text-sm">- Emily R.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                        <p className="text-gray-700 mb-4">"I love the variety of cuisines available. It's like having all my favorite restaurants in one place!"</p>
                        <p className="text-gray-500 text-sm">- Mark T.</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
           

        
    )
}

export default About;