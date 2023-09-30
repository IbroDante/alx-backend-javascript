export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
  const task = true; //eslint-disabled
  const task2 = false; // estlint-disable
  }

  return [task, task2];
}
