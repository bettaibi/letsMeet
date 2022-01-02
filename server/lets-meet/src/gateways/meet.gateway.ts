import { Logger } from "@nestjs/common";
import { 
    MessageBody, 
    SubscribeMessage, 
    WebSocketGateway, 
    WebSocketServer,
    OnGatewayInit,
    OnGatewayConnection,
    OnGatewayDisconnect
} from "@nestjs/websockets";
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ namespace: 'chat', cors: true })
export class MeetGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect{
    @WebSocketServer()
    server: Server;

    private logger: Logger = new Logger('Socket Gateway');

    afterInit(server: Server) {
        this.logger.log('**Socket Initialized**');
    }

    handleConnection(client: Socket, ...args: any[]) {
        this.logger.log('**Client has been Connected**');
    }

    handleDisconnect(client: Socket) {
        this.logger.log('**Client has been Disconnected**');
        client.removeAllListeners();
    }

}