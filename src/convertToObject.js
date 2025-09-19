'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  // write your code here
  const objectOfStyles = {};
  const styles = sourceString.split(';');

  const normalizedStyles = styles
    .map((style) => style.trim())
    .filter((style) => style !== '');

  normalizedStyles
    .map((style) => style.split(':'))
    .forEach((style) => {
      if (style[1]) {
        objectOfStyles[style[0].trim()] = style[1].trim();
      }
    });

  return objectOfStyles;
}

module.exports = convertToObject;
