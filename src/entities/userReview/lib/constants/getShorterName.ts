export const getShorterName = (name: string) => {
  const [lastName, firstName] = name.split(' ');
  const formattedName = firstName
    ? `${lastName} ${firstName.charAt(0) + '.'}`
    : lastName;
  
    return formattedName;
};
