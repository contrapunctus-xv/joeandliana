import express from 'express';
import { devConfig as config} from '../webpack.config';
import devMiddleware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';
import { renderFile } from 'pug';
import webpack from 'webpack';
import path from 'path';

const app = express();
let buildUrl;

if (!process.env.NODE_ENV) {
    const compiler = webpack(config);
    app.use(devMiddleware(compiler, {
        noInfo: true,
        publicPath: config.output.publicPath
    }));
    app.use(hotMiddleware(compiler));
    buildUrl = config.output.publicPath;

}
else if(process.env.NODE_ENV === 'production') {
    app.use(express.static('build'));
    buildUrl = '';
}

const INDEX_PATH = path.resolve(__dirname,'../src/index.html.pug');
app.get('*', (request, response) => {
    const layout = renderFile(INDEX_PATH, {__BUILD_URL__: buildUrl});
    response.send(layout);
});

app.listen(process.env.PORT || 8080);
