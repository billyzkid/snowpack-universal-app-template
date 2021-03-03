import snowpack from 'snowpack';
import snowpackUserConfig from '../snowpack.config.js';
import path from 'path';
import express from 'express';
import http from 'http';
import createSocketServer from './socket.js';

export default async function startServer(dev) {
  if (dev) {
    const config = snowpack.createConfiguration(snowpackUserConfig);
    const devServer = await snowpack.startServer({ config });
    const socketServer = createSocketServer(devServer.server); // See commit in forked repo required to make this work: https://github.com/billyzkid/snowpack/commit/47a45a0aa3adb44180ec832c6f6f934b03cf8ac2
  } else {
    const app = express();
    const httpServer = http.createServer(app);
    const socketServer = createSocketServer(httpServer);
    const port = process.env.PORT || 4000;

    app.use(express.static(path.join(process.cwd(), 'build')));

    httpServer.listen(port, () => {
      console.info(`Listening on port ${port}`);
    });
  }
}
