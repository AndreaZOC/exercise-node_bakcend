const { createContainer, asClass, asValue, asFunction } = require("awilix");

//config
const config = require("../config");
const app = require(".");

//service
const { HomeService } = require("../services");

//controllers
const { HomeController } = require("../controllers");

//routes
const { HomeRoutes } = require("../routes/index.routes");
const Routes = require("../routes");

const container = createContainer();

container
  .register({//config
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config),
  })
  .register({//servicios
    HomeService: asClass(HomeService).singleton(),
  })
  .register({//controllers
    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
  })
  .register({//routes
    HomeRoutes: asFunction(HomeRoutes).singleton(),
  });

module.exports = container;
