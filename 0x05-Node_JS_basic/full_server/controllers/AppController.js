/**
 * Contains the miscellaneous route handlers.
 * @author ibrahim balogun <https://github.com/ibrodante>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
