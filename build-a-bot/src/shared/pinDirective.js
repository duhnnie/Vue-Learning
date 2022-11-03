/* eslint no-param-reassign: 0 */
export default function (element, binding) {
  if (binding.arg !== 'position') return;

  Object.keys(binding.modifiers).forEach((modifier) => {
    element.style[modifier] = '5px';
  });

  element.style.position = 'absolute';
}
