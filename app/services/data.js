import Service from '@ember/service';

export default Service.extend({
  getBookInfo() {
    return fetch('http://localhost:3000/bookInfo').then((response) =>response.json);
  },
  getSpeakers() {
    return fetch('http://localhost:3000/speakers').then((response) => response.json);
  }
});
