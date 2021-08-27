import { helper } from '@ember/component/helper';

export function getSpeakersName(params/*, hash*/) {
  let [lastName, firsName, middleName] = params;
  return `${lastName} ${firsName} ${middleName}`;
}

export default helper(getSpeakersName);
