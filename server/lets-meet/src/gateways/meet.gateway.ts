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
import { UserModel } from "src/models/app.model";

interface ConnectedRooms{
    [roomId: string]: UserModel[];
}

@WebSocketGateway({ namespace: 'meet', cors: true })
export class MeetGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect{
    @WebSocketServer()
    server: Server;
    private users: ConnectedRooms = {};
    private logger: Logger = new Logger('Socket Gateway');

    afterInit(server: Server) {
        this.logger.log('**Socket Initialized**');
    }

    private addNewMemberToRoom(payload: UserModel){

    }

    @SubscribeMessage('joinRoom')
    private joinRoom(client: Socket, roomId: string): void{
        client.join(roomId);
        this.logger.log(`${client.id} has been joined the room ${roomId}`);
    }

    @SubscribeMessage('leaveRoom')
    private leaveRoom(client: Socket, roomId: string): void{
        client.leave(roomId);
        this.logger.log(`${client.id} has leaved the room ${roomId}`);
    }

    handleConnection(client: Socket, ...args: any[]) {
        this.logger.log('**Client has been Connected**');
        console.log(client.id)
    }

    handleDisconnect(client: Socket) {
        this.logger.log('**Client has been Disconnected**');
        client.removeAllListeners();
    }

}