import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { Promise } from 'rsvp';
import { later } from '@ember/runloop';

export default Route.extend({
  dataService: service('data'),

  model() {
    return new Promise((resolve) => {
      later(async () => {
        let bookInfo = await this.get("dataService").getBookInfo();
        resolve(bookInfo);
      }, 3000)
    });

  }
});
