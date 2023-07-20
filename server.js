const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const homeController = require('./controllers/api/homeController');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const funkoData = require('./Products/funkoData.json');
console.log('funkoData', funkoData);
const { getCartData } = require('./public/cart');
const { Product } = require('./models');
const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
    httpOnly: true,
    secure: false, // set to true if your using https
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};
app.use(session(sess));

const hbs = exphbs.create({
  /* handlebars configuration */
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
// Add a route for the homepage
app.get('/', (req, res) => {
  res.render('home', { items: funkoData, layout: 'main' });
});

app.get('/product/:id', (req, res) => {
  const productId = parseInt(req.params.id, 10); // Convert the ID parameter to a number
  console.log('Product ID:', productId);
  // Find the product in the funkoData array based on the id
  const product = funkoData.find((item) => item.id === productId);

  if (!product) {
    // Handle case when product is not found
    res.status(404).send('Product not found');
  } else {
    // Render the "product" template and pass the specific product data
    res.render('product', { product, layout: 'main' });
  }
});
app.get('/cart', (req, res) => {
  // Render the cart view (cart.handlebars) and pass the cart data
  const cart = req.session.cart || [];
  console.log('cart', cart);
  res.render('cart', { cart, layout: 'main' });
});

app.post('/cart', async (req, res) => {
  console.log(req.body)
 try { const productId = req.body.id
  const cart = req.session.cart || [];
  const product = funkoData.find((item) => item.id == productId);
  cart.push(product)
  req.session.cart = cart;
  req.session.save(() => {
    console.log(productId)
    console.log(product)
    console.log(cart)
    console.log(req.session);
    res.redirect(`/`);
  })
 } catch(err) {
  console.log(err);
  res.status(500).json(err);
 }
})

app.get('/login', (req, res) => {
  res.render('login', { layout: 'main' });
});
//added 7-19-21 4:42pm ll
app.get('/signup', (req, res) => {
  res.render('signup', { layout: 'main' });
});

app.use('/api', homeController);
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
});
