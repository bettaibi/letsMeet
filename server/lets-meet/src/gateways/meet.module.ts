import { Module } from '@nestjs/common';
import { MeetGateway } from './meet.gateway';


@Module({
    providers: [MeetGateway],
    exports: [MeetGateway]
})
export class MeetModule{}