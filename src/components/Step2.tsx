import { FC } from 'react';
import { useFormContext } from '../context/FormContext';
import { IUser } from '../typings/user';
import { zodResolver } from '@hookform/resolvers/zod';
import { Step2Schema } from '../typings/form';
import { COUNTRIES } from '../typings/countries';
import { Input, Select, Button } from '../ui';
import { useForm } from 'react-hook-form';
import { FastArrowRight, FastArrowLeft } from 'iconoir-react';
import { motion } from 'framer-motion';
import { fadeAnimation } from '../utils/animations';
import { IStep2and3Props } from '../typings/form';

const Step2: FC<IStep2and3Props> = (props: IStep2and3Props) => {
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
    resolver: zodResolver(Step2Schema),
  });

  return (
    <motion.div
      initial="out"
      animate="in"
      variants={fadeAnimation}
      className="w-full mb-12 lg:p-16 lg:border-2 lg:border-purple-400 lg:bg-white lg:rounded-2xl lg:shadow-2xl"
    >
      <form noValidate onSubmit={handleSubmit(saveData)}>
        <Input
          {...register('address')}
          id="address"
          label="Address"
          placeholder="str. Paradise, no. 8"
          errorMessage={errors.address?.message}
        />

        <div className="grid grid-cols-2 gap-x-4">
          <Input
            {...register('city')}
            id="city"
            label="City"
            placeholder="Luxembourg"
            errorMessage={errors.city?.message}
          />

          <Input
            {...register('phone')}
            id="phone"
            label="Phone"
            placeholder="+40 723 821 123"
            errorMessage={errors.phone?.message}
          />
        </div>

        <div className="grid grid-cols-2 gap-x-4">
          <Input
            {...register('state')}
            id="state"
            label="State"
            placeholder="Luxembourg City"
            errorMessage={errors.state?.message}
          />

          <Input
            {...register('postcode')}
            id="postcode"
            label="Postcode"
            placeholder="L-1210"
            errorMessage={errors.postcode?.message}
          />
        </div>

        <Select
          name="country"
          control={control}
          label="Country"
          selectData={COUNTRIES}
          errorMessage={errors.country ? 'Please select a country' : ''}
        />

        <div className="flex flex-col mt-6 lg:flex-row lg:gap-x-4">
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
            iconRight={<FastArrowRight color="#FFFFFF" height="100%" width="100%" />}
            type="submit"
            className="mb-4 lg:mb-0 lg:order-1"
          >
            Next step
          </Button>
        </div>
      </form>
    </motion.div>
  );
};

export default Step2;
