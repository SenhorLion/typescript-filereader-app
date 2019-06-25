/**
 * Transforms a date string: 10/08/2018
 * into a Date Object: 2018-08-10T23:00:00.000Z
 * @method dateStringToDate
 * @param dateString: string
 * @return Date
 */
export const dateStringToDate = (dateString: string): Date => {
  const dateParts = dateString
    .split('/')
    .map((value: string): number => parseInt(value));

  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
