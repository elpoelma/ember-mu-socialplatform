import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { io } from "socket.io-client";
import uikit from 'uikit';

export default class ApplicationController extends Controller {
  @service session;
  @service account;
  @service store;

  @service('websockets') websockets;
  @service flashMessages;

  constructor(){
    super(...arguments);

    const socket = this.websockets.socketFor('ws://localhost:3002')
    socket.on('message', this.newPostHandler, this);
  }

  async newPostHandler(event){
    let response = JSON.parse(event.data);

    let post = await this.store.findRecord('post', response.uuid);
    let author = await post.author;
    // UIkit.notification({
    //   message: `${author.formattedNickname}`,
    //   timeout: 5000
    // });
    this.flashMessages.success('Notification!')
    this.store.findAll('post');

  }

}