import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { io } from "socket.io-client";
import uikit from 'uikit';

export default class ApplicationController extends Controller {
  @service session;
  @service account;
  @service('websockets') websockets;

  constructor(){
    super(...arguments);

    const socket = this.websockets.socketFor('ws://localhost:3002')



    socket.on('message', this.newPostHandler, this);
  }

  newPostHandler(event){
    let post = JSON.parse(event.data);
    UIkit.notification({
      message: `${post.headline}\n${post.body}`,
      timeout: 5000
    });
  }

}