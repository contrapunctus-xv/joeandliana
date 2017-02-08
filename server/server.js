import express from 'express';
import { devConfig as config} from '../webpack.config';
import devMiddleware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';
import webpack from 'webpack';
import path from 'path';

const app = express();
const port = 8080;
const compiler = webpack(config);
app.use(devMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));
app.use(hotMiddleware(compiler));


// set the home page route
app.get('/', (req, res) => res.sendFile(path.resolve(__dirname,'../src/index.html')));

app.listen(port, () =>
    console.log('Our app is running on http://localhost:' + port)
);
