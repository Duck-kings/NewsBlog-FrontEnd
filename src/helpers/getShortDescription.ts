export const getShortDescription = (
  desc: string,
  amountWords: number = 10
): string => {
  const filtredDesc: string[] = desc.split(' ').filter((item, index) => {
    if (index < amountWords) {
      return item;
    }

    return null;
  });

  return `${filtredDesc.join(' ')}...`;
};
