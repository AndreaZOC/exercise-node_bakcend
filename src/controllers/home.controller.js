let _homeService = null;

class HomeController {
  //nombre en container
  constructor({ HomeService }) {
    _homeService = HomeService;
  }
  index(req, res) {
    return res.send(_homeService.index());
  }
}

module.exports = HomeController;
