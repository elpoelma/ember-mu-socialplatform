import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { io } from "socket.io-client";
import uikit from 'uikit';

export default class ApplicationController extends Controller {
  @service session;
  @service account;

  constructor(){
    super(...arguments);

    const socket = io('http://localhost:3002');

    // const socket = this.socketIOService.socketFor('http://localhost:3002');


    socket.on('new post', this.newPostHandler);
  }

  newPostHandler(post){
    UIkit.notification({
      message: `${post.headline}\n${post.body}`,
      timeout: 5000
    });
    console.log(post);
  }

}