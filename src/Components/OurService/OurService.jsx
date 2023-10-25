import { FaHome, FaUndo, FaLifeRing, FaShieldAlt } from "react-icons/fa";

const OurService = () => {
  return (
    <div className='py-8'>
      <div className='container mx-auto p-4'>
        <h2 className='text-3xl font-bold mb-4 text-center'>Our Services</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
          {/* Home Delivery */}
          <div className=' p-4 rounded-lg shadow-lg flex items-center'>
            <FaHome className='text-2xl  text-blue-500 mr-2' />
            <h3 className='text-lg font-semibold'>Home Delivery</h3>
          </div>

          {/* Return Policy */}
          <div className=' p-4 rounded-lg shadow-lg flex items-center'>
            <FaUndo className='text-2xl text-blue-500 mr-2' />
            <h3 className='text-lg font-semibold'>Return Policy</h3>
          </div>

          {/* Quick Support System */}
          <div className=' p-4 rounded-lg shadow-lg flex items-center'>
            <FaLifeRing className='text-2xl text-blue-500 mr-2' />
            <h3 className='text-lg font-semibold'>Quick Support System</h3>
          </div>

          {/* Secure Payment Way */}
          <div className=' p-4 rounded-lg shadow-lg flex items-center'>
            <FaShieldAlt className='text-2xl text-blue-500 mr-2' />
            <h3 className='text-lg font-semibold'>Secure Payment Way</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
