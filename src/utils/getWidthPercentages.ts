// Used for the visual of the current step
export const getWidthPercentages = (noOfSteps: number) => {
  return Array.from(Array(noOfSteps).keys()).map((step) =>
    step === 0 ? 'w-[5%]' : `w-[${((step / 3) * 100).toFixed(2)}%]`
  );
};
