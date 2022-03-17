import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import SessionService from 'frontend/services/session';
import AccountService from 'frontend/services/account';
import Store from '@ember-data/store';

export default class NewPostComponent extends Component {
  @tracked
  headline!: string;
  @tracked
  body!: string;
  @tracked thumbnailurl!: string;
  @tracked
  image!: string;
  @tracked
  imagePreviewURL!: string;
  @service
  store!: Store;
  @service
  session!: SessionService;
  @service
  account!: AccountService;

  @action
  async createPost(event: { preventDefault: () => void }) {
    event.preventDefault();
    let imageurl;
    let thumbnailurl;
    if (this.image) {
      let data = new FormData();
      data.append('file', this.image);
      const response: Response = await fetch('/files', {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'multipart/form-data',
        }),
        body: data,
      });
      if (response.ok) {
        let image = await response.json();
        imageurl = `/images/${image.data.id}`;
        thumbnailurl = `/images/${image.data.id}?height=200&width=300`;
      } else {
        throw new Error(await response.text());
      }
    }
    let author;
    if (this.session.isAuthenticated) {
      author = this.account.userAccount;
    }

    const post = this.store.createRecord('post', {
      headline: this.headline,
      articlebody: this.body,
      thumbnailurl: thumbnailurl,
      image: imageurl,
      author: author,
    });
    post.save();
    this.headline = '';
    this.body = '';
    this.imagePreviewURL = '';
    UIkit.modal('#modal-example').hide();
  }

  @action
  setPostImage(event: Event) {
    event.preventDefault();
    if (event.target.files) {
      let file = event.target.files[0];
      this.image = file;
      const reader = new FileReader();

      reader.onload = (e) => {
        this.imagePreviewURL = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
