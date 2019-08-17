
export const findByTestAtrribute = (component, attribute) => {
  return component.find(`[data-test='${attribute}']`);
}