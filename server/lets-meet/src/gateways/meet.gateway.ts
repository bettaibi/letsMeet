import { Logger } from "@nestjs/common";
import { 
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
interface ConnectedSockets{
    [socketId: string]: string;
}

@WebSocketGateway({ namespace: 'meet', cors: true })
export class MeetGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect{
    @WebSocketServer()
    server: Server;
    private users: ConnectedRooms = {};
    private connectedSockets: ConnectedSockets = {};
    private logger: Logger = new Logger('Socket Gateway');

    afterInit(server: Server) {
        this.logger.log('**Socket Initialized**');
    }

    private addNewMemberToRoom(payload: UserModel, roomId: string, socketId: string){
        this.users[roomId] = [ {...payload, socketId}];
    }

    private deleteMemberFromRoom(socketId: string, roomId: string){
        this.users[roomId] = this.users[roomId].filter((item: UserModel) => {
            return item.socketId !== socketId;
        });
    }

    @SubscribeMessage('joinRoom')
    private joinRoom(client: Socket, roomId: string): void{
        client.join(roomId);
        if(!this.users.hasOwnProperty(roomId)){
            console.log("*** room registred ***")
            this.users[roomId] = [];
        }
        client.emit('onRoomJoined', {isJoined: true});
        console.log(this.users);
        this.logger.log(`${client.id} has been joined the room ${roomId}`);
    }

    @SubscribeMessage('leaveRoom')
    private leaveRoom(client: Socket, roomId: string): void{
        client.leave(roomId);
        this.deleteMemberFromRoom(client.id, roomId);

        this.server.to(roomId).emit('roomMembers', [...this.users[roomId]]);
        this.logger.log(`${client.id} has leaved the room ${roomId}`);
    }

    @SubscribeMessage('dataSignal')
    private getSignal(client: Socket, roomId: string, payload: UserModel): void{
        this.addNewMemberToRoom(payload, roomId, client.id);
        this.server.to(roomId).emit('roomMembers', [...this.users[roomId]]);
    }

    handleConnection(client: Socket, ...args: any[]) {
        this.logger.log('**Client has been Connected**');
        console.log(client.id)
    }

    handleDisconnect(client: Socket) {
        this.logger.log('**Client has been Disconnected**');
        const roomId = this.connectedSockets[client.id];
        client.leave(roomId);
        if(this.users.hasOwnProperty(roomId)){
            this.deleteMemberFromRoom(client.id, roomId);
            this.server.to(roomId).emit('roomMembers', [...this.users[roomId]]);
        }
        client.removeAllListeners();
    }

}