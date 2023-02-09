import { FC } from 'react';
import { useFormContext } from '../context/FormContext';
import { motion } from 'framer-motion';
import { fadeAnimation } from '../utils/animations';
import { getUserData } from '../utils/getUserData';

const Confirmation: FC = () => {
  const { user } = useFormContext();

  return (
    <motion.div initial="out" animate="in" variants={fadeAnimation} className="w-full">
      {user ? (
        <>
          <p className="text-gray-500 text-lg mb-4 text-center">
            You can check below the information submitted to us. Thank you!
          </p>

          <div className="p-4 bg-gray-100 border border-purple-700 rounded-xl mb-12 lg:text-center">
            {getUserData(user).map(({ title, value }) => (
              <div key={title} className="mb-4 last-of-type:mb-0">
                <p className="font-light text-xs text-gray-500 tracking-wider">
                  {title}:
                </p>
                <p className="font-medium text-lg tracking-wide text-purple-600">
                  {value === true ? 'Accepted' : value}
                </p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p className="mt-12 text-xl font-medium tracking-wide text-purple-700">
          Loading...
        </p>
      )}
    </motion.div>
  );
};

export default Confirmation;
