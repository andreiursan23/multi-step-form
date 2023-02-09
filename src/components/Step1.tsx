import { FC } from 'react';
import { useFormContext } from '../context/FormContext';
import { useForm } from 'react-hook-form';
import { IUser } from '../typings/user';
import { zodResolver } from '@hookform/resolvers/zod';
import { Step1Schema } from '../typings/form';
import { Input, Button } from '../ui';
import { FastArrowRight } from 'iconoir-react';
import { motion } from 'framer-motion';
import { fadeAnimation } from '../utils/animations';
import { IStep1Props } from '../typings/form';

const Step1: FC<IStep1Props> = (props: IStep1Props) => {
  const { nextStep } = props;

  const { user, setUser } = useFormContext();

  const saveData = (data: IUser) => {
    setUser({ ...user, ...data });
    nextStep();
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IUser>({
    defaultValues: user || undefined,
    mode: 'onSubmit',
    resolver: zodResolver(Step1Schema),
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
          {...register('firstName')}
          id="firstName"
          label="First name"
          placeholder="John"
          errorMessage={errors.firstName?.message}
        />

        <Input
          {...register('lastName')}
          id="lastName"
          label="Last name"
          placeholder="Smith"
          errorMessage={errors.lastName?.message}
        />

        <Input
          {...register('email')}
          id="email"
          label="Email"
          placeholder="example@provider.com"
          errorMessage={errors.email?.message}
        />

        <Button
          type="submit"
          variant="primary"
          iconRight={<FastArrowRight color="#FFFFFF" height="100%" width="100%" />}
          className="mt-6 lg:max-w-sm lg:mx-auto"
        >
          Next step
        </Button>
      </form>
    </motion.div>
  );
};

export default Step1;
