 import express, {Application, Request, Response} from 'express';
 import routesUser from '../routes/user'
 import sequelize from '../db/connection';
import cors from 'cors';


 class Server {
    private app: Application;
    private port: string;

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '3000';
        this.listen();
        this.middlewares();
        this.routes();
        this.dbConnect();
        
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('listening in port ' + this.port);
        });
    }

    routes(){
        
        this.app.use('/api/users', routesUser );    
        // Ruta de prueba
        this.app.get('/', (_req: Request, res: Response) => {
            res.send('Servidor funcionando correctamente');
        });
        
    }

    middlewares () {
        //parseo body
        this.app.use(express.json());

        //Cors
        this.app.use(cors());
    }

    async dbConnect() {
        try {
            // Sincronizar todos los modelos
            await sequelize.sync({ alter: true });
            console.log('Base de datos sincronizada');
            try {
               
                console.log('Relación establecida correctamente');
              } catch (error) {
                console.error('Error al establecer la relación:', error);
              }
            
          } catch (error) {
            console.error('Unable to connect to the database:', error);
          }
    }

}

export default Server