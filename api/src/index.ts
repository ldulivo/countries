import dotenv from 'dotenv';
import Server from './bin/server';

const country = () => {
    
    dotenv.config();
    
    const server = new Server();
    server.listen();
}

export default country();