import Head from 'next/head';
import { useState } from 'react';
import { useFormContext } from '../context/FormContext';
import { renderStep } from '../utils/renderSteps';
import { Loader } from '../ui';

export default function Home() {
  const { user, isLoading, isError } = useFormContext();

  const [step, setStep] = useState<number>(0);

  const noOfSteps = 4;
  const widthPercentages = ['w-[5%]', 'w-[33.33%]', 'w-[66.67%]', 'w-[100.00%]'];

  return (
    <>
      <Head>
        <title>Multi-step Form</title>
        <meta name="description" content="Multi step form" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-w-full lg:bg-purple-100">
        {isLoading && !isError ? (
          <div className="flex flex-col justify-center items-center min-h-screen h-full w-11/12 mx-auto">
            <Loader />
            <p className="mt-12 text-xl font-medium tracking-wide text-purple-700">
              Loading form...
            </p>
          </div>
        ) : null}

        {isError ? (
          <div className="flex flex-col justify-center items-center min-h-screen h-full w-11/12 mx-auto">
            <p className="text-xl font-medium tracking-wide text-purple-700">
              Sorry, something went wrong...
            </p>
          </div>
        ) : null}

        <div className="flex flex-col items-center min-h-screen h-full w-11/12 mx-auto lg:max-w-5xl lg:pb-20">
          {user ? (
            <>
              <div className="w-1/2 lg:w-1/4 h-2 rounded-3xl mb-2 lg:mb-6 mt-8 lg:mt-16 overflow-hidden">
                <div className="w-full h-full bg-gray-300">
                  <span
                    className={`h-full block ${widthPercentages[step]} bg-purple-600 transition-all duration-200 ease-linear`}
                  ></span>
                </div>
              </div>

              <h1 className="text-xl text-purple-500 font-bold tracking-wide mb-6 lg:text-3xl">
                {step === noOfSteps - 1 ? 'Congratulations' : `Step ${step + 1}`}
              </h1>

              {renderStep(step, setStep)}
            </>
          ) : null}
        </div>
      </main>
    </>
  );
}
