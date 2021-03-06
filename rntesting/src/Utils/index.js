
import checkPropTypes from 'check-prop-types';

export const findByTestAtrribute = (component, attribute) => {
  return component.find(`[data-test='${attribute}']`);
}

export const checkProps = (component, expectedProps) => {
  const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
  return propsErr;
};