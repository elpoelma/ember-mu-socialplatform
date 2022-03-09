import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { io } from "socket.io-client";

export default class ApplicationController extends Controller {
  @service session;
  @service account;

  constructor(){
    super(...arguments);

    const socket = io('http://localhost:3002');

    // const socket = this.socketIOService.socketFor('http://localhost:3002');


    socket.on('new post', () => {
      console.log('New post!')
    });
  }

  newPostHandler(event){
    console.log(event.data);
  }
}