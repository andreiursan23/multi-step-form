import { SetStateAction, Dispatch } from 'react';

import Step1 from '../components/Step1';
import Step2 from '../components/Step2';
import Step3 from '../components/Step3';
import Confirmation from '../components/Confirmation';

const nextStep = (setStep: (value: SetStateAction<number>) => void) =>
  setStep((prevStepVal: number) => prevStepVal + 1);

const prevStep = (setStep: (value: SetStateAction<number>) => void) =>
  setStep((prevStepVal: number) => prevStepVal - 1);

export const renderStep = (step: number, setStep: Dispatch<SetStateAction<number>>) => {
  switch (step) {
    case 0:
      return <Step1 nextStep={() => nextStep(setStep)} />;
    case 1:
      return (
        <Step2 nextStep={() => nextStep(setStep)} prevStep={() => prevStep(setStep)} />
      );
    case 2:
      return (
        <Step3 nextStep={() => nextStep(setStep)} prevStep={() => prevStep(setStep)} />
      );
    case 3:
      return <Confirmation />;
    default:
  }
};
