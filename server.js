
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const homeController = require('./controllers/api/homeController');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const funkoData = require('./Products/funkoData.json');

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

const hbs = exphbs.create({
  /* handlebars configuration */
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
// Add a route for the homepage
app.get('/', (req, res) => {
  res.render('home', { items: funkoData, layout: 'main' });
});

app.get('/product/:id', (req, res) => {
  const productId = req.params.id; // Get the value of the "id" parameter from the request
  console.log('Product ID:', productId);
  // Find the product in the funkData array based on the id
  const product = funkoData.find(item => item.id === productId);


    // Render the "product" template and pass the specific product data
    res.render('product', { product, layout: 'main' });
  }
);


app.use('/api', homeController);
app.use(routes);



sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
});
