const Card = ({ title, onClick, children, info }) => (
    <div className="text-center space-y-4 px-8">
        <div className=" bg-indigo-50  shadow-2xl  shadow-gray-300 rounded-b-lg  rounded-tr-3xl  p-40 ">


        </div>
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className=" max-w-md text-lg text-gray-500   mt-4 mb-2 mx-auto text-center">{info}</p>
    </div>
);

export default Card;
