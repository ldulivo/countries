import express, { Application } from 'express';
import cors from 'cors';

import apiRouters from '../routes/api_routes';
import apiWeather from '../routes/weather_routes';

class Server {

    private app: Application;
    private port: string;

    constructor() {
        this.app = express();

        this.port = process.env.PORT || '8000';

        // Initials methods
        this.middlewares();

        // Define routes
        this.routers();
    }

    middlewares() {
        // CORS
        this.app.use( cors() );

        // Body reading
        this.app.use( express.json() );

        // Public folder
        this.app.use( express.static('public') );
    }

    routers() {
        
        this.app.use( '/api', apiRouters );
        this.app.use( '/api/weather', apiWeather );
    }

    
    listen() {
        this.app.listen( this.port, ()=> {
            console.log('Server running on port: ', this.port);
        })
    }
}

export default Server;