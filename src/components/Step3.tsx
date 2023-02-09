import { FC } from 'react';
import { useFormContext } from '../context/FormContext';
import { useForm, Controller } from 'react-hook-form';
import { IUser } from '../typings/user';
import { zodResolver } from '@hookform/resolvers/zod';
import { Step3Schema } from '../typings/form';
import { motion } from 'framer-motion';
import { fadeAnimation } from '../utils/animations';
import { Button, Checkbox } from '../ui';
import { FastArrowLeft, CheckCircle } from 'iconoir-react';
import { IStep2and3Props } from '../typings/form';

const Step3: FC<IStep2and3Props> = (props: IStep2and3Props) => {
  const { nextStep, prevStep } = props;

  const { user, setUser } = useFormContext();

  const saveData = (data: IUser) => {
    setUser({ ...user, ...data });
    nextStep();
  };

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<IUser>({
    defaultValues: user || undefined,
    mode: 'onSubmit',
    resolver: zodResolver(Step3Schema),
  });

  return (
    <motion.div
      initial="out"
      animate="in"
      variants={fadeAnimation}
      className="w-full mb-12 lg:p-16 lg:border-2 lg:border-purple-400 lg:bg-white lg:rounded-2xl lg:shadow-2xl"
    >
      <form noValidate onSubmit={handleSubmit(saveData)}>
        <div className="w-full flex flex-col content-center relative transition-all duration-200 ease-in-out mb-6 ">
          <label className="font-light text-sm text-gray-500 pb-2">Travel reason:</label>

          <label
            htmlFor="travel-personal"
            className="mr-4 mb-1 flex items-center cursor-pointer"
          >
            <input
              {...register('travelReason')}
              type="radio"
              value="Personal"
              id="travel-personal"
              className="cursor-pointer"
            />
            <p className="ml-3 text-base text-purple-900">Personal</p>
          </label>

          <label
            htmlFor="travel-business"
            className="mr-4 flex items-center cursor-pointer"
          >
            <input
              {...register('travelReason')}
              type="radio"
              value="Business"
              id="travel-business"
              className="cursor-pointer"
            />
            <p className="ml-3 text-base text-purple-900">Business</p>
          </label>
          {errors.travelReason && (
            <small className="absolute -bottom-4 left-0 text-xs leading-3 text-red-400">
              You must select one option
            </small>
          )}
        </div>

        <p className="font-light text-sm text-gray-500 pb-2">
          By checking the box and submitting the form, you confirm that you have read and
          agree to all the terms outlined in this document.
        </p>
        <Controller
          control={control}
          name="termsAndConditions"
          render={({ field: { onChange } }) => (
            <Checkbox
              name="termsAndConditions"
              placeholder="termsAndConditions"
              label="Accept Terms and Conditions"
              defaultChecked={false}
              onChange={onChange}
              errorMessage={
                errors.termsAndConditions ? 'You must accept Terms and Conditions' : ''
              }
            />
          )}
        />

        <div className="flex flex-col mt-8 lg:flex-row lg:gap-x-4">
          <Button
            variant="secondary"
            onClick={prevStep}
            iconLeft={<FastArrowLeft color="#6b21a8" height="100%" width="100%" />}
            className="order-1"
          >
            Previous step
          </Button>

          <Button
            variant="primary"
            iconRight={<CheckCircle color="#FFFFFF" height="100%" width="100%" />}
            type="submit"
            className="mb-4 lg:mb-0 lg:order-1"
          >
            Submit form
          </Button>
        </div>
      </form>
    </motion.div>
  );
};

export default Step3;
