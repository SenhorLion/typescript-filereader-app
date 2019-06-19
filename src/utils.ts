export const dateStringToDate = (dateString: string): Date => {
  const dateParts = dateString.split('/').map((value: string): number => parseInt(value));
  //11/08/2018
  return new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
};
