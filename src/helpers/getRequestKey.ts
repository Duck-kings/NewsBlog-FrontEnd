export const getRequestKey = (
  key: string[],
  dynamicParam?: string
): string[] => {
  if (dynamicParam !== undefined && dynamicParam.trim().length !== 0)
    return [...key, dynamicParam];

  return key;
};
