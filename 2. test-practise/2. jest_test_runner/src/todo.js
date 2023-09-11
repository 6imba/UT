import { getElementBySelector } from '~/utils';

module.exports = (
  selectorToObserve,
  selectorToWaitFor,
  callback,
  options = {
    childList: true,
    subtree: true,
  }
) => {
  const elementToObserve = getElementBySelector(selectorToObserve);

  useMutationObserver(
    elementToObserve,
    (mutations, mutationObserver) => {
      mutations.forEach((mutation) => {
        const elementFound = mutation.target.querySelector(selectorToWaitFor);

        if (elementFound) {
          callback(selectorToWaitFor);

          mutationObserver.disconnect();
        }
      });
    },
    options
  );
};
