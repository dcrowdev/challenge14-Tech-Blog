const express = require('express');
const sequelize = require('./config/connection');
const path = require('path');
const exphbs = require('express-handlebars');
const routes = require('./controllers')
const app = express();

//PORT
const PORT = process.env.PORT || 3001;

//handlebars
const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars')

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);


// server initialization
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
  });
